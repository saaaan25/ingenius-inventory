import {Button} from '@/components/ui/button';
const Purchases = () => {
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <a className="font-light text-routes text-sm" href="/purchases">Compras</a>
            <div className="pl-5">
                <h1 className="font-semibold text-xl">Compras</h1>
                <Button>hola</Button>
            </div>
        </div>
    );
}
 
export default Purchases;