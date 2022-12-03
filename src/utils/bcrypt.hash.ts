import { hash } from 'bcryptjs';

export const encrypHandler = async (toEncrypt: string) => {
  const hashstring = await hash(toEncrypt, 10);
  return hashstring;
};


// export const verifyHandler = async (encrypted: string) => {
//   const isCorrect = await compare()
// };
