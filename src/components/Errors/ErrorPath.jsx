import { Link } from 'react-router-dom';
import Logo from '../../../public/Logo Solo.png'

function ErrorPath() {
  return (
    <>
      <main className="bg-blanco">
        <section className="w-full h-[100vh] flex justify-center items-center">
            <div className="flex flex-col w-full items-center">
                <img src={Logo} alt="Logo" className='w-[200px] h-[200px] mb-8' />
                <h2 className="text-5xl font-Trocchi text-tropical-indigo mb-4"><b className="text-negro">ERROR</b> 404</h2>
                <h3 className="text-2xl font-Open-Sans font-bold text-periwinkle mb-4">Esta página no funciona, o no existe.</h3>
                <Link to={"/"} className='bg-tropical-indigo font-Trocchi text-xl p-3 rounded-lg text-blanco transition-colors duration-500 hover:text-blanco hover:bg-cool-gray'>REGRESAR</Link>
            </div>
        </section>
      </main>
    </>
  );
}

export default ErrorPath;
