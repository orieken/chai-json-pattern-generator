// @ts-ignore
import chaiJsonPattern from 'chai-json-pattern';

before(async function() {
  const chai = require('chai'); // tslint:disable-line

  chai.use(chaiJsonPattern);
});
