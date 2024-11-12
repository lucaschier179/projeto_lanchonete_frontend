import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Navbar
        isBlurred={false}
        className="shadow-md shadow-neutral-500"
      >
        <NavbarContent className="hidden sm:flex gap-12">
          <NavbarBrand
            className="flex justify-end"
          >
            <Image
              src={"/images/logo_prato_rapido.png"}
              alt="logo prato rápido"
              width={80}
              height={80}
            />
          </NavbarBrand>
          <NavbarItem isActive>
            <Link
              href="/"
              color="foreground"
            >
              Ínicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/cardapio"
            >
              Cardápio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/entrega"
              color="foreground"
            >
              Entrega
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem
            className="hidden lg:flex font-semibold text-orange-600"
          >
            <Link
              href="/register"
            >
              Criar conta
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/login"
              variant="solid"
              radius="sm"
              className="text-white bg-orange-600"
            >
              Entrar
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
