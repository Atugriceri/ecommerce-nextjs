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

    const updatedItems = items.map(item => {
      if(item.ListingId === item_id) return {
        ...item,
        deleted: true
      }
      return item
    })

    const filtered = items.filter(item =>item.ListingId !== item_id)
    
    setItems(updatedItems)
    setTimeout(() => {
      setItems(filtered)
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