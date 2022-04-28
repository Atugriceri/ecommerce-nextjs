import React from 'react'
import Link from 'next/link'
import styles from '../styles/HeadBar.module.css'

const HeadBar = () => {
  return (
    <div className={styles.headbar}>
      <div className="container py-3">
        <div className="row d-flex justify-content-between">
          <div className="col d-flex gap-3">
            <Link href="#">
              <span className={`${styles.link} d-none d-lg-block`}>Sezon</span>
            </Link>
            <Link href="#">
              <span className={styles.active}>Özel İndirim Kulübü</span>
            </Link>
          </div>
          <div className="col d-flex justify-content-end gap-3">
            <Link href="#">
              <span className={`${styles.active} d-none d-lg-block`}>Sipariş Takibi</span>
            </Link>
            <Link href="#">
              <span className={`${styles.link} d-none d-lg-block`}>MorhipoMAG</span>
            </Link>
            <Link href="#">
              <span className={`${styles.link} d-none d-lg-block`}>Sıkça Sorulan Sorular</span>
            </Link>
            <Link href="#">
              <span className={`${styles.link} d-none d-lg-block`}>İletişim</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadBar