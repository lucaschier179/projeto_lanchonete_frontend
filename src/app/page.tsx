import Image from "next/image";
import "../../public/images/logo_prato_rapido.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-7xl font-bold flex flex-col items-center h-screen gap-4">
      <div className="w-full h-16 relative bg-[#F8EAE5]">
        <Image
          src="/images/logo_prato_rapido.png"
          width={100}
          height={100}
          alt="Logo - Prato Rápido"
          className="flex justify-center items-center m-auto w-16"
        />
      </div>
      <p className="flex flex-col justify-center items-center text-[#6D2309]">
        Bem Vindo à Página Inicial!
      </p>
      <div className="flex justify-end items-center gap-4">
        <Link
          href="/cadastroCliente"
          className="rounded cursor-pointer border-none w-60 h-16 flex justify-center items-center transition-all text-2xl text-center font-bold text-[#E8E8E8] bg-[#219100]"
        >
          Login
        </Link>
        <Link
          href="/cadastroColaborador"
          className="rounded cursor-pointer border-none w-60 h-16 flex justify-center items-center transition-all text-2xl text-center font-bold text-[#E8E8E8] bg-[#219100]"
        >
          Cadastro
        </Link>
      </div>
    </main>
  );
}
