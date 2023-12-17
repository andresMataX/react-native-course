import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMoviesDetails } from '../hooks/useMovieDetails';
import { MovieDeatils } from '../components/MovieDeatils';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { cast, isLoading, movieFull } = useMoviesDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>

                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage} />
                </View>

            </View>

            <View style={styles.marginContainer}>

                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>

            </View>

            {
                (isLoading)
                    ? <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDeatils movieFull={movieFull!} cast={cast} />
            }

            <View style={styles.backButton}>
                <TouchableNativeFeedback
                    onPress={() => navigation.pop()}>
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={60} />
                </TouchableNativeFeedback>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.49,
        shadowRadius: 4.65,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
        opacity: 0.8

    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        elevation: 9,
        top: 30,
        left: 5
    },
});