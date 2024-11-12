"use client";
import FormLogin from "@/components/ClientComponents/Forms/FormLogin";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()

  return (
    <>
      <main className="flex flex-col box-border">
        <div className="w-full h-16 mb-10 relative shadow-md shadow-neutral-500 bg-white">
          <Image
            onClick={() => router.push("/")}
            src="/images/logo_prato_rapido.png"
            width={100}
            height={100}
            alt="Logo - Prato Rápido"
            className="flex justify-center items-center m-auto w-16 cursor-pointer"
          />
        </div>
        <FormLogin />
      </main>
    </>
  )
}
