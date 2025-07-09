//Garantir que minha aplicação não execute se não tiver as variaveis de ambientes necessárias

import { z } from "zod";

//Garantir que o que viver co process.env será um objeto
const envSchema = z.object({
  //Transformando o valor da chave em number
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
});

export const env = envSchema.parse(process.env);
