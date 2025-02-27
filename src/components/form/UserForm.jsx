import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userSchema } from "@/utils";
import { AcceptButton, CancelButton } from "../button";

export const UserForm = ({ defaultUser, onSubmit, handleCloseDialog }) => {
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      id: defaultUser?.id || undefined,
      name: defaultUser?.name || "",
      last_name: defaultUser?.last_name || "",
      email: defaultUser?.email || "",
      password: "",
      photo_url: defaultUser?.photo_url || "",
      role: defaultUser?.role || "administrador",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col h-full"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} type="text" autoComplete="given-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="last_name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input {...field} type="text" autoComplete="family-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" autoComplete="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!defaultUser&&<FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input {...field} type="password" autoComplete="current-password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />}
        <FormField
          name="photo_url"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input {...field} type="url" autoComplete="url" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="role"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un rol" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="administrador">Administrador</SelectItem>
                  <SelectItem value="docente">Docente</SelectItem>
                  <SelectItem value="encargado">Encargado</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center gap-x-10 mt-auto">
          <AcceptButton type="submit">Aceptar</AcceptButton>
          <CancelButton type="button"onClick={() => handleCloseDialog()}>
            Cancelar
          </CancelButton>
        </div>
      </form>
    </Form>
  );
};
