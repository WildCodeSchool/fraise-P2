import { createContext, useContext } from "react";

export const Auth = createContext();

export function useAuth() {
  return useContext(Auth);
}
