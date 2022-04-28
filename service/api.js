import axios from 'axios'

const BASE_URL = "https://www.mockachino.com/42a008d9-66a2-41/"

const ENDPOINTS = {
  fetchProductList: "products",
  fetchFilterBar: "filter",
  fetchBreadCrumb: "filter",
}

const instance = axios.create({
  baseURL: BASE_URL,
})

export const fetchProducts = async() => {
  const { data } = await instance.get(
    `${ENDPOINTS.fetchProductList}`
  )
  return data
}

export const fetchFilters = async() => {
  const { data } = await instance.get(
    `${ENDPOINTS.fetchFilterBar}`
  )
  return data.Context
}

export const fetchBreadCrumbInfo = async() => {
  const { data } = await instance.get(
    `${ENDPOINTS.fetchBreadCrumb}`
  )
  return data
}