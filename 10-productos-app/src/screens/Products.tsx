import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ProductsContext } from '../context/Products/ProductsContext';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams, 'Products'> { }

export const Products = ({ navigation }: Props) => {

  const { products, loadProducts } = useContext(ProductsContext);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('Product', {
            id: undefined,
            name: 'New Product'
          })}
        >
          <Text style={{ color: 'black' }}>Agregar</Text>
        </TouchableOpacity>
      )
    })
  }, [])


  const loadProductsFromBackend = async () => {

    setRefreshing(true)
    await loadProducts()
    setRefreshing(false)

  }

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        data={products}
        keyExtractor={(p) => p._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Product', {
              id: item._id,
              name: item.nombre
            })}
          >
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadProductsFromBackend}
            progressViewOffset={30}
            colors={['white', 'red', 'orange']}
            progressBackgroundColor="#000"
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  productName: {
    color: 'black',
    fontSize: 20
  },
  itemSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.5)',
    marginVertical: 5,
  }
});