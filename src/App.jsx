import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPath from "./components/Errors/ErrorPath";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Recovery from "./components/auth/Recovery";

const token = true
const router = createBrowserRouter([
  {
    path: "/",
    element: token ? (<Login/>) : (<h1>No has iniciado sesion</h1>)
  },
  {
    path: "/login",
    element: token ? (<Login/>) : (<h1>No has iniciado sesion</h1>)
  },
  {
    path: "/register",
    element: token ? (<Register/>) : (<h1>No has iniciado sesion</h1>)
  },
  {
    path: "/recovery",
    element: token ? (<Recovery/>) : (<h1>No has iniciado sesion</h1>)
  },
  {
    path: "*",
    element: <ErrorPath />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
