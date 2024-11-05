import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { validateInput } from "../validations/validations";

function FormEdit() {
  const { user, editInssue, inssue } = useContext(Context);

  const [state, setState] = useState({
    id: inssue.id,
    user: inssue.user,
    applicant: inssue.applicant,
    dateStart: inssue.dateStart,
    dateEnd: inssue.dateEnd,
    typeDevice: inssue.typeDevice,
    typeInssue: inssue.typeInssue,
    description: inssue.description,
    location: inssue.location,
    impact: inssue.impact
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
      validateInput(state.applicant, "Solicitante") === "Invalido" ||
      validateInput(state.dateStart, "Fecha de Inicio") === "Invalido" ||
      validateInput(state.dateEnd, "Fecha Fin") === "Invalido" ||
      validateInput(state.typeDevice, "Tipo de Equipo") === "Invalido" ||
      validateInput(state.typeInssue, "Tipo de Incidencia") === "Invalido" ||
      validateInput(state.description, "Descripcion") === "Invalido" ||
      validateInput(state.location, "Lugar") === "Invalido"
    ) {
      return;
    }

    editInssue(state);
  };

  return (
    <>
      <div className="bg-blanco rounded-2xl p-4 w-[450px] h-auto md:w-[700px] lg:w-[1100px] md:h-[850px] m-12">
        <form
          className="w-full h-full flex flex-col gap-12 px-10 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-Trocchi text-negro">EDITAR INCIDENCIAS</h2>
          <div className="gap-8 flex flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Usuario
                </label>
                <input
                  type="text"
                  name="user"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                  value={state.user}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Solicitante
                </label>
                <input
                  type="text"
                  name="applicant"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                  value={state.applicant}
                  onChange={handleChange}
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
                  name="dateStart"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                  value={state.dateStart}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Fecha Fin
                </label>
                <input
                  type="date"
                  name="dateEnd"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                  value={state.dateEnd}
                  onChange={handleChange}
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
                  name="typeDevice"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                  value={state.typeDevice}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="SWITCH">SWITCH</option>
                  <option value="ROUTER">ROUTER</option>
                  <option value="SERVIDOR">SERVIDOR</option>
                  <option value="ANTENA">ANTENA</option>
                  <option value="IMPRESORA">IMPRESORA</option>
                  <option value="COMPUTADOR">COMPUTADOR</option>
                  <option value="LAPTO">LAPTO</option>
                  <option value="MONITOR">MONITOR</option>
                  <option value="TELEFONO">TELEFONO</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                  Tipo de Incidencia
                </label>
                <select
                  name="typeInssue"
                  className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                  value={state.typeInssue}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="Fallas de Conectividad">
                    Fallas de Conectividad
                  </option>
                  <option value="Interferencias de Señal">
                    Interferencias de Señal
                  </option>
                  <option value="Problemas de Configuración">
                    Problemas de Configuración
                  </option>
                  <option value="Fallas en el Hardware">
                    Fallas en el Hardware
                  </option>
                  <option value="Cortes de Línea">Cortes de Línea</option>
                  <option value="Problemas de Seguridad">
                    Problemas de Seguridad
                  </option>
                  <option value="Actualizaciones de Firmware">
                    Actualizaciones de Firmware
                  </option>
                  <option value="Fallas en el Sistema de Videoconferencia">
                    Fallas en el Sistema de Videoconferencia
                  </option>
                  <option value="Errores de Software">
                    Errores de Software
                  </option>
                  <option value="Infecciones por Malware">
                    Infecciones por Malware
                  </option>
                  <option value="Problemas de Hardware">
                    Problemas de Hardware
                  </option>
                  <option value="Pérdida de Datos">Pérdida de Datos</option>
                  <option value="Problemas de Red Local">
                    Problemas de Red Local
                  </option>
                  <option value="Fallas en la Impresora">
                    Fallas en la Impresora
                  </option>
                  <option value="Problemas de Compatibilidad">
                    Problemas de Compatibilidad
                  </option>
                  <option value="Configuraciones Incorrectas">
                    Configuraciones Incorrectas
                  </option>
                  <option value="Problemas de Usuario Final">
                    Problemas de Usuario Final
                  </option>
                  Actualizaciones del Sistema
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                Descripcion
              </label>
              <textarea
                name="description"
                className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                value={state.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm md:text-xl font-Open-Sans font-medium text-negro">
                Lugar
              </label>
              <input
                type="text"
                name="location"
                className="text-sm md:text-lg bg-tropical-indigo rounded-md py-2 px-3 bg-opacity-80 text-blanco focus:outline-none"
                value={state.location}
                onChange={handleChange}
              />
            </div>

            <fieldset className="flex w-full justify-center flex-wrap gap-3">

              <div class="flex items-center">
                <input
                  id="country-option-1"
                  type="radio"
                  name="impact"
                  value="Muy Baja"
                  onChange={handleChange}
                  class="w-8 h-8 border-gray-300 accent-tropical-indigo"
                />
                <label
                  htmlFor="country-option-1"
                  class="block ms-2 text-sm md:text-lg font-Open-Sansm font-semibold text-negro"
                >
                  Muy Baja
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="country-option-2"
                  type="radio"
                  name="impact"
                  value="Baja"
                  onChange={handleChange}
                  class="w-8 h-8 border-gray-300 accent-tropical-indigo"
                />
                <label
                  htmlFor="country-option-2"
                  class="block ms-2 text-sm md:text-lg font-Open-Sans font-semibold text-negro"
                >
                  Baja
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="country-option-3"
                  type="radio"
                  name="impact"
                  value="Media"
                  onChange={handleChange}
                  class="w-8 h-8 border-gray-300 accent-tropical-indigo"
                />
                <label
                  htmlFor="country-option-3"
                  class="block ms-2 text-sm md:text-lg font-Open-Sans font-semibold text-negro"
                >
                  Media
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="country-option-4"
                  type="radio"
                  name="impact"
                  value="Alta"
                  onChange={handleChange}
                  class="w-8 h-8 border-gray-300 accent-tropical-indigo"
                />
                <label
                  htmlFor="country-option-4"
                  class="block ms-2 text-sm md:text-lg font-Open-Sans font-semibold text-negro"
                >
                  Alta
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="option-disabled"
                  type="radio"
                  name="impact"
                  value="Muy Alta"
                  onChange={handleChange}
                  class="w-8 h-8 border-gray-300 accent-tropical-indigo"
                />
                <label
                  htmlFor="option-disabled"
                  class="block ms-2 text-sm md:text-lg font-Open-Sans font-semibold text-negro"
                >
                  Muy Alta
                </label>
              </div>
            </fieldset>
          </div>

          <button className="text-sm md:text-lg font-Trocchi p-2 px-6 bg-periwinkle rounded-md hover:bg-negro hover:text-periwinkle transition-all duration-500">
            EDITAR
          </button>
        </form>
      </div>
    </>
  );
}

export default FormEdit;