import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js'
import { ProductProvider } from '../contexts/ProductContext'
import { FilterProvider } from '../contexts/FilterContext'
import { BreadcrumbProvider } from '../contexts/BreadcrumbContext'
import { CartProvider } from '../contexts/CartContext'

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <FilterProvider>
        <BreadcrumbProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </BreadcrumbProvider>
      </FilterProvider>
    </ProductProvider>
  )
}

export default MyApp
