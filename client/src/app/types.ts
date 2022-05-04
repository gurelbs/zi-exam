export interface LoginModel {
  email: string;
  password: string;
}

export interface LoginStatus {
  logged: boolean;
  token: string | null;
}

export interface Magician {
  name: string;
  house: string;
  power: string;
}

export type MagicianFilter = { by: string | undefined, direction: string | undefined };
