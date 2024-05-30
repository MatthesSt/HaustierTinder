export type User = {
  id: string;
  username: string;
  email: string;
  role: "user" | "admin" | "tierheim";
  password: string;
};
