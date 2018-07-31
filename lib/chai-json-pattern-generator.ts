export const generateJsonPatternFor = <T>(object: T): string  => {
  const filteredParsedString = Object.keys(object).map((key) => `"${key}": ${reflector(object[key])}`);
  return `{ ${filteredParsedString.join(',\n') }, ... }`;
};

const typeMappings = {
  boolean: () => 'Boolean',
  number: () => 'Number',
  object: (val: object) =>  Array.isArray(val) ? `[ ${reflector(val[0])}, ... ] OR Array` : generateJsonPatternFor(val),
  string: () => 'String'
};

const reflector = (object: any) => typeMappings[typeof object](object); // tslint:disable-line:no-unsafe-any
