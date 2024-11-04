import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [users, setUsers] = useState(localStorage.getItem("users") === null ? [] : JSON.parse(localStorage.getItem("users")));

  function registerUser(user) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].user === user.user) {
        alert(`Ya existe ese usuario`)
        return
      }
    }
    let newDate = []
    setUsers(...users, user);
    users.forEach(item => {
      newDate.push(item)
    });
    newDate.push(user)
    localStorage.setItem("users", JSON.stringify(newDate))
    localStorage.setItem("token", true)
    setToken(true)
  }

  function logout() {
    localStorage.setItem("token", false);
    setToken(false);
  }

  function login(data) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].user === data.user && users[i].password === data.password) {
        alert('Has iniciado sesion')
        localStorage.setItem("token", true);
        setToken(true);
        return
      }      
    }
    return alert(`Credenciales invalidas`)
  }

  function recovery(data) {
    let newDate = []
    users.forEach(item => {
      newDate.push(item)
    });
    for (let i = 0; i < newDate.length; i++) {
      if (newDate[i].user === data.user) {
        newDate[i].password = data.password
        setUsers(newDate)
        localStorage.setItem("users", JSON.stringify(newDate))
        localStorage.setItem("token", true)
        setToken(true)
      }   
    }
  }

  return (
    <Context.Provider
      value={{
        token,
        users,
        setToken,
        logout,
        login,
        recovery
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
