export default function MoneyInput({ moneyGiven, setMoneyGiven }) {
    return (
      <div className="mt-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={moneyGiven} onChange={() => setMoneyGiven(!moneyGiven)} />
          ¿Dinero entregado?
        </label>
      </div>
    );
  }  