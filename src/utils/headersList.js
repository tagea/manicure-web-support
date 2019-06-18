const headerUser = [
  {
    width: 120,
    label: '#',
    dataKey: 'id',
    flexGrow: 0.25
  },
  {
    width: 120,
    label: 'Phone',
    dataKey: 'phone',
    flexGrow: 1
  }
];

const headerSalon = [
  {
    width: 120,
    label: 'Name',
    dataKey: 'name',
    flexGrow: 1
  },
  {
    width: 120,
    label: 'Created',
    dataKey: 'date_joined',
    flexGrow: 0.75
  },
  {
    width: 120,
    label: 'Edited',
    dataKey: 'date_updated',
    flexGrow: 0.75
  }
];

export { headerUser, headerSalon };
