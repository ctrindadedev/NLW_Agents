import { useQuery } from "@tanstack/react-query";
import type { GetRoomsResponse } from "./types/get-rooms-response";

export function useRooms() {
  return useQuery({
    // Querykey é um array que recebe um identificador unico para essa chamada http (Como um id)
    queryKey: ["get-rooms"],
    //Função a ser executada para chamar os dados da API
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsResponse = await response.json();

      return result;
    },
  });
}
