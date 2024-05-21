"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface IRegisterData {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  endereco: string;
  idade: number;
}

type RegisterFormData = z.infer<typeof registerFormSchema>

const registerFormSchema = z.object({
  nome: z.string().min(1, "O campo nome é obrigatório!"),
  email: z.string().min(1, "O campo email é obrigatório!").email("Email inválido, digite um email válido!"),
  senha: z.string().min(1, "O campo senha é obrigatório!").min(8, "A senha precisa ter pelo menos 8 caracteres!"),
  cpf: z.string().min(1, "O campo CPF é obrigatório!").min(14, "CPF inválido, digite um CPF válido!"),
  endereco: z.string().min(1, "O campo endereço é obrigatório!"),
  idade: z.coerce.number().min(1, "O campo idade é obrigatório!"),
})

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      cpf: "",
      endereco: "",
      idade: undefined
    }
  })

  const cpf = watch("cpf")
  const cpfMask = cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")

  async function handleRegister(data: IRegisterData) {
    data.cpf = data.cpf.replace(/[.-]/g, "")
    console.log(data)
  }

  return (
    <>
      <div className="div-cadastro">
        <h1 className="h1-cadastro">
          Cadastro
        </h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="div-conteudo">
            <input
              type="text"
              {...register("nome")}
              placeholder=" Nome completo..."
              className="input-text"
            />
            {errors.nome &&
              <p className="text-sm text-red-600">
                {errors.nome.message}
              </p>
            }
            <input
              type="email"
              {...register("email")}
              placeholder=" Email..."
              className="input-text"
            />
            {errors.email &&
              <p className="text-sm text-red-600">
                {errors.email.message}
              </p>
            }
            <input
              type="password"
              {...register("senha")}
              placeholder=" Senha..."
              className="input-text"
            />
            {errors.senha &&
              <p className="text-sm text-red-600">
                {errors.senha.message}
              </p>
            }
            <input
              type="text"
              value={cpfMask}
              {...register("cpf")}
              maxLength={14}
              placeholder=" CPF... (somente números)"
              className="input-text"
            />
            {errors.cpf &&
              <p className="text-sm text-red-600">
                {errors.cpf.message}
              </p>
            }
            <input
              type="text"
              {...register("endereco")}
              placeholder=" Endereço completo..."
              className="input-text"
            />
            {errors.endereco &&
              <p className="text-sm text-red-600">
                {errors.endereco.message}
              </p>
            }
            <input
              type="number"
              min="18"
              max="100"
              {...register("idade")}
              placeholder=" Idade..."
              className="input-text"
            />
            {errors.idade &&
              <p className="text-sm text-red-600">
                {errors.idade.message}
              </p>
            }
            <div className="div-button">
              <button className="button-submit" type="submit">
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
