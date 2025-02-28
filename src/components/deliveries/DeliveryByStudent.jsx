import { useState } from "react";

function DeliveryModal({ utils, deliveryId, studentId, onClose }) {
  const [selectedUtils, setSelectedUtils] = useState([]);
  const [moneyAmount, setMoneyAmount] = useState("");
  const [isMoneySelected, setIsMoneySelected] = useState(false);

  const toggleUtil = (utilId) => {
    setSelectedUtils((prev) =>
      prev.includes(utilId) ? prev.filter((id) => id !== utilId) : [...prev, utilId]
    );
  };

  const handleMoneySelection = (e) => {
    setIsMoneySelected(e.target.checked);
    if (!e.target.checked) setMoneyAmount("");
  };

  const handleSubmit = () => {
    const utilsDeliveryId = crypto.randomUUID();
    
    const utilsDelivery = {
      utils_delivery_id: utilsDeliveryId,
      delivery: deliveryId,
      user: studentId,
      date: new Date().toISOString(),
      observations: "Entrega de útiles seleccionados",
    };

    const utilsDeliveryDetails = selectedUtils.map((utilId) => ({
      detail_id: crypto.randomUUID(),
      utils_delivery_id: utilsDeliveryId,
      util_id: utilId,
      quantity: 1,
      state: "Entregado",
    }));

    let moneyDelivery = null;
    if (isMoneySelected && moneyAmount) {
      moneyDelivery = {
        money_delivery_id: crypto.randomUUID(),
        delivery_id: deliveryId,
        user_id: studentId,
        amount: parseFloat(moneyAmount),
        date: new Date().toISOString(),
        observations: "Entrega de dinero en lugar de útiles",
      };
    }

    console.log("Utils Delivery:", utilsDelivery);
    console.log("Utils Delivery Details:", utilsDeliveryDetails);
    if (moneyDelivery) console.log("Money Delivery:", moneyDelivery);

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Entrega de Útiles</h2>
        <div className="mb-4">
          {utils.map((util) => (
            <div key={util.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`util-${util.id}`}
                onChange={() => toggleUtil(util.id)}
              />
              <label htmlFor={`util-${util.id}`} className="ml-2">{util.name}</label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="money-option"
            onChange={handleMoneySelection}
          />
          <label htmlFor="money-option" className="ml-2">Seleccionar dinero</label>
          {isMoneySelected && (
            <input
              type="number"
              value={moneyAmount}
              onChange={(e) => setMoneyAmount(e.target.value)}
              placeholder="Ingrese monto"
              className="mt-2 w-full p-2 border rounded"
            />
          )}
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryModal;
