import { Divider } from "@nextui-org/divider";

export default function Footer() {
  return (
    <>
      <main className="w-3/4 my-10 m-auto flex flex-col gap-10">
        <Divider />
        <section className="flex justify-around">
          <div className="flex flex-col gap-10">
            <p>
              Prato Rápido
            </p>
            <p>
              Fale conosco
            </p>
            <p>
              Sobre nós
            </p>
          </div>
          <div>
            <p>
              Social
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
