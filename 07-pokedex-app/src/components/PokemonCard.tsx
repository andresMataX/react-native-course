import React, { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonIntefaces';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon,
  navigation?: StackNavigationProp<RootStackParams, "Home", undefined>
}

export const PokemonCard = ({ pokemon, navigation }: Props) => {

  const [bgColor, setBgColor] = useState('grey');

  const isMounted = useRef(true);

  useEffect(() => {

    ImageColors.getColors(pokemon.picture, { fallback: 'grey' }).then((result) => {

      if (!isMounted.current) return

      switch (result.platform) {
        case "android":
          setBgColor(result.dominant || 'grey')
          break;
        case "ios":
          setBgColor(result.background || 'grey')
          break;
      }
    });

    return () => {
      isMounted.current = false
    }

  }, [])


  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation?.navigate("Pokemon", {
          simplePokemon: pokemon,
          color: bgColor
        })
      }}
    >
      <View style={{ ...styles.cardContainer, width: windowWidth * 0.4, backgroundColor: bgColor }}>

        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>

        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemonImage}
        />

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5
  }
});