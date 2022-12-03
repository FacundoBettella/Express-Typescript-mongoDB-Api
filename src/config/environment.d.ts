import 'dotenv/config';

export interface ProcessEnv {
  [ENV: string]: string,
  [PORT: string]: string,
  [JWT_SECRET: string]: string | undefined,
}
