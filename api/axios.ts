import axios from "axios";

export const CharacterApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api"
})