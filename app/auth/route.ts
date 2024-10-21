import { NextRequest } from "next/server";
import AppConfig from "../lib/appconfg";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const username = body?.username;
  const password = body?.password;
  const loginRequest = `${AppConfig.authUrl}?user=${username}&pwd=${password}`;
  
  let data = await fetch(loginRequest, { cache: "no-store" });
  let posts = await data.json();

  if (!posts.result) {
    return new Response('Error', {
      status: 400,
    })
  }

  return Response.json(posts);
}