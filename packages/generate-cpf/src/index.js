import generateChecksum from '@brazilian-utils/helper-generate-checksum';
import generateRandomNumber from '@brazilian-utils/helper-generate-random-number';

import { CPF_LENGTH, STATES_CODE } from './constants';

function generateCheckDigit({ cpf, length }) {
  const mod = generateChecksum(cpf, length) % 11;

  return String(mod < 2 ? 0 : 11 - mod);
}

export default function generateCpf({ state } = {}) {
  const stateCode = Object.keys(STATES_CODE).includes(state) ? STATES_CODE[state] : generateRandomNumber();
  const cpf = generateRandomNumber(CPF_LENGTH - 3) + stateCode;
  const firstCheckDigit = generateCheckDigit({ cpf, length: 10 });
  const secondCheckDigit = generateCheckDigit({ cpf, length: 11 });

  return cpf + firstCheckDigit + secondCheckDigit;
}
