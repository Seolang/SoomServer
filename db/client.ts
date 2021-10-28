import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config as dotEnvConfig } from 'https://deno.land/x/dotenv@v3.0.0/mod.ts';

// config
import { DATABASE, TABLE } from "./config.ts";

dotEnvConfig({ export: true});

const client = await new Client();

client.connect({
  hostname: Deno.env.get('hostname'), //db 주소
  username: Deno.env.get('username'), //db 계정명
  password: Deno.env.get('password'), //db 비밀번호
  db: Deno.env.get('db'),             //db 이름
});
export default client;
