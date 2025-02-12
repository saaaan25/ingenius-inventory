import { SupplyCardForm } from ".";

export const SuppliesListForm = ({ field, form }) => {
  return (
    <>
      {field.value && field.value.length > 0
        ? field.value.map((fieldItem, index) => (
            <SupplyCardForm
              key={index}
              index={index}
              form={form}
              fieldItem={fieldItem}
            />
          ))
        : "No hay útiles agregados"}
    </>
  );
};
