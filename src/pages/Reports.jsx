import Container from "@/components/report/Container";
import MaterialStats from "@/components/report/MaterialStats";
import getGeneralStats from "@/hooks/getGeneralStats";
import getStatsForPurchases from "@/hooks/getStatsForPurchases";
import getStatsForRequest from "@/hooks/getStatsForRequests";

const Reports = () => {
    const title = ["Material utilizado en el bimestre", "Resumen de solicitudes"]
    const { total_solicitudes, solicitudes_aceptadas, solicitudes_rechazadas } = getStatsForRequest()
    const { total_compras, utiles_comprados, gastos_compras } = getStatsForPurchases()
    const { utiles_disponibles, utiles_utilizados, dinero_disponible } = getGeneralStats()

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <a className="font-light text-routes text-xs" href="/reports">Reportes</a>
            <div className="pl-5 w-full flex flex-col items-start">
                <h1 className="font-semibold text-xl">Reportes</h1>
                <div className="w-full mt-4">
                    <Container title={title[0]}>
                        <MaterialStats />
                    </Container>
                    <Container title={title[1]}>
                        ola
                    </Container>
                </div>
            </div>
        </div>
    );
}
 
export default Reports;