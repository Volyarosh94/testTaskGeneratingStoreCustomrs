import { createHash } from 'crypto';

import { CHARTS, CODE_LENGTH } from '../constants/constants';

const generateDeterministicString = (input: string): string => {
  const hash = createHash(process.env.ALGORITHM || 'sha256')
    .update(input)
    .digest('hex');

  const base62 = (hex: string): string => {
    let base62Str = '';
    for (let i = 0; i < hex.length; i += 2) {
      const byte = parseInt(hex.substr(i, 2), 16);
      base62Str += CHARTS[byte % 62];
    }
    return base62Str;
  };

  const base62Hash = base62(hash);
  return base62Hash.slice(0, CODE_LENGTH);
};

export default generateDeterministicString;
