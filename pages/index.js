import Head from 'next/head'
import HeadBar from '../components/HeadBar'
import Navbar from '../components/Navbar'
import { useBreadcrumb } from '../contexts/BreadcrumbContext'
import Breadcrumb from '../components/Breadcrumb'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const { breadcrumb } = useBreadcrumb()

  return (
    <div>
      <Head>
        <title>{breadcrumb.MetaTitle}</title>
        <meta name={breadcrumb.Name} content={breadcrumb.MetaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <HeadBar />
       <header>
        <Navbar />
        <Breadcrumb />
        <Filter />
       </header>
       <ProductCard />
      </main>
    </div>
  )
}
