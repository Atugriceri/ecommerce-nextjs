import { useState, createContext, useContext, useEffect } from 'react'
import { fetchFilters } from '../service/api'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getFilters = async () => {
      try {
        const filterData = await fetchFilters()
        setFilters(filterData.Context)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }
    getFilters()
  }, [])

  const values = {
    filters, 
    loading,
  }

  return (
    <FilterContext.Provider value={values}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilter = () => useContext(FilterContext)

export {FilterProvider, useFilter}