import Image from "next/image";
import FormRegister from "../components/ClientComponents/Forms/FormRegister";

export default function Register() {
  return (
    <>
      <main className="flex flex-col box-border">
        <div className="w-full h-16 relative bg-[#F8EAE5]">
          <Image
            src="/images/logo_prato_rapido.png"
            width={100}
            height={100}
            alt="Logo - Prato Rápido"
            className="flex justify-center items-center m-auto w-16"
          />
        </div>
        <FormRegister />
      </main>
    </>
  )
}
