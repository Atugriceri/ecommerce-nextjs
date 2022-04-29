import React from 'react'
import { useFilter } from '../contexts/FilterContext'
import Link from 'next/link'

const Filter = () => {
  const { filters, loading } = useFilter()

  const filterBar = filters.FilterModules

  let filterBarArr = []
  for (let x in filterBar) {
    filterBar[x].FilterModuleItems.length > 1 && filterBarArr.push(filterBar[x])
  }
console.log()
  return (
    <>
      <div className="container shadow-sm border rounded p-0">
        <div className="d-flex justify-content-start scrollMenu">
          {!loading && filterBarArr.map((item) => {
            return (
              <div className={`py-4 dropdownBtn`}>
                <span className="px-3 filterItem">{item.Name}</span>
                <i className="bi bi-chevron-down fw-bolder mx-3"></i>
              </div>
            )
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-end p-0 mt-4 px-2 px-md-0">
        <select className="bg-white border rounded p-2">
          {!loading && filters?.SortModule?.FilterModuleItems.map((item) => {
            return (
              <option className="bg-white border rounded">{item.Name}</option>
            )
          })}
          </select>
      </div>
    </>
  )
}

export default Filter