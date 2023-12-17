import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonIntefaces';
import { ScrollView } from 'react-native-gesture-handler';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonFull
}

export const PokemonDetails = ({ pokemon }: Props) => {

  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      showsVerticalScrollIndicator={false}
    >

      <View style={{ ...styles.container, marginTop: 370 }}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map(({ type }) => (
              <Text key={type.name} style={{ ...styles.regularText, marginRight: 10 }}>
                {type.name}
              </Text>
            ))
          }
        </View>
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight} kg</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprites}
        />
      </ScrollView>

      <View style={styles.container}>
        <Text style={styles.title}>Basic Skills</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.abilities.map(({ ability }) => (
              <Text key={ability.name} style={{ ...styles.regularText, marginRight: 10 }}>
                {ability.name}
              </Text>
            ))
          }
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Moves</Text>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {
            pokemon.moves.map(({ move }) => (
              <Text key={move.name} style={{ ...styles.regularText, marginRight: 10 }}>
                {move.name}
              </Text>
            ))
          }
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {
            pokemon.stats.map((stat, i) => (
              <View
                key={stat.stat.name + i}
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Text style={{ ...styles.regularText, marginRight: 10 }}>
                  {stat.stat.name}
                </Text>
                <Text style={{ ...styles.regularText, marginRight: 10, fontWeight: 'bold' }}>
                  {stat.base_stat}
                </Text>
              </View>
            ))
          }
        </View>

        <View
          style={{
            marginBottom: 60,
            alignItems: 'center'
          }}
        >
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprites}
          />
        </View>

      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    marginTop: 20
  },
  regularText: {
    fontSize: 18,
    color: 'black'
  },
  basicSprites: {
    width: 100,
    height: 100
  }
});