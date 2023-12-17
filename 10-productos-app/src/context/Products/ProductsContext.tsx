import React, { createContext, useEffect, useState } from 'react';
import { Producto, ProductsResponse } from '../../interfaces/Products/productsInterface';
import cafeApi from '../../api/cafeApi';
import { ImagePickerResponse } from 'react-native-image-picker';
import { Platform } from 'react-native';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProducts: (categoryID: string, productName: string) => Promise<Producto>;
  updateProducts: (categoryID: string, productName: string, productID: string) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loadProductByID: (id: string) => Promise<Producto>;
  uploadImage: (productId: string, data: ImagePickerResponse) => Promise<void>;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {

  const [products, setProducts] = useState<Producto[]>([])

  useEffect(() => {
    loadProducts()
  }, [])


  const loadProducts = async () => {

    try {

      const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');

      // setProducts([...products, ...resp.data.productos])
      setProducts([...resp.data.productos])

    } catch (error) {
      console.log(error);
    }

  }


  const addProducts = async (categoryID: string, productName: string): Promise<Producto> => {

    const resp = await cafeApi.post<Producto>('/productos', {
      nombre: productName,
      categoria: categoryID
    })

    setProducts([...products, resp.data])

    return resp.data;

  }


  const updateProducts = async (categoryID: string, productName: string, productID: string) => {

    const resp = await cafeApi.put<Producto>(`/productos/${productID}`, {
      nombre: productName,
      categoria: categoryID,
    })

    setProducts(products.map((p) => {
      return (p._id === productID)
        ? resp.data
        : p;
    }))

  }


  const deleteProduct = async (id: string) => { }


  const loadProductByID = async (id: string): Promise<Producto> => {

    const resp = await cafeApi.get<Producto>(`/productos/${id}`);

    return resp.data;

  }


  const uploadImage = async (productId: string, data: ImagePickerResponse) => {

    const params = {
      name: data.assets![0].fileName!,
      type: data.assets![0].type!,
      uri: Platform.OS === 'ios' ? data.assets![0].uri!.replace('file://', '') : data.assets![0].uri!,
    }

    const fileToUpload = JSON.parse(JSON.stringify(params));

    const formData = new FormData();

    formData.append('archivo', fileToUpload);

    try {
      await cafeApi.put(`/uploads/productos/${productId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        addProducts,
        updateProducts,
        deleteProduct,
        loadProductByID,
        uploadImage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}