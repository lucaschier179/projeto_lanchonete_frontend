import IListaItensCardapioData from "@/interfaces/IListaItensCardapioData";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

export default function CardItem(props: IListaItensCardapioData) {
  return (
    <>
      <Card
        radius="sm"
        shadow="sm"
        className="max-w-52"
      >
        <CardBody className=" p-0">
          <Image
            src={props.imagem}
            alt="Imagem Card"
            width={208}
            height={112}
            className="w-52 max-h-28 h-28 rounded-t-md object-cover"
            priority
          />
        </CardBody>
        <CardFooter className="flex flex-col p-0 overflow-visible">
          <section className="w-full h-44 p-4 flex flex-col justify-between gap-2">
            <div>
              <p
                className="font-semibold truncate text-xl text-black"
              >
                {props.nome}
              </p>
              <p className="text-sm">
                {props.ingredientes}
              </p>
            </div>
            <div>
              <p className="items-end">
                A partir de R${props.preco.toFixed(2).replace(".", ",")}
              </p>
            </div>
          </section>
        </CardFooter>
      </Card>
    </>
  )
}
