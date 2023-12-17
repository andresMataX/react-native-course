import React, { useContext } from 'react';
import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();

    const { setMainColors } = useContext(GradientContext);

    useEffect(() => {

        if (nowPlaying.length > 0) {
            getPosterColor(0);
        }

    }, [nowPlaying])


    const getPosterColor = async (index: number) => {

        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
        setMainColors({ primary, secondary });
    }

    if (isLoading) {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <ActivityIndicator color="red" size={75} />
            </View>
        )
    }

    return (
        <GradientBackground>

            <ScrollView>
                <View style={{ marginTop: top + 20 }}>

                    {/* Carousel principal */}
                    <View
                        style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={(index) => getPosterColor(index)} />
                    </View>

                    {/* Películas populares */}
                    <HorizontalSlider movies={popular} title="Popular" />
                    <HorizontalSlider movies={topRated} title="Top Rated" />
                    <HorizontalSlider movies={upComing} title="Upcoming" />

                </View>
            </ScrollView>

        </GradientBackground>
    )
}