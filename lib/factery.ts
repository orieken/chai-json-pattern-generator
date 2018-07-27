export class Factery {
  public static schemaOf<T>(object: T): string {
    const keys = Object.keys(object);
    const returnStrings: string[] = [];

    keys.filter((key) => {
      if (typeof object[key] === 'string') {
        returnStrings.push(`"${key}": String`);
      }
    });
    return `{ ${returnStrings} }`;
  }
}
