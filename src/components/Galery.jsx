import { Carousel } from "flowbite-react";

export function Galery() {
  return (
    <Carousel className="rounded-none">
      <img
      className="h-full object-cover"
        src="https://www.tuproyectodevida.pe/wp-content/uploads/2020/12/Ingenier%C3%ADa-de-Sistemas.jpg"
        alt="..."
      />
      <img
      className="h-full object-cover"
        src="https://www.senati.edu.pe/sites/default/files/2017/carrera/11/carrera-dual-soporte-y-mantenimiento-de-equipos-de-computacion-senati1800-x-1190.jpg"
        alt="..."
      />
      <img
      className="h-full object-cover"
        src="https://micarrerauniversitaria.com/wp-content/uploads/2018/02/ingenieria-de-telecomunicaciones-6.jpg"
        alt="..."
      />
      <img
      className="h-full object-cover"
        src="https://s3.amazonaws.com/files.pucp.edu.pe/homepucp/uploads/2016/03/03142645/ing-telecomunicaciones.jpg"
        alt="..."
      />
      <img
      className="h-full object-cover"
        src="https://ipent.com.mx/wp-content/uploads/2023/06/7-1170x554.png"
        alt="..."
      />
    </Carousel>
  );
}
