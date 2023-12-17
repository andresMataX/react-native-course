import React, { useRef, useState } from 'react';
import { Text, View, SafeAreaView, ImageSourcePropType, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any, any> { }

export const SlidesScreen = ({ navigation }: Props) => {

  const { theme: { colors } } = useContext(ThemeContext);

  const [activeIndex, setActiveIndex] = useState(0)
  const isVisible = useRef(false)

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          padding: 5,
          borderRadius: 5,
          justifyContent: 'center'
        }}
      >
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center'
          }}
        />
        <Text style={{ ...styles.title, color: colors.primary }}>{item.title}</Text>
        <Text style={{ ...styles.subtitle, color: colors.primary }}>{item.desc}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50
      }}
    >
      <Carousel
        data={items}
        renderItem={({ item }: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={(index) => {
          setActiveIndex(index)
          if (index === 2) {
            isVisible.current = true
          }
        }}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 30,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary
          }}
        />

        {
          (activeIndex === 2) && (
            <TouchableOpacity
              onPress={() => {
                if (isVisible.current) {
                  navigation.navigate("HomeScreen")
                }
              }}
              style={{
                flexDirection: 'row',
                backgroundColor: colors.primary,
                width: 140,
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              activeOpacity={0.9}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: 'white'
                }}
              >
                Entrar
              </Text>
              <Icon name='chevron-forward-outline' size={30} color="white" />
            </TouchableOpacity>
          )
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6'
  },
  subtitle: {
    fontSize: 16,
    color: 'black'
  }
});