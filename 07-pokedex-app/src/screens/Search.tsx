import React, { useEffect, useState } from 'react';
import { View, Platform, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { Title } from '../components/Title';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonIntefaces';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, any> { }

export const Search = ({ }: Props) => {

  const { top } = useSafeAreaInsets();

  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])

  const [term, setTerm] = useState("")

  useEffect(() => {

    if (term.length === 0) return setPokemonFiltered([])

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter((poke) => poke.name
          .toLocaleLowerCase()
          .includes(term.toLowerCase())
        )
      )
    } else {
      const pokemonById = simplePokemonList.find((poke) => poke.id === term)
      setPokemonFiltered(
        (pokemonById) ? [pokemonById] : []
      )
    }

  }, [term])


  if (isFetching) {
    return <Loading />
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20
      }}
    >

      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: '100%',
          top: (Platform.OS === 'ios') ? top : top + 30
        }}
      />

      <FlatList
        data={pokemonFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}

        // Header
        ListHeaderComponent={<Title text={term} />}

        renderItem={({ item }) => (
          <PokemonCard pokemon={item} />
        )}

      />

    </View>
  )
}