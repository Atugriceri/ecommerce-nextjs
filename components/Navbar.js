import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="border-bottom border-2">
      <div className="container">
        <div className="row py-3 justify-content-between align-items-center">
          <div className="col d-flex align-items-center">
            <Link href="/">
              <Image src="/logo.svg" alt="Morhipo logo" title="Morhipo" width={113} height={34} />
            </Link>
          </div>
          <div className="col d-flex justify-content-end">
            <Link href="/">
              Sepetim
            </Link>
          </div>
        </div>  
      </div>
    </header>
  )
}

export default Navbar