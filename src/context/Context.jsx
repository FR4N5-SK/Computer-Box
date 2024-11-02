import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [token, setToken] = useState("hola");

  return (
    <Context.Provider
      value={{
        token,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
