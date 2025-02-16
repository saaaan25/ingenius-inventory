import Container from "@/components/report/Container";
import MaterialStats from "@/components/report/MaterialStats";
import getStatsForRequest from "@/hooks/getStatsForRequests";

const Reports = () => {
    getStatsForRequest()
    const title = ["Material utilizado en el bimestre", "Resumen de solicitudes"]
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <a className="font-light text-routes text-xs" href="/reports">Reportes</a>
            <div className="pl-5 w-full flex flex-col items-start">
                <h1 className="font-semibold text-xl">Reportes</h1>
                <div className="w-full mt-4">
                    <Container title={title[0]}>
                        <MaterialStats />
                    </Container>
                </div>
            </div>
        </div>
    );
}
 
export default Reports;