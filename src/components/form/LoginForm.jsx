import { useForm } from "react-hook-form";
import SubmitButton from "../button/SubmitButton";
import InputField from "./InputField";
import { useAuth } from "@/hooks";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);
    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-80 bg-white p-8 shadow-xl rounded-lg"
    >
      <h2 className="text-primary font-bold text-2xl mb-5 text-center">
        Iniciar Sesión
      </h2>
      <InputField
        type="email"
        name="email"
        register={register}
        error={errors.email}
      />
      <InputField
        type="password"
        name="password"
        register={register}
        error={errors.password}
      />
      <div className="mt-7 w-full">
        <SubmitButton text="Iniciar Sesión" />
      </div>
    </form>
  );
};

export default LoginForm;
