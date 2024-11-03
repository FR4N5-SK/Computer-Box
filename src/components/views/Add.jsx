import FormAdd from "../FormAdd";
import Nav from "../Nav";

function Add() {
  return (
    <>
      <main className="bg-blanco w-full h-[100vh] relative">
        <Nav />

        <section className="w-full min-h-[100vh] pt-[175px] pb-[50px] md:pb-0 lg:pt-0 lg:pl-[125px] flex justify-center items-center">
            <FormAdd />
        </section>
      </main>
    </>
  );
}

export default Add;
