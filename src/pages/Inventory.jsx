import InventoryTable from '../components/InventoryTable.jsx';

const Inventory = () => {
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <a className="font-light text-routes text-sm" href="/inventory">Inventario</a>
            <div className="pl-5">
                <h1 className="font-semibold text-xl">Inventario</h1>
            </div>
            <InventoryTable />
        </div> 
        
    );
}

export default Inventory;