import supplies from "@/data-test/supplies"
import supplies_required from "@/data-test/supplies_required"

const getSuppliesByRequest = (idSolicitud) => {
    const suppliesList = supplies_required.filter((item) => item.idRequest === Number(idSolicitud))

    const suppliesList2 = supplies.filter((item1) => suppliesList.some((item2) => item1.code == item2.codeSupply ))

    const suppliesByRequest = suppliesList2.map((item1) => {
        const match = suppliesList.find((item2) => item2.codeSupply === item1.code)
        return match ? { ... item1, quantity: match.cantidad } : item1
    })

    return suppliesByRequest
}

export default getSuppliesByRequest