import Nav from "../Nav";
import { FaSearch } from "react-icons/fa";
import Table from "../Table";

function Read() {
  return (
    <>
      <main className="bg-blanco w-full h-[100vh] relative">
        <Nav />

        <section className="w-full min-h-[100vh] pt-[175px] pb-[50px] md:pb-0 lg:pt-0 lg:pl-[125px] flex lg:justify-center lg:items-center">
          <div className="w-full lg:h-[100vh] p-4 md:p-12 flex flex-col gap-6 lg:gap-12">
            <h2 className="text-2xl font-Trocchi text-negro">
              LISTADO DE INCIDENCIAS
            </h2>
            <div className="w-full md:w-4/6 lg:w-2/6 relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full placeholder:text-blanco text-sm md:text-lg font-semibold pr-12 bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
              />
              <FaSearch className="absolute right-4 top-2 text-[20px] md:text-[25px] text-blanco" />
            </div>

            <div className="w-full">
              <Table />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Read;
