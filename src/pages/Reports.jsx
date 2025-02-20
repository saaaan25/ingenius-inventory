import PageRoute from "@/components/PageRoute";
import GeneralSection from "@/components/report/GeneralSection";
import MaterialSection from "@/components/report/MaterialSection";
import PurchasesSection from "@/components/report/PurchasesSection";
import RequestsSection from "@/components/report/RequestsSection";

const Reports = () => {
    const page = {
        name: "Reportes",
        route: "/reports"
    }

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <PageRoute page1={page} />
            <div className="pl-5 w-full flex flex-col items-start">
                <h1 className="font-semibold text-xl">Reportes</h1>
                <div className="w-full mt-7 flex flex-col gap-y-10">
                    <GeneralSection />
                    <RequestsSection />
                    <PurchasesSection />
                    <MaterialSection />
                </div>
            </div>
        </div>
    );
}
 
export default Reports;