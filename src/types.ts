export type User = {
  id: string;
  username: string;
  email: string;
  rolle: "user" | "admin" | "tierheim";
  password: string;
};
