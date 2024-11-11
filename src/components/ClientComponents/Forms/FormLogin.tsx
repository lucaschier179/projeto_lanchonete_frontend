"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface ILoginData {
  email: string;
  senha: string;
}

type loginFormData = z.infer<typeof loginFormSchema>

const loginFormSchema = z.object({
  email: z.string().min(1, "O campo email é obrigatório!").email("Email inválido, digite um email válido!"),
  senha: z.string().min(1, "O campo senha é obrigatório!").min(8, "Senha insuficiente!"),
})

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      email: "",
      senha: ""
    }
  })

  async function handleLogin(data: ILoginData) {
    console.log(data)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="formulario"
      >
        <div className="div-text">
          <h2 className="frase">
            Falta
            <span className="text-destaque">
              pouco
            </span>
            para matar a sua
            <span className="text-destaque">
              fome<span className="#F8EAE5">!</span>
            </span>
          </h2>
        </div>
        <div className="div-login">
          <h1 className="h1-login">
            Login
          </h1>
          <div className="div-inputs">
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder=" Email..."
              className="input-text"
              required
            />
            {errors.email &&
              <p className="text-sm text-red-600">
                  {errors.email.message}
              </p>
            }
            <input
              {...register("senha")}
              type="password"
              name="senha"
              placeholder=" Senha..."
              className="input-text"
              required
            />
            {errors.senha &&
              <p className="text-sm text-red-600">
                  {errors.senha.message}
              </p>
            }
            <div className="div-button">
              <button className="button-submit" type="submit" value="Entrar">
                Entrar
              </button>
            </div>
            <div>
              <Link className="bg-[#E25700]" href="/register">
                Não possui conta?
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
