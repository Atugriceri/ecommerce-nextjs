import { useState, createContext, useContext, useEffect } from 'react'

const CartContext = createContext()

const defaultCart = (typeof window !== 'undefined' && (JSON.parse(localStorage.getItem('cart')) || []))

const CartProvider = ({children}) => {
  const [items, setItems] = useState(defaultCart)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addToCart = (data, findCartItem) => {
    if(!findCartItem) {
      return setItems((items) => [data, ...items] )
    }

    const filtered = items.filter((item) => item.ListingId !== findCartItem.ListingId)
    setItems(filtered)
  }

  const removeFromCart = (item_id) => {
    const filtered = items.filter((item) => item.ListingId !== item_id)
    setTimeout(() => {
      setItems(filtered)
      setLoading(true)
    }, 1000)
    setLoading(false)
  }

  const values = {
    items,
    setItems,
    addToCart,
    removeFromCart,
    loading,
  }

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }