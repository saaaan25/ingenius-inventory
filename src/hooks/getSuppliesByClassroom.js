import { lista_detalles } from "@/data-test/detalleLista";
import util_nuevo from "@/data-test/util_nuevo";

const getSuppliesByClassroom = (listaId) => {
    return lista_detalles
        .filter(detalle => detalle.utils_list === listaId)
        .map(detalle => {
            const util = util_nuevo.find(util => util.util_id === detalle.util) || {};
            return {
                util_id: detalle.util,
                name: util.name || "Desconocido",
                quantity: detalle.quantity
            };
        });
};

export default getSuppliesByClassroom;