import assert from 'assert';
import jeselvmo from '../index';
import { locales as isPostalCodeLocales } from '../src/lib/isPostalCode';
import { locales as isAlphaLocales } from '../src/lib/isAlpha';
import { locales as isAlphanumericLocales } from '../src/lib/isAlphanumeric';
import { locales as isMobilePhoneLocales } from '../src/lib/isMobilePhone';
import { locales as isFloatLocales } from '../src/lib/isFloat';

describe('Exports', () => {
  it('should export validators', () => {
    assert.equal(typeof jeselvmo.isEmail, 'function');
    assert.equal(typeof jeselvmo.isAlpha, 'function');
  });

  it('should export sanitizers', () => {
    assert.equal(typeof jeselvmo.toBoolean, 'function');
    assert.equal(typeof jeselvmo.toFloat, 'function');
  });

  it('should export the version number', () => {
    /* eslint-disable global-require */
    assert.equal(
      jeselvmo.version,
      require('../package.json').version,
      'Version number mismatch in "package.json" vs. "validator.js"'
    );
    /* eslint-enable global-require */
  });

  it("should export isPostalCode's supported locales", () => {
    assert.ok(isPostalCodeLocales instanceof Array);
    assert.ok(jeselvmo.isPostalCodeLocales instanceof Array);
  });

  it("should export isAlpha's supported locales", () => {
    assert.ok(isAlphaLocales instanceof Array);
    assert.ok(jeselvmo.isAlphaLocales instanceof Array);
  });

  it("should export isAlphanumeric's supported locales", () => {
    assert.ok(isAlphanumericLocales instanceof Array);
    assert.ok(jeselvmo.isAlphanumericLocales instanceof Array);
  });

  it("should export isMobilePhone's supported locales", () => {
    assert.ok(isMobilePhoneLocales instanceof Array);
    assert.ok(jeselvmo.isMobilePhoneLocales instanceof Array);
  });

  it("should export isFloat's supported locales", () => {
    assert.ok(isFloatLocales instanceof Array);
    assert.ok(jeselvmo.isFloatLocales instanceof Array);
  });
});
