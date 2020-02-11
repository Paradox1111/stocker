function formatPartType(partType) {
  switch (partType) {
    case 'mobo':
      return 'Motherboard';
    case 'cpu':
      return 'Central Processing Unit';
    case 'gpu':
      return 'Graphics Processing Unit';
    case 'psu':
      return 'Power Supply Unit';
    case 'storage':
      return 'Hard Drive';
    case 'ram':
      return 'Random Access Memory';
    case 'transistors':
      return 'Transistors';
    case 'circuitry':
      return 'Circuitry';
    case 'ports':
      return 'Ports';
    case 'pcbs':
      return 'Printed Circuit Boards';
    case 'flashMem':
      return 'Flash Memory';
    case 'fans':
      return 'Fans';
    case 'heatSinks':
      return 'Heat Sinks';
    case 'hdds':
      return 'Hard Drive Disks';
    case 'case':
      return 'Cases';
    case 'cases':
      return 'Cases';
    case 'pc':
      return 'Personal Computers';
    default:
      return 'DEFAULT';
  }
}

export default formatPartType;
