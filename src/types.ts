export type User = {
  id: string;
  username: string;
  email: string;
  role: "user" | "admin" | "tierheim";
  password: string;
  preferences: { german: string, english: string, actice: boolean }[]
};

export type Shelter = {
  name: string;
  standort: string;
  id: string;
  telefonnummer: string;
  email: string;
  homepage: string;
  tiere: {
    name: string;
    id: string;
    alter: number;
    art: string;
    rasse: string;
    farbe: string;
    besonderheiten: string;
  }[];
};
