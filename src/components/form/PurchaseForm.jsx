import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { purchaseSchema } from "@/utils";
import { DateFormItem } from "../form/DateFormItem";
import { SuppliesFormItem } from "../form/SuppliesFormItem";
import { AcceptButton, CancelButton } from "../button";

export const PurchaseForm = ({
  defaultPurchase,
  onSubmit,
  handleCloseDialog,
}) => {
  const form = useForm({
    resolver: zodResolver(purchaseSchema),
    defaultValues: {
      id: defaultPurchase?.id || undefined,
      date: defaultPurchase?.date ? new Date(defaultPurchase.date): new Date(),
      purchase_detail: defaultPurchase?.purchase_detail || [],
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col h-full"
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => <DateFormItem field={field} />}
        />
        <FormField
          control={form.control}
          name="purchase_detail"
          render={({ field }) => <SuppliesFormItem field={field} form={form} />}
        />
        <div className="flex justify-center gap-x-10 mt-auto">
          <AcceptButton type="submit">Aceptar</AcceptButton>
          <CancelButton onClick={() => handleCloseDialog()}>
            Cancelar
          </CancelButton>
        </div>
      </form>
    </Form>
  );
};
