var exampleData = {
  search: null,
  currentId: 1,
  currentLabel: 'My first app',
  selected: 0,
  error: null,
  message: 'welcome',
  path: [{
    id: 1,
    label: 'my'
  }, {
    id: 2,
    label: 'first'
  }, {
    id: 3,
    label: 'package'
  }],
  packages: [{
    id: 'sys',
    label: 'System',
    href: '?'
  }, {
    id: 5,
    label: 'noot',
    href: '?'
  }, {
    id: 6,
    label: 'mies',
    href: '?'
  }],
  entities: [{
    id: 7,
    label: 'patients',
    href: '/menu/main/dataexplorer?entity=patients',
    isSelected: true
  }, {
    id: 8,
    label: 'samples',
    href: '/menu/main/dataexplorer?entity=samples'
  }, {
    id: 9,
    label: 'mutations',
    href: '/menu/main/dataexplorer?entity=mutations'
  }]
}

export default exampleData
