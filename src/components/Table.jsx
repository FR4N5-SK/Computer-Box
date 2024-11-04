import { FaClipboardList, FaRegEdit, FaTrash } from "react-icons/fa";

function Table() {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-blanco ">
          <thead class="text-sm font-Open-Sans uppercase bg-tropical-indigo text-blanco">
            <tr>
              <th scope="col" class="px-6 py-3 text-center">
                Usuario
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Solicitante
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Fecha Inicio
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Fecha Fin
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Tipo Equipo
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Tipo Incidencia
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Gravedad
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#A2A3BB] text-negro bg-opacity-15 border-b hover:bg-opacity-50">
              <th
                scope="row"
                class="px-6 py-4 text-center font-medium text-negro whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4 text-center">Silver</td>
              <td class="px-6 py-4 text-center">Laptop</td>
              <td class="px-6 py-4 text-center">$2999</td>
              <td class="px-6 py-4 text-center">Silver</td>
              <td class="px-6 py-4 text-center">Laptop</td>
              <td class="px-6 py-4 text-center">$2999</td>
              <td class="px-6 py-4 text-center flex gap-2 text-2xl justify-center items-center">
                <button><FaRegEdit className="hover:text-blue-500 transition-all duration-300" /></button>
                <button><FaTrash className="hover:text-red-600 transition-all duration-300" /></button>
                <button><FaClipboardList className="hover:text-tropical-indigo transition-all duration-300" /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
