"use client";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface ILoginData {
  email: string;
  password: string;
}

type loginFormData = z.infer<typeof loginFormSchema>

const loginFormSchema = z.object({
  email: z.string().min(1, "O campo email é obrigatório!").email("Email inválido, digite um email válido!"),
  password: z.string().min(1, "O campo senha é obrigatório!").min(8, "Senha insuficiente!"),
})

export default function FormLogin() {
  const router = useRouter()
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
      password: ""
    }
  })

  async function handleLogin(data: ILoginData) {
    const responseAPI = await api.post("/user/login", data)
    .then(res => {
      console.log("Logado com sucesso. Seja bem vindo!")
    })
    .catch((error: AxiosError) => {
      console.error(error?.response?.data)
    })
    router.push("/")
    // console.log(data)
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
              {...register("password")}
              type="password"
              name="password"
              placeholder=" Senha..."
              className="input-text"
              required
            />
            {errors.password &&
              <p className="text-sm text-red-600">
                  {errors.password.message}
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
