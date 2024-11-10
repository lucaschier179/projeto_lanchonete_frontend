"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.replace("/"), 5000)
  }, [router])

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-4 gap-2 text-black bg-white">
        <h1 className="text-center text-xl xs:text-2xl sm:text-3xl lg:text-9xl font-bold">
          404
        </h1>
        <h2 className="mb-20 text-center text-xl xs:text-2xl sm:text-3xl lg:text-5xl font-bold">
          Página não encontrada!
        </h2>
        <h3 className="text-center text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold">
          Ops! Parece que a página que você está procurando não existe ou foi movida
        </h3>
      </main>
    </>
  )
}
