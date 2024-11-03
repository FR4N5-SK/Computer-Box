function FormAdd() {
  return (
    <>
      <div className="bg-periwinkle bg-opacity-15 rounded-2xl p-4 w-[450px] h-auto md:w-[700px] lg:w-[1100px] md:h-[850px] m-12">
        <form className="w-full h-full flex flex-col gap-12 px-10 items-center justify-center">
          <h2 className="text-2xl font-Trocchi">AGREGAR INCIDENCIAS</h2>
          <div className="gap-8 flex flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Usuario
                </label>
                <input
                  type="text"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Solicitante
                </label>
                <input
                  type="text"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Fecha Inicio
                </label>
                <input
                  type="date"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Fecha Fin
                </label>
                <input
                  type="date"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Tipo de Equipo
                </label>
                <select
                  type="date"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                >
                  <option value=""></option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Tipo de Incidencia
                </label>
                <select className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                Descripcion
              </label>
              <textarea className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"></textarea>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                Lugar
              </label>
              <input
                type="text"
                className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
              />
            </div>
          </div>

          <button className="text-sm md:text-lg font-Trocchi p-2 px-6 bg-periwinkle rounded-md hover:bg-negro hover:text-periwinkle transition-all duration-500">AGREGAR</button>
        </form>
      </div>
    </>
  );
}

export default FormAdd;
