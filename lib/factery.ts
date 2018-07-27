export class Factery {
  public static schemaOf<T>(object: T): string {
    const keys = Object.keys(object);
    const filteredParsedString: string[] = [];
    keys.filter((key) => {
      if (typeof object[key] === 'string') {
        filteredParsedString.push(`"${key}": String`);
      }
    });
    return `{ ${filteredParsedString} }`;
  }
}
