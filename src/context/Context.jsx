import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

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
  }

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
    setUser(user.user)
    localStorage.setItem("user", user.user)
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
        setUser(data.user)
        localStorage.setItem("user", data.user)
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
        setUser(data.user)
        localStorage.setItem("user", data.user)
      }   
    }
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
