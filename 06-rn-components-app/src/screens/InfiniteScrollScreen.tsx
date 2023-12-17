import React, { useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const InfiniteScrollScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i
    }

    setNumbers([...numbers, ...newArray]);
  }

  const renderItem = (item: number) => {
    return (
      // <Image
      //     source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
      //     style={{
      //         width: '100%',
      //         height: 400
      //     }} />
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400
        }} />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={{
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}>
            <ActivityIndicator size={30} color={colors.primary} />
          </View>
        )} />
    </View>
  )
}

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150
  }
});