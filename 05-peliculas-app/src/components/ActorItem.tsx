import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterfaces';

interface Props {
    actor: Cast
}

export const ActorItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>

            {
                (actor.profile_path) && (
                    <Image
                        source={{ uri }}
                        style={{
                            width: 50, height: 50, borderRadius: 10
                        }} />
                )
            }

            <View style={styles.actorInfo}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ color: 'black', fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.49,
        shadowRadius: 4.65,
        elevation: 9,
        borderRadius: 10,
        marginLeft: 20,
        paddingRight: 10,
        height: 50
    },
    actorInfo: {
        marginLeft: 10,
    }
});