import { Character, MappedCharacter } from "../../interfaces"

export const charactersSorted = (allCharacters: Character[]):MappedCharacter[] => {
  const charactersArr: MappedCharacter[] = allCharacters.map(c => {
    
    return{
      id: c.id,
      name: c.name,
      gender: c.gender,
      species: c.species,
      image: c.image,
    }
  }) 

  return charactersArr
}