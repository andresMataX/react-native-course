import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { Title } from '../components/Title';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, "Home"> { }

export const Home = ({ navigation }: Props) => {

  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View
        style={{ ...styles.globalMargin, alignItems: 'center' }}
      >
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}

          // Header
          ListHeaderComponent={<Title />}

          numColumns={2}
          renderItem={({ item }) => (
            <PokemonCard pokemon={item} navigation={navigation} />
          )}

          // InfiniteScroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}

          // Activity Indicator
          ListFooterComponent={
            <ActivityIndicator
              style={{ height: 100 }}
              color="black"
              size={20}
            />}
        />
      </View>


    </>
  )
}