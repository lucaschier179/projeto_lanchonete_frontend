import Footer from "@/components/ClientComponents/Footer/Footer";
import Header from "@/components/ClientComponents/Header/Header";
import CardItem from "@/components/ServerComponents/CardItem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { LISTA_ITENS_CARDAPIO } from "@/constants/listaItensCardapio";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center my-20 mx-10 gap-10">
        <Image
          src={"/images/banner_home.png"}
          alt="banner home"
          width={1316}
          height={262}
          className="object-cover"
        />
        <section className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-5">
            <p className="text-2xl">
              Cardápio
            </p>
            <p>
              Filtro aqui
            </p>
          </div>
          <Carousel
            className="mx-10"
          >
            <CarouselContent>
              {LISTA_ITENS_CARDAPIO.map((item) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className="basis-[15%]"
                  >
                    <CardItem
                      id={item.id}
                      imagem={item.imagem}
                      nome={item.nome}
                      preco={item.preco}
                      ingredientes={item.ingredientes}
                    />
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8">
          <div className="text-center lg:text-left lg:w-1/3">
            <p className="text-2xl font-semibold mb-2">Você tem fome do quê?</p>
            <p className="text-gray-600 mb-4">
              Acesse a opção de filtros para pedir aquele pratão!
            </p>
            <Button
              variant="solid"
              radius="sm"
              className="px-4 py-2 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              Saiba mais
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:w-2/3">
            <div className="w-full h-full">
              <Image
                src="/images/pizza.png"
                alt="Pizza"
                className="rounded-lg border-[12px] border-neutral-100 shadow-sm shadow-neutral-400"
                width={300}
                height={200}
              />
            </div>
            <div className="w-full h-full">
              <Image
                src="/images/carne.png"
                alt="Carne"
                className="rounded-lg border-[12px] border-neutral-100 shadow-sm shadow-neutral-400"
                width={300}
                height={200}
              />
            </div>
            <div className="w-full h-full mt-5 -ml-12">
              <Image
                src="/images/macarrao.png"
                alt="Massa"
                className="rounded-lg border-[12px] border-neutral-100 shadow-sm shadow-neutral-400"
                width={300}
                height={200}
              />
            </div>
            <div className="w-full h-full mt-5 -ml-12">
              <Image
                src="/images/sorvete.png"
                alt="Sobremesa"
                className="rounded-lg border-[12px] border-neutral-100 shadow-sm shadow-neutral-400"
                width={250}
                height={100}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
