import '../styles/globals.css'
import { ProductProvider } from '../contexts/ProductContext'
import { FilterProvider } from '../contexts/FilterContext'
import { BreadcrumbProvider } from '../contexts/BreadcrumbContext'

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <FilterProvider>
        <BreadcrumbProvider>
          <Component {...pageProps} />
        </BreadcrumbProvider>
      </FilterProvider>
    </ProductProvider>
  )
}

export default MyApp
