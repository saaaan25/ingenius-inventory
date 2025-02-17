import supplies from "@/data-test/supplies"
import detalle_solicitud from "@/data-test/detalle_solicitud"

const getSuppliesByRequest = (idSolicitud) => {
    const suppliesList = detalle_solicitud.filter((item) => item.solicitud === Number(idSolicitud))

    const suppliesList2 = supplies.filter((item1) => suppliesList.some((item2) => item1.id == item2.util ))

    const suppliesByRequest = suppliesList2.map((item1) => {
        const match = suppliesList.find((item2) => item2.util === item1.id)
        return match ? { ... item1, cantidad: match.cantidad } : item1
    })

    return suppliesByRequest
}

export default getSuppliesByRequest