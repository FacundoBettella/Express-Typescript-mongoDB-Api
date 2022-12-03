import { hash, compare } from 'bcryptjs';

export const encryptHandler = async (toEncrypt: string) => {
  const hashstring = await hash(toEncrypt, 10);
  return hashstring;
};

export const verifyHandler = async (withOutHash: string, withHash: string) => {
  const isCorrect = await compare(withOutHash, withHash);
  return isCorrect;
};
