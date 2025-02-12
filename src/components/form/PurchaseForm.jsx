import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { purchaseSchema } from "@/utils";
import { DateFormItem } from "./DateFormItem";
import { SuppliesFormItem } from "./SuppliesFormItem";
import { AcceptButton, CancelButton } from "../button";

export const PurchaseForm = ({ defaultPurchase }) => {
  const form = useForm({
    resolver: zodResolver(purchaseSchema),
    defaultValues: defaultPurchase || {
      fecha: new Date(),
      detalle_compra: [],
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fecha"
          render={({ field }) => <DateFormItem field={field} />}
        />
        <FormField
          control={form.control}
          name="detalle_compra"
          render={({ field }) => <SuppliesFormItem field={field} form={form} />}
        />

        <AcceptButton type="submit">Registar</AcceptButton>
      </form>
    </Form>
  );
};
