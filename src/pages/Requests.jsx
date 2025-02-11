import RequestItem from "../components/RequestItem";
import requests from "../data-test/requests";

const Requests = () => {
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <a className="font-light text-routes text-sm" href="/requests">Solicitudes</a>
            <div className="pl-5 w-full flex flex-col items-start">
                <h1 className="font-semibold text-xl">Solicitudes</h1>
                <nav>
                </nav>
                <div className="w-full mt-4">
                    {requests.map((request) => (
                        <RequestItem key={request.id} request={request} />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Requests;