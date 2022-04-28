import Head from 'next/head'
import Image from 'next/image'
import HeadBar from '../components/HeadBar'
import Navbar from '../components/Navbar'
import { useProduct } from '../contexts/ProductContext'

import { useBreadcrumb } from '../contexts/BreadcrumbContext'
import Breadcrumb from '../components/Breadcrumb'
import Filter from '../components/Filter'
//route => localhost:3000/
export default function Home() {
  const { products } = useProduct()

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
      </main>
    </div>
  )
}
