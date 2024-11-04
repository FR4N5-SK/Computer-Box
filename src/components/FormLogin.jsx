import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { HiLockClosed, HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { validateInput } from "../validations/validations";

function FormLogin() {
  const { login } = useContext(Context);

  const [state, setState] = useState({
    user: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateInput(state.user, "Usuario") === "Invalido" ||
      validateInput(state.password, "Contraseña") === "Invalido"
    ) {
      return;
    }

    login(state)
    setState({
      user: "",
      password: "",
    })
  };

  return (
    <>
      <div className="w-[390px] md:w-[700px] h-[600px] bg-[rgba(162,163,187)] bg-opacity-30 rounded-xl border-2 border-tropical-indigo ">
        <form
          className="p-2 md:p-4 flex items-center flex-col justify-center h-full gap-12"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center font-Trocchi text-2xl md:text-4xl">
            INICIAR SESION
          </h2>
          <div className="flex flex-col w-full gap-6">
            <div className="flex w-full px-2 md:px-8 relative">
              <input
                type="text"
                className="w-full bg-transparent border-b-2 border-tropical-indigo px-1 pr-7 md:px-3 md:pr-12 py-1 text-sm md:text-xl text-negro focus:outline-none"
                placeholder="Usuario"
                id="user"
                name="user"
                value={state.user}
                onChange={handleChange}
              />
              <span className="absolute right-2 md:right-11 text-2xl md:text-4xl text-tropical-indigo">
                <HiUserCircle />
              </span>
            </div>

            <div className="flex w-full px-2 md:px-8 relative">
              <input
                type="password"
                className="w-full bg-transparent border-b-2 border-tropical-indigo px-1 pr-7 md:px-3 md:pr-12 py-1 text-sm md:text-xl text-negro focus:outline-none"
                placeholder="Contraseña"
                id="password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
              <span className="absolute right-2 md:right-11 text-2xl md:text-4xl text-tropical-indigo">
                <HiLockClosed />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-center w-full px-8">
            <h4 className="text-sm text-center md:text-xl font-semibold font-Open-Sans">
              ¿No tienes cuenta?{" "}
              <a className="text-tropical-indigo">
                <Link to={"/register"}>Registrate</Link>
              </a>
              .
            </h4>
            <h4 className="text-sm text-center md:text-xl font-semibold font-Open-Sans">
              ¿Olvidaste tu contraseña?{" "}
              <a className="text-tropical-indigo">
                <Link to={"/recovery"}>Recuperala</Link>
              </a>
              .
            </h4>
          </div>

          <button className="bg-tropical-indigo font-Trocchi text-sm md:text-lg p-3 rounded-lg text-blanco transition-colors duration-500 hover:text-blanco hover:bg-cool-gray">
            INICIAR SESION
          </button>
        </form>
      </div>
    </>
  );
}

export default FormLogin;
