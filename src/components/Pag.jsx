import React, { useState } from "react";
import { MdArrowBackIos, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export const Pag = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex gap-4 mt-8 ml-4">
      <button
        className="bg-tropical-indigo p-2 rounded-md text-blanco flex justify-center items-center"
        disabled={pagina === 1 || pagina < 1}
        onClick={previousPage}
      >
        <MdArrowBackIosNew className="text-2xl" />
      </button>
      <input
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
        className="text-center flex items-center justify-center text-negro font-semibold font-Open-Sans text-lg w-12 border-tropical-indigo border-2 rounded-md"
      />
      <p className="text-center flex items-center justify-center text-negro font-semibold font-Open-Sans text-lg"> de {maximo} </p>
      <button
        className="bg-tropical-indigo p-2 rounded-md text-blanco flex justify-center items-center"
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
      >
        <MdArrowForwardIos className="text-2xl" />
      </button>
    </div>
  );
};
