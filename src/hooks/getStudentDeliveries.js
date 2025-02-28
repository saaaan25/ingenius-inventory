import detalleEntregaUtiles from "@/data-test/detalleEntregaUtiles";
import { lista_detalles } from "@/data-test/detalleLista";
import entregas from "@/data-test/entrega";
import { entrega_dinero } from "@/data-test/entregaDinero";
import entrega_utiles from "@/data-test/entregaUtiles";
import { lista_utiles } from "@/data-test/listaUtiles";
import { useMemo } from "react";

export const useStudentDeliveries = (studentId) => {
    const entrega = entregas.find(e => e.student_id === studentId);
    if (!entrega) {
        return { studentId, tipoEntrega: "Sin entrega", totalEntregado: 0, porcentajeEntregado: 0 };
    }

    const { delivery_id } = entrega;

    const entregaDineroMatch = entrega_dinero.find(d => d.delivery_id === delivery_id);
    const entregaUtilesMatch = entrega_utiles.find(u => u.delivery_id === delivery_id);

    let tipoEntrega = "Sin entrega";
    let totalEntregado = 0;
    let porcentajeEntregado = 0;

    const totalUtiles = lista_detalles.reduce((sum, item) => sum + item.quantity, 0) || 1;

    const montoTotal = lista_utiles.length > 0 ? lista_utiles[0].total : 1;

    if (entregaDineroMatch) {
        tipoEntrega = "Dinero";
        totalEntregado = entregaDineroMatch.amount;
        porcentajeEntregado = (totalEntregado / montoTotal) * 100;
    } else if (entregaUtilesMatch) {
        tipoEntrega = "Útiles";
        totalEntregado = detalleEntregaUtiles
            .filter(detail => detail.utils_delivery_id === entregaUtilesMatch.utils_delivery_id)
            .reduce((sum, item) => sum + item.quantity, 0);
        porcentajeEntregado = (totalEntregado / totalUtiles) * 100;
    }

    return { studentId, tipoEntrega, totalEntregado, porcentajeEntregado };
};

export const useHasDeliveredUtil = (utilId) => {
    const state = "entregado"
    return useMemo(() => {
        return detalleEntregaUtiles.some(detail => detail.util_id === utilId && detail.state.toLowerCase() === state.toLowerCase());
    }, [utilId, state]);
};