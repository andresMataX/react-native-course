import React from 'react';
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { ActorItem } from './ActorItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull
    cast: Cast[]
}

export const MovieDeatils = ({ movieFull, cast }: Props) => {

    return (
        <>
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="gray"
                        size={16} />
                    <Text style={{ color: 'gray' }}> {movieFull.vote_average} </Text>

                    <Text style={{ color: 'gray' }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                <Text style={{ fontSize: 23, color: 'black', marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ color: 'black', fontSize: 16 }}>
                    {movieFull.overview}
                </Text>

                <Text style={{ fontSize: 23, color: 'black', marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ color: 'black', fontSize: 16 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>

            <View style={{ marginTop: 10, marginBottom: 100 }}>

                <Text style={{
                    fontSize: 23, color: 'black', marginTop: 10, fontWeight: 'bold', marginHorizontal: 20
                }}>
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ActorItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 10,
                        height: 70
                    }} />
            </View>
        </>
    )
}