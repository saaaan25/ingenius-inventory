import request_details_nuevo from "@/data-test/detalle_solicitud_nuevo"
import util_nuevo from "@/data-test/util_nuevo"

const getSuppliesByRequest = (idSolicitud) => {
    console.log(idSolicitud)
    const suppliesList = request_details_nuevo.filter((item) => item.request_id == idSolicitud)
    console.log(suppliesList)

    const suppliesList2 = util_nuevo.filter((item1) => suppliesList.some((item2) => item1.util_id == item2.util_id ))
    console.log(suppliesList2)
    const suppliesByRequest = suppliesList2.map((item1) => {
        const match = suppliesList.find((item2) => item2.util_id === item1.util_id)
        return match ? { ... item1, cantidad: match.quantity } : item1
    })

    console.log(suppliesByRequest)

    return suppliesByRequest
}

export default getSuppliesByRequest