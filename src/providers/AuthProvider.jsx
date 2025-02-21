import { createContext, useEffect } from "react";
import { usePersistedState} from "@/hooks";
import { login as apiLogin, register as apiRegister, api } from "@/api";
import { toast } from "sonner";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = usePersistedState("authUser", null);
  const [token, setToken] = usePersistedState("authToken", null);

  useEffect(() => {
    const requestInterceptor = setupAuthInterceptor();
    return () => api.interceptors.request.eject(requestInterceptor);
  }, [token]);

  useEffect(() => {
    const responseInterceptor = setupErrorHandlingInterceptor();
    return () => api.interceptors.response.eject(responseInterceptor);
  }, []);

  const setupAuthInterceptor = () => {
    return api.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  };

  const setupErrorHandlingInterceptor = () => {
    return api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (!error.response) {
          toast.error("Error en la red. Inténtalo más tarde.");
          return Promise.reject(error);
        }

        const { status } = error.response;

        if (status === 401) {
          toast.error("Sesión expirada. Inicia sesión nuevamente.");
          logout();
        } else if (status === 403) {
          toast.error("No tienes permisos para esta acción.");
        } else if (status === 500) {
          toast.error("Error en el servidor. Inténtalo más tarde.");
        }

        return Promise.reject(error);
      }
    );
  };

  const login = async (email, password) => {
    try {
      const data = await apiLogin(email, password);
      console.log(data);
      setToken(data.token);
      setUser(data.user);
      toast.success("Inicio de sesión exitoso");
    } catch (error) {
      console.log(error);
      toast.error("Ha ocurrido un error al iniciar sesión");
    }
  };

  const register = async (name, last_name, email, password) => {
    try {
      const data = await apiRegister(name, last_name, email, password);
      setToken(data.token);
      setUser(data.user);
      toast.success("Registro exitoso");
    } catch (error) {
      console.log(error);
      toast.error("Ha ocurrido un error al registrarse");
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
