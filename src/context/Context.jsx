import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));

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
