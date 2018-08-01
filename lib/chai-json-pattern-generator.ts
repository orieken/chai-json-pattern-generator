export const generateJsonPatternFor = <T>(object: T): string  => {
  const filteredParsedString = Object.keys(object).map((key) => `"${key}": ${reflector(key, object[key])}`);
  return `{ ${filteredParsedString.join(',\n') }, ... }`;
};

const typeMappings = {
  boolean: () => 'Boolean',
  number: () => 'Number',
  object: (key: string, val: object) =>
    Array.isArray(val) ? `[ ${reflector(key, val[0])}, ... ] OR Array` : generateJsonPatternFor(val),
  string: () => 'String',
  undefined: (key: string) => { throw new Error(`${key} was undefined`); }
};

const reflector = (key: string, object: any) =>
  typeMappings[typeof object](key, object); // tslint:disable-line:no-unsafe-any
