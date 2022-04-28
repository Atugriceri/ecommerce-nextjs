import { useState, createContext, useContext, useEffect } from 'react'
import { fetchProducts } from '../service/api'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    const getProducts = async () => {
      try {
        const productData = await fetchProducts()
        setProducts(productData.ProductList)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  const values = {
    products, 
    loading,
  }

  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  )
}

const useProduct = () => useContext(ProductContext)

export {ProductProvider, useProduct}