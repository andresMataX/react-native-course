import { useEffect, useRef, useState } from "react";
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResp, SimplePokemon, Result } from '../interfaces/pokemonIntefaces';

export const usePokemonPaginated = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  // const nextPageUrl

  const loadPokemons = async () => {

    setIsLoading(true)

    const resp = await pokemonApi.get<PokemonPaginatedResp>(nextPageUrl.current)

    nextPageUrl.current = resp.data.next;

    mapPokemonList(resp.data.results);

    setIsLoading(false)

  }

  const mapPokemonList = (pokemonList: Result[]) => {

    const newPokemonTip: SimplePokemon[] = pokemonList.map(({ name, url }) => {

      const urlParts = url.split('/')
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;


      return { id, name, picture }
    })

    setSimplePokemonList([...simplePokemonList, ...newPokemonTip])

  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return {
    isLoading,
    simplePokemonList,
    loadPokemons
  }

}