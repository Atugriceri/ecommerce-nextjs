import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header>
      <div className="container">
      <Image src="/logo.svg" alt="Vercel Logo" width={113} height={34} />
      </div>

    </header>
  )
}

export default Navbar