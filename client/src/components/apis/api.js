import axios from 'axios'

const baseURL = "http://localhost:8000/api"

const api = axios.create({
    baseURL: baseURL
})

const getAllProduct = () => api.get('/getallproducts')
const getResultPaginated = (payload) => api.post('/getproductsbypage', payload)
const getProductByID = (payload) => api.post('/getProductByID', payload)
const getProductByIDs = (payload) => api.post('/getProductByIDs', payload)
const getAllProductPriceAsc = (payload) => api.post('/getallproducts/price-asc', payload)
const getAllProductPriceDesc = (payload) => api.post('/getallproducts/price-desc', payload)

const apis = {
    getAllProduct,
    getAllProductPriceAsc,
    getAllProductPriceDesc,
    getResultPaginated,
    getProductByID,
    getProductByIDs
}

export default apis