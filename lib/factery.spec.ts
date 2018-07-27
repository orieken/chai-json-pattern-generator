import { Factery } from './factery';
import { expect } from 'chai';

describe('Factery', () => {

  interface Foo {
    someBoolean: boolean;
    someObject: { test: { c: boolean } };
    string: string;
  }

  const foo: Foo = {
    someBoolean: false,
    someObject: {test: {c: true}},
    string: '',
  };

  // const schema = `
  //       {
  //         "string": String,
  //         "someBoolean: Boolean,
  //         "someObject": {
  //           "test": {
  //             "c": Boolean
  //           }
  //         }
  //       }
  //     `;

  describe('schemaOf', () => {
    it('String key', () => {
      class Ugh { someString: string; }
      const factery = Factery.schemaOf<Ugh>({someString: 'a'});

      expect(factery).to.equal(`{ "someString": String }`);
    });

    xit('String key', () => {
      const factery = Factery.schemaOf<Foo>(foo);

      (<any> expect(factery).to).matchPattern(`{ "someString": String }`);
    });
  });
});
