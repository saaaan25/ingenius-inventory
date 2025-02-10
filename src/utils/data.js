export const purchasesData = [
  {
    id: 1,
    total_gastado: 100,
    fecha: '2021-12-01',
    detalle_compra: [
      {
        id: 1,
        cantidad: 10,
        precio_unitario: 5,
        util: {
          id: 1,
          nombre: 'Goma',
        },
      },
      {
        id: 2,
        cantidad: 2,
        precio_unitario: 20,
        util: {
          id: 1,
          nombre: 'Papelote cuadriculado',
        },
      },
    ],
  },
  {
    id: 2,
    total_gastado: 200,
    fecha: '2021-12-02',
    detalle_compra: [
      {
        id: 3,
        cantidad: 5,
        precio_unitario: 10,
        util: {
          id: 2,
          nombre: 'Silicona',
        },
      },
    ],
  },
  {
    id: 3,
    total_gastado: 150,
    fecha: '2021-12-03',
    detalle_compra: [
      {
        id: 4,
        cantidad: 3,
        precio_unitario: 50,
        util: {
          id: 3,
          nombre: 'Block de cartulina blanca',
        },
      },
    ],
  },
  {
    id: 4,
    total_gastado: 75,
    fecha: '2021-12-05',
    detalle_compra: [
      {
        id: 5,
        cantidad: 15,
        precio_unitario: 5,
        util: {
          id: 4,
          nombre: 'Block de hojas de colores',
        },
      },
    ],
  },
  {
    id: 5,
    total_gastado: 300,
    fecha: '2021-12-05',
    detalle_compra: [
      {
        id: 6,
        cantidad: 2,
        precio_unitario: 150,
        util: {
          id: 5,
          nombre: 'Plastilina',
        },
      },
      {
        id: 7,
        cantidad: 2,
        precio_unitario: 50,
        util: {
          id: 3,
          nombre: 'Block de cartulina blanca',
        },
      },
    ],
  },
];

export default purchasesData;