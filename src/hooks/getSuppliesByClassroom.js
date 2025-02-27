import { lista_detalles } from "@/data-test/detalleLista"

const getSuppliesByClassroom = (lista_id) => {
    const suppliesClassroom = lista_detalles.filter(detalle => detalle.lista_utiles === lista_id)

    return suppliesClassroom
};

export default getSuppliesByClassroom;