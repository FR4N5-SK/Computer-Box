import { Link } from "react-router-dom";
import Logo from "../../public/VectorLogo.svg";
import { FaClipboardList, FaDoorOpen, FaHome } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

function Nav() {
  return (
    <>
      <header className="w-full h-[125px] lg:w-[125px] bg-periwinkle lg:h-[100vh] absolute left-0 flex lg:flex-col">
        <div className="flex items-center justify-center h-full lg:h-1/6 md:w-1/6 lg:w-full w-0 invisible md:visible">
          <img src={Logo} alt="Logo" className="h-[100px] w-[100px] lg:w-full" />
        </div>

        <nav className="h-full w-3/4 md:w-4/6 flex lg:flex-col lg:w-full lg:h-4/6 justify-center items-center">
          <ul className="grid grid-cols-3 md:flex lg:flex-col w-full h-full justify-center">
            <Link to={"/"}>
              <li className="h-full lg:h-auto w-full text-blanco px-4 lg:py-4 flex flex-col items-center justify-center hover:text-tropical-indigo hover:bg-blanco transition-all
               duration-500">
                <FaHome className="text-4xl" />
                <h3 className="text-lg font-semibold font-Open-Sans">Home</h3>
              </li>
            </Link>
            <Link to={"/read"}>
              <li className="h-full lg:h-auto w-full text-blanco px-4 lg:py-4 flex flex-col items-center justify-center hover:text-tropical-indigo hover:bg-blanco transition-all
               duration-500">
                <FaClipboardList className="text-4xl" />
                <h3 className="text-lg font-semibold font-Open-Sans">Listar</h3>
              </li>
            </Link>
            <Link to={"/add"}>
              <li className="h-full lg:h-auto w-full text-blanco px-4 lg:py-4 flex flex-col items-center justify-center hover:text-tropical-indigo hover:bg-blanco transition-all
               duration-500">
                <FaCirclePlus  className="text-4xl" />
                <h3 className="text-lg font-semibold font-Open-Sans">Agregar</h3>
              </li>
            </Link>
          </ul>
        </nav>

        <div className="h-full w-1/4 md:w-1/6 lg:h-1/6 lg:w-full flex items-center lg:items-end">
          <button className="h-auto w-full text-blanco px-4 lg:px-0 lg:py-4 flex flex-col items-center justify-center">
            <FaDoorOpen className="text-4xl" />
            <h3 className="text-lg font-semibold font-Open-Sans">Logout</h3>
          </button>
        </div>
      </header>
    </>
  );
}

export default Nav;
