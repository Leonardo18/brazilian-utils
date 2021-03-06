import isValidCpf from '..';
import { BLACKLIST, CPF_LENGTH } from '../constants';

describe('isValidCpf', () => {
  describe('should return false', () => {
    test('when it is on the BLACKLIST', () => {
      BLACKLIST.forEach(cpf => expect(isValidCpf(cpf)).toBe(false));
    });

    test('when is a empty string', () => {
      expect(isValidCpf('')).toBe(false);
    });

    test('when is null', () => {
      expect(isValidCpf(null)).toBe(false);
    });

    test('when is undefined', () => {
      expect(isValidCpf(undefined)).toBe(false);
    });

    test('when is a boolean', () => {
      expect(isValidCpf(true)).toBe(false);
      expect(isValidCpf(false)).toBe(false);
    });

    test('when is a object', () => {
      expect(isValidCpf({})).toBe(false);
    });

    test('when is a array', () => {
      expect(isValidCpf([])).toBe(false);
    });

    test(`when dont match with CPF length (${CPF_LENGTH})`, () => {
      expect(isValidCpf('123456')).toBe(false);
    });

    test('when contains only letters or special characters', () => {
      expect(isValidCpf('abcabcabcde')).toBe(false);
    });

    test('when is a CPF invalid', () => {
      expect(isValidCpf('11257245286')).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when is a CPF valid without mask', () => {
      expect(isValidCpf('40364478829')).toBe(true);
    });

    test('when is a CPF valid with mask', () => {
      expect(isValidCpf('962.718.458-60')).toBe(true);
    });
  });
});
