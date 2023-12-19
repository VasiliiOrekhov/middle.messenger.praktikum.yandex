import { expect } from 'chai';
import { setter } from './setter';

describe('setter function', () => {
  it('return object argument if passed object is not an real object', () => {
    const notAnObject = null;

    expect(setter(notAnObject, '', '1')).to.equal(notAnObject);
  });

  it('set value by path', () => {
    const obj = { a: 123, b: { a: 345 } };
    const path = 'b.a';
    const value = 123;

    const result = setter(obj, path, value);

    expect(result).to.have.nested.property(path).that.equals(value);
  });

  it('mutate original object', () => {
    const obj = { a: 123, b: { a: 345 } };
    const path = 'b.a';
    const value = 123;

    const result = setter(obj, path, value);

    expect(result).to.equal(obj);
  });
});
