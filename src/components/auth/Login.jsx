import vectorTop from '../../../public/Vector.svg'
import vectorBottom from '../../../public/Vector-1.svg'
import FormLogin from '../FormLogin';

function Login() {
    return (
      <>
        <main className="bg-blanco w-full h-[100vh] relative">
          <div className="w-full h-auto absolute top-0">
            <img src={vectorTop} alt="" className='w-full -z-10'/>
          </div>
          
          <section className='absolute flex justify-center items-center w-full h-full z-10 px-8'>
            <FormLogin />
          </section>


          <div className="w-full h-auto absolute bottom-0">
            <img src={vectorBottom} alt="" className='w-full -z-10'/>
          </div>
        </main>
      </>
    );
  }
  
  export default Login;
  