import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { alertError, alertSuccess } from "../validations/alerts";

export const Context = createContext();

export function ContextProvider(props) {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [users, setUsers] = useState(localStorage.getItem("users") === null ? [] : JSON.parse(localStorage.getItem("users")));
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [inssue, setInssue] = useState("");
  const [search, setSearch] = useState("")
  const [inssues, setInssues] = useState(localStorage.getItem("inssues") === null ? [] : JSON.parse(localStorage.getItem("inssues")));

  function addInssue(inssue) {
    inssue.id = uuidv4();
    const newInssue = [inssue]
    let newDate = []
    console.log(inssues.length)
    if (inssues.length === 0) {
      setInssues(newInssue);
    } else {
      setInssues([...inssues, inssue]);
    }
    inssues.forEach(item => {
      newDate.push(item)
    });
    newDate.push(inssue)
    localStorage.setItem("inssues", JSON.stringify(newDate))
    alertSuccess(`Se ha agregado la incidencia con exito`)
  }

  function deleteInssue(inssue) {
    let data = []
    inssues.forEach(item => {
      if (item.id != inssue.id) {
        data.push(item)
      }
    });
    setInssues(data);
    localStorage.setItem("inssues", JSON.stringify(data));
    alertSuccess(`Se ha eliminado con exito la incidencia`)
  }

  function registerUser(user) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].user === user.user) {
        return alertError(`Ya existe ese usuario`)
      }
    }
    let newDate = []
    setUsers([...users, user]);
    users.forEach(item => {
      newDate.push(item)
    });
    newDate.push(user)
    localStorage.setItem("users", JSON.stringify(newDate))
    localStorage.setItem("token", true)
    setToken(true)
    setUser(user.user)
    localStorage.setItem("user", user.user)
    return alertSuccess(`Te has registrado e Iniciaste Sesion`)
  }

  function logout() {
    localStorage.setItem("token", false);
    setToken(false);
    alertSuccess(`Has cerrado sesion`)
  }

  function login(data) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].user === data.user && users[i].password === data.password) {
        localStorage.setItem("token", true);
        setToken(true);
        setUser(data.user)
        localStorage.setItem("user", data.user)
        return alertSuccess(`Has iniciado sesion`)
      }      
    }
    return alertError(`Credenciales Invalidas`)
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
        setUser(data.user)
        localStorage.setItem("user", data.user)
        return alertSuccess(`Has recuperado tu contraseña e iniciado sesion`)
      }   
    }
    return alertError(`No existe el usuario que deseas recuperar la contraseña`)
  }

  function editInssue(inssue) {
    let data = []
    inssues.forEach(item => {
      if (item.id === inssue.id) {
        data.push(inssue)
      } else {
        data.push(item)
      }
    });
    setInssues(data);
    localStorage.setItem("inssues", JSON.stringify(data));
    alertSuccess(`Se ha editado con exita la incidencia`)
  }

  return (
    <Context.Provider
      value={{
        token,
        users,
        setToken,
        logout,
        login,
        recovery,
        user,
        addInssue,
        registerUser,
        inssues,
        deleteInssue,
        inssue,
        setInssue,
        search,
        setSearch,
        editInssue
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
