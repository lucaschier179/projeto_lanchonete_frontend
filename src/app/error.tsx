"use client";

export default function Error() {
  return (
    <main className="h-screen p-4 flex flex-col gap-4">
      <h1 className="font-bold text-lg xs:text-2xl sm:text-3xl lg:text-4xl text-center text-black dark:text-white">
        Algo deu errado
      </h1>
      <span className="text-xs xs:text-sm sm:text-base lg:text-xl text-center text-black dark:text-white">
        Houve um problema ao tentar carregar esta página. Por favor, tente novamente mais tarde. Se o erro persistir, entre em contato com o suporte para obter ajuda.
      </span>
    </main>
  )
}
