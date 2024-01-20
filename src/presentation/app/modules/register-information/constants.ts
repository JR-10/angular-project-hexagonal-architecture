export const CONSTANTS_TECHNICAL_DATASHEET = {
  DISPLAYED_COLUMNS: [
    {
      name: 'Id',
      idColumn: 'id',
      preder: true,
      sticky: true,
      currency: false,
      disabled: true,
    },
    {
      name: 'Producto asociado',
      idColumn: 'product',
      preder: true,
      sticky: true,
      currency: false,
      disabled: true,
    },
    {
      name: 'Encargado',
      idColumn: 'nameManager',
      preder: true,
      sticky: false,
      currency: false,
      disabled: false,
    },
    {
      name: 'Fecha de modificación',
      idColumn: 'modificationDate',
      preder: true,
      sticky: false,
      currency: false,
      disabled: false,
    },
    {
      name: 'Estado',
      idColumn: 'state',
      preder: true,
      sticky: false,
      currency: false,
      disabled: false,
    },

    {
      name: 'Acciones',
      idColumn: 'actions',
      preder: true,
      sticky: true,
      currency: false,
      disabled: true,
      stickyEnd: true,
    },
  ],
};
