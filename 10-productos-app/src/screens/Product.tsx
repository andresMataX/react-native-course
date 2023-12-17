import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, Button, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { Picker } from '@react-native-picker/picker';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/Products/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'Product'> { }

export const Product = ({ route, navigation }: Props) => {

  const { id = '', name = '' } = route.params;

  const { categories } = useCategories();

  const [tempUri, setTempUri] = useState<string>()

  const { loadProductByID, addProducts, updateProducts, uploadImage } = useContext(ProductsContext);

  const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: ''
  })

  useEffect(() => {
    navigation.setOptions({
      title: (nombre) ? nombre : 'No name product'
    })
  }, [nombre])

  useEffect(() => {
    loadProduct()
  }, [])

  const loadProduct = async () => {

    if (id.length === 0) return

    const product = await loadProductByID(id);

    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre
    })

  }

  const saveOrUpdate = async () => {
    if (id.length > 0) {
      updateProducts(categoriaId, nombre, id);
    } else {

      const tempCategoriaId = categoriaId || categories[0]._id;

      const newProduct = await addProducts(tempCategoriaId, nombre);

      onChange(newProduct._id, '_id');

    }
  }

  const takePhoto = () => {

    launchCamera({
      mediaType: 'photo',
      quality: 0.5
    }, (resp) => {
      if (resp.didCancel) return

      if (!resp.assets) return

      setTempUri(resp.assets[0].uri)
      uploadImage(_id, resp)
    })

  }

  const takePhotoFromGallery = () => {

    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5
    }, (resp) => {
      if (resp.didCancel) return

      if (!resp.assets) return

      setTempUri(resp.assets[0].uri)
      uploadImage(_id, resp)
    })

  }

  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.label}>Product name:</Text>
        <TextInput
          placeholder='Product'
          placeholderTextColor="#eee"
          style={styles.input}
          value={nombre}
          onChangeText={(value) => onChange(value, 'nombre')}
        />

        <Text style={styles.label}>Category:</Text>

        <Picker
          selectedValue={categoriaId}
          onValueChange={(itemValue) => onChange(itemValue, 'categoriaId')}
          style={{ color: 'black' }}
        >
          {
            categories.map((c) => (
              <Picker.Item label={c.nombre} value={c._id} key={c._id} />
            ))
          }
        </Picker>

        <Button
          title='Save'
          color="#5856D6"
          onPress={saveOrUpdate}
        />

        {
          (_id.length > 0) && (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
              <Button
                title='Camera'
                color="#5856D6"
                onPress={takePhoto}
              />
              <View style={{ width: 16 }} />
              <Button
                title='Gallery'
                color="#5856D6"
                onPress={takePhotoFromGallery}
              />
            </View>
          )
        }

        {
          (img.length > 0 && !tempUri) && (
            <Image
              source={{ uri: img }}
              style={{ width: '100%', height: 300, marginTop: 20 }}
            />
          )
        }

        {
          (tempUri) && (
            <Image
              source={{ uri: tempUri }}
              style={{ width: '100%', height: 300, marginTop: 20 }}
            />
          )
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20
  },
  label: {
    fontSize: 18,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 8,
    marginBottom: 16,
    color: 'black'
  }
});