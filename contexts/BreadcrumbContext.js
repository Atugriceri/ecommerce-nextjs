import { useState, createContext, useContext, useEffect } from 'react'
import { fetchBreadCrumbInfo } from '../service/api'

const BreadcrumbContext = createContext()

const BreadcrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getBreadcrumb = async () => {
      try {
        const breadcrumbData = await fetchBreadCrumbInfo()
        setBreadcrumb(breadcrumbData.PageMeta)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }
    getBreadcrumb()
  }, [])

  const values = {
    breadcrumb, 
    loading,
  }

  return (
    <BreadcrumbContext.Provider value={values}>
      {children}
    </BreadcrumbContext.Provider>
  )
}

const useBreadcrumb = () => useContext(BreadcrumbContext)

export {BreadcrumbProvider, useBreadcrumb}