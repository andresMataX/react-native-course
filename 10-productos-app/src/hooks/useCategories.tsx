import { useEffect, useState } from "react"
import cafeApi from '../api/cafeApi';
import { CategoriesResponse, Categoria } from '../interfaces/Products/productsInterface';

export const useCategories = () => {

  const [categories, setCategories] = useState<Categoria[]>([]);

  useEffect(() => {

    getCategories()

  }, [])

  const getCategories = async () => {

    const resp = await cafeApi.get<CategoriesResponse>('/categorias');

    setCategories(resp.data.categorias)

  }

  return {
    categories
  }
}