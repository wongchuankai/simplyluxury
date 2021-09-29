import axios from 'axios'
import config from '../configs/config'

const baseURL =  config.SERVER_URI//"https://simply-luxury.herokuapp.com/api"//"http://localhost:8000/api"

const api = axios.create({
    baseURL: baseURL
})

const getAllProduct = () => api.get('/getallproducts')
const getResultPaginated = (payload) => api.post('/getproductsbypage', payload)
const getProductByID = (payload) => api.post('/getProductByID', payload)
const getProductByIDs = (payload) => api.post('/getProductByIDs', payload)
const getAllProductPriceAsc = (payload) => api.post('/getallproducts/price-asc', payload)
const getAllProductPriceDesc = (payload) => api.post('/getallproducts/price-desc', payload)
const signupEmail = (payload) => api.post('/emailsignup', payload)

const apis = {
    getAllProduct,
    getAllProductPriceAsc,
    getAllProductPriceDesc,
    getResultPaginated,
    getProductByID,
    getProductByIDs,
    signupEmail
}

export default apis