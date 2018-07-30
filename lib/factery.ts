export type ArrayEnforcer<T> = {
  [key in keyof T]:
    T[key] extends Array<any> ? [T[key][number]] :
      ArrayEnforcer<T[key]> | T[key]
};

export class Factery {
  public static schemaOf<T>(object: T & ArrayEnforcer<T>): string {
    const filteredParsedString = Object.keys(object).map((key) => `"${key}": ${reflector(object[key])}`);
    return `{ ${filteredParsedString.join(',\n')} }`;
  }
}

const typeMappings = {
  boolean: () => 'Boolean',
  number: () => 'Number',
  object: (val: object) =>  Array.isArray(val) ? `[ ${reflector(val[0])} ]` : Factery.schemaOf(val),
  string: () => 'String'
};

const reflector = (object: any) => typeMappings[typeof object](object); // tslint:disable-line:no-unsafe-any
