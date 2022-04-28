import React from 'react'
import { useBreadcrumb } from '../contexts/BreadcrumbContext'

const Breadcrumb = () => {
  const { breadcrumb, loading } = useBreadcrumb()
  return (
    <div className="container py-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {!loading && breadcrumb?.BreadCrumbNodes?.length > 0 && breadcrumb.map((item, key) => {
            return (
              <li className="breadcrumb-item" key={key}>{item.BreadCrumbName}</li>
            )
          })}
          {!loading && breadcrumb?.BreadCrumbNodes?.length === 0 && <li className="breadcrumb-item">{breadcrumb.BreadCrumbName}</li>}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb