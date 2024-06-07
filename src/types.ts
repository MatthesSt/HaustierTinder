export type User = {
  id: string;
  username: string;
  email: string;
  role: "user" | "admin" | "tierheim";
  password: string;
  preferences: { german: string, english: string, active: boolean }[]
};

export type Shelter = {
  name: string;
  standort: string;
  id: string;
  telefonnummer: string;
  email: string;
  homepage: string;
  user_id: string;
  tiere: Animal[];
};

export type Animal = {
  name: string;
  id: string;
  alter: number;
  art: string;
  rasse: string;
  farbe: string;
  besonderheiten: string;
};