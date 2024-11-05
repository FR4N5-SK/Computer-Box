import { useContext, useEffect, useState } from "react";
import { FaClipboardList, FaRegEdit, FaTrash } from "react-icons/fa";
import { Context } from "../context/Context";
import { Button, Modal, Select } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import FormEdit from "./FormEdit";
import { Pag } from "./Pag";

function Table() {
  const { inssues, deleteInssue, setInssue, search } = useContext(Context);

  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10);

  useEffect(() => {
    setData(inssues)
  }, [inssues]);

  useEffect(() => {
    let newData = []
    if (search.trim() != '') {
      inssues.forEach(item => {
        if (item.applicant === search) {
          newData.push(item)
        }
      });
      setData(newData)
    } else {
      setData(inssues)
    }
  }, [search]);

  const maximo = Math.ceil(inssues.length / porPagina);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blanco ">
          <thead className="text-sm font-Open-Sans uppercase bg-tropical-indigo text-blanco">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Usuario
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Solicitante
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Fecha Inicio
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Fecha Fin
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Tipo Equipo
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Tipo Incidencia
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Gravedad
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
              .map((item, index) => (
                <>
                  <tr class="bg-[#A2A3BB] text-negro bg-opacity-15 border-b hover:bg-opacity-50">
                    <th
                      scope="row"
                      class="px-6 py-4 text-center font-bold text-negro whitespace-nowrap"
                    >
                      {item.user}
                    </th>
                    <td className="px-6 py-4 text-center">{item.applicant}</td>
                    <td className="px-6 py-4 text-center">{item.dateStart}</td>
                    <td className="px-6 py-4 text-center">{item.dateEnd}</td>
                    <td className="px-6 py-4 text-center">{item.typeDevice}</td>
                    <td className="px-6 py-4 text-center">{item.typeInssue}</td>
                    <td className="px-6 py-4 text-center">{item.impact}</td>
                    <td className="px-6 py-4 text-center flex gap-2 text-2xl justify-center items-center">
                      <button>
                        <FaRegEdit
                          onClick={() => {
                            setOpenModal(true);
                            setEdit(true);
                            setInssue(item);
                          }}
                          className="hover:text-blue-500 transition-all duration-300"
                        />
                      </button>
                      <button onClick={(e) => deleteInssue(item)}>
                        <FaTrash className="hover:text-red-600 transition-all duration-300" />
                      </button>
                      <button onClick={() => setOpenModal(true)}>
                        <FaClipboardList className="hover:text-tropical-indigo transition-all duration-300" />
                      </button>
                    </td>
                  </tr>
                  <div
                    id="default-modal"
                    aria-hidden="true"
                    className={`${
                      openModal ? "" : "hidden"
                    } overflow-y-auto overflow-x-hidden fixed z-50 flex bg-negro bg-opacity-30  justify-center items-center w-full inset-0 h-[calc(100%)] max-h-full`}
                  >
                    <div
                      className={`relative p-4  ${
                        edit ? "w-auto" : "w-full max-w-2xl"
                      }  max-h-full`}
                    >
                      <div className="relative bg-tropical-indigo rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                          <h3 className="text-xl font-semibold text-blanco">
                            TARJETA DE INCIDENCIA
                          </h3>
                          <button
                            type="button"
                            className="text-blanco bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="default-modal"
                            onClick={(e) => {
                              setOpenModal(false);
                              setEdit(false);
                            }}
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>

                        <div className="p-4 md:p-5 space-y-4">
                          {edit ? (
                            <FormEdit />
                          ) : (
                            <>
                              <p className="text-sm md:text-lg leading-relaxed text-blanco">
                                <b className="font-bold">Descripcion:</b>{" "}
                                {item.description}
                              </p>
                              <p class="text-sm md:text-lg leading-relaxed text-blanco">
                                <b className="font-bold">Lugar:</b>{" "}
                                {item.location}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </tbody>
        </table>
      </div>
      <Pag pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </>
  );
}

export default Table;
