import detalle_solicitud from "@/data-test/detalle_solicitud";
import solicitudes from "@/data-test/solicitud";
import supplies from "@/data-test/supplies";

const getMaterials = () => {
    let materiales = supplies

    materiales = materiales.map((material) => ({
        ...material,
        stock: 0 
    }))

    solicitudes.map((solicitud) => {
        if(solicitud.estado === "aceptado"){
            detalle_solicitud.map((detalle) => {
                if(detalle.solicitud === solicitud.id) {
                    materiales.map((material) => {
                        if(material.id === detalle.util) {
                            material.stock = material.stock + detalle.cantidad
                        }
                    })
                }
            })
        }
    })

    return materiales
};

export default getMaterials;