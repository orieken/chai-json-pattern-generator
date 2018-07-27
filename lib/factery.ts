export class Factery {
  public static schemaOf<T>(object: T): string {
    if (Array.isArray(object)) {
      const firstArrayItem = object[0];
      return `[ ${reflector(firstArrayItem)(firstArrayItem)} ]`;
    }
    const filteredParsedString = Object.keys(object).reduce(
      (acc, key) => {
        const currentValue = object[key];
        const type = reflector(currentValue);
        acc.push(`"${key}": ${type(currentValue)}`);
        return acc;
      },
      new Array<string>());

    return `{ ${filteredParsedString.join(',\n')} }`;
  }
}

const typeMappings = {
  boolean: () => 'Boolean',
  number: () => 'Number',
  object: (val: object) => Factery.schemaOf(val),
  string: () => 'String'
};

const reflector = (something: any) => typeMappings[typeof something];
