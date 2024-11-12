"use server";
import { TOKEN_KEY } from "@/constants/Token/tokenKey";
import { cookies } from "next/headers";

export async function getToken() {
  return cookies().get(TOKEN_KEY)?.value
}

export async function saveToken(token: string, exp: number) {
  const formatExpireToken = exp * 1000

  cookies().set(TOKEN_KEY, token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: formatExpireToken
  })
}

export async function removeToken() {
  cookies().delete(TOKEN_KEY)
}
