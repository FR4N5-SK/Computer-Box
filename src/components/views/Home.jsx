import { useContext, useEffect, useState } from "react";
import CircleChart from "../charts/CircleChart";
import Nav from "../Nav";
import { Context } from "../../context/Context";
import { Galery } from "../Galery";

function Home() {
  const { users, inssues } = useContext(Context);
  const [dataUsers, setDataUsers] = useState([]);
  const [dataInssues, setDataInssues] = useState([]);
  const [dataImpact, setDataImpact] = useState([]);
  const [dataDevice, setDataDevice] = useState([]);

  const gravedad = ["Muy Baja", "Baja", "Media", "Alta", "Muy Alta"];
  const device = [
    "SWITCH",
    "ROUTER",
    "SERVIDOR",
    "ANTENA",
    "IMPRESORA",
    "COMPUTADOR",
    "LAPTO",
    "MONITOR",
    "TELEFONO",
  ];
  const colorsImpact = [
    "#91D65C", // Muy Baja (Verde claro)
    "#3B8700", // Baja (Azul claro)
    "#FFC528", // Media (Amarillo claro)
    "#F57C1F", // Alta (Naranja claro)
    "#E62020", // Muy Alta (Rojo claro)
  ];
  const colorsUsers = [
    "#A3D6D4",
    "#F1A7A1",
    "#D9B3E6",
    "#F7C6C7",
    "#B2E0D3",
    "#FFB74D",
    "#E57373",
    "#64B5F6",
    "#81C784",
    "#FFAB40",
    "#FFCCBC",
    "#C5E1A5",
    "#FF4081",
    "#B39DDB",
    "#F06292",
    "#FFD54F",
    "#BA68C8",
    "#90CAF9",
    "#FF8A80",
    "#A5D6A7",
    "#F44336",
    "#FFEB3B",
    "#64FFDA",
    "#9575CD",
    "#FF5252",
    "#4DB6AC",
    "#FF6F20",
    "#FFD740",
    "#7986CB",
    "#B2DFDB",
    "#FFF59D",
    "#F48FB1",
    "#CE93D8",
    "#FFAB91",
    "#80CBC4",
    "#FF8A65",
    "#E0E0E0",
    "#B2EBF2",
    "#FFF176",
    "#FFB300",
    "#AEEEEE",
    "#FF4081",
    "#FFD180",
    "#FF5252",
    "#B3E5FC",
    "#FFF9C4",
    "#C5CAE9",
    "#F8BBD0",
    "#B2DFDB",
    "#D1C4E9",
    "#FFE082",
    "#FF7043",
    "#B3E5FC",
    "#C6FF00",
    "#FF6E40",
    "#64B5F6",
    "#FFD54F",
    "#A5D6A7",
    "#F06292",
    "#BA68C8",
    "#81D4FA",
    "#FFAB40",
    "#D1C4E9",
    "#FFCCBC",
    "#F48FB1",
    "#FFB74D",
    "#E57373",
    "#90CAF9",
    "#F8D3A0",
    "#FFE57F",
    "#FF8A80",
    "#B2EBF2",
    "#C5E1A5",
    "#FFCC80",
    "#B39DDB",
    "#B2DFDB",
    "#FF5252",
    "#FFD740",
    "#90CAF9",
    "#F06292",
    "#CE93D8",
    "#FFAB91",
  ];
  const colorsDevice = [
    "#FF5733", // SWITCH
    "#33FF57", // ROUTER
    "#3357FF", // SERVIDOR
    "#FF33A1", // ANTENA
    "#FFC300", // IMPRESORA
    "#DAF7A6", // COMPUTADOR
    "#FF33FF", // LAPTO
    "#33FFF5", // MONITOR
    "#FF8333", // TELEFONO
  ];

  useEffect(() => {
    let newDate = [];
    users.forEach((item) => {
      newDate.push(item.user);
    });
    setDataUsers(newDate);
  }, [users]);

  useEffect(() => {
    let newDate = [];
    let newDate2 = [];
    let newDate3 = [];

    users.forEach((itemU) => {
      let count = 0;
      inssues.forEach((item) => {
        if (itemU.user === item.user) {
          count++;
        }
      });
      newDate.push(count);
    });

    gravedad.forEach((itemU) => {
      let count2 = 0;
      inssues.forEach((item) => {
        if (itemU === item.impact) {
          count2++;
        }
      });
      newDate2.push(count2);
    });

    device.forEach((itemU) => {
      let count3 = 0;
      inssues.forEach((item) => {
        if (itemU === item.typeDevice) {
          count3++;
        }
      });
      newDate3.push(count3);
    });

    setDataInssues(newDate);
    setDataImpact(newDate2);
    setDataDevice(newDate3);
  }, [inssues]);

  return (
    <>
      <main className="bg-blanco w-full h-[100vh] relative">
        <Nav />
        <section className="bg-negro w-full h-[500px] lg:h-[500px] pt-[125px] md:pb-0 lg:pt-0 lg:pl-[125px] flex lg:justify-center lg:items-center">
          <Galery />
        </section>

        <section className="w-full h-auto pt-[125px] lg:pt-0 lg:pl-[125px]">
          <div className="flex flex-col gap-20 lg:p-12 p-8 h-full w-full items-center">
            <h2 className="font-Trocchi text-3xl text-center">
              PANEL DE ANALITICAS
            </h2>

            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full bg-tropical-indigo bg-opacity-50 p-8 rounded-md">
              <div className="h-auto flex flex-col gap-4">
                <h3 className="font-Trocchi text-xl text-center text-negro">
                  INCIDENCIAS POR USUARIO
                </h3>
                <div className="h-[275px]">
                  <CircleChart
                    datos={dataInssues}
                    compare={dataUsers}
                    colors={colorsUsers}
                  />
                </div>
              </div>

              <div className="h-auto flex flex-col gap-4">
                <h3 className="font-Trocchi text-xl text-center text-negro">
                  INCIDENCIAS POR GRAVEDAD
                </h3>
                <div className="h-[275px]">
                  <CircleChart
                    datos={dataImpact}
                    compare={gravedad}
                    colors={colorsImpact}
                  />
                </div>
              </div>

              <div className="h-auto flex flex-col gap-4">
                <h3 className="font-Trocchi text-xl text-center text-negro">
                  INCIDENCIAS POR TIPO DE EQUIPO
                </h3>
                <div className="h-[275px]">
                  <CircleChart
                    datos={dataDevice}
                    compare={device}
                    colors={colorsDevice}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
