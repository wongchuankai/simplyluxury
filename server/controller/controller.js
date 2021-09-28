const pool = require('../db/db')
const queries = require('../queries/queries')
require('dotenv').config()

const getAllProduct = (req, res) => {
    pool.query(queries.getAllProducts, (error, results) => {
        if(error) {
            return res.status(200).json({
                results: []
            })
        }
        return res.status(200).json(results.rows)
    })
}

const getProductPageNo = (req, res) => {
    const body = req.body
    const pageNumber = body.pageno
    pool.query(queries.getAllProducts, (error, results) => {
        if(error) {
            return res.status(200).json({
                results: []
            })
        }
        const productList = results.rows
        const startingItem = (pageNumber - 1) * 12
        const endingItem = (pageNumber * 12)
        const paginatedResults = productList.slice(startingItem,endingItem)
        console.log(paginatedResults)
        return res.status(200).json({
            results: paginatedResults, totalProductSize: productList.length
        })
    })
}

const getProductSortedLowestHighest = (req, res) => {
    const body = req.body
    const pageNumber = body.pageno
    if(pageNumber === null) {
        pageNumber = 1
    }
    pool.query(queries.getProductSortedLowestHighest, (error, results) => {
        if(error) {
            return res.status(200).json({
                results: []
            })
        }
        const productList = results.rows
        const startingItem = (pageNumber - 1) * 12
        const endingItem = (pageNumber * 12)
        const paginatedResults = productList.slice(startingItem,endingItem)
        return res.status(200).json({
            results: paginatedResults, totalProductSize: productList.length
        })
    })
}

const getProductSortedHighestLowest = (req, res) => {
    const body = req.body
    const pageNumber = body.pageno
    if(pageNumber === null) {
        pageNumber = 1
    }
    pool.query(queries.getProductSortedHighestLowest, (error, results) => {
        if(error) {
            return res.status(200).json({
                results: []
            })
        }
        const productList = results.rows
        const startingItem = (pageNumber - 1) * 12
        const endingItem = (pageNumber * 12)
        const paginatedResults = productList.slice(startingItem,endingItem)
        return res.status(200).json({
            results: paginatedResults, totalProductSize: productList.length
        })
    })
}

const getProductByID = (req, res) => {
    const body = req.body
    const productID = body.productID
    pool.query(queries.getProductByID, [productID], (error, results) => {
        if(error) {
            return res.status(200).json({
                results: []
            })
        }
        return res.status(200).json({
            results: results.rows
        })
    })
}

const getProductByIDs = (req, res) => {
    const body = req.body
    var productIDs = body.productIDs
    var user_shopping_cart_list = JSON.parse(productIDs).sort()
    productIDs = productIDs.slice(0, -1).substring(1) 
    if(productIDs === "") {
        return res.status(200).json({
            results: []
        })
    }
    var query_getproductbyIDS = queries.getProductByIDs
    query_getproductbyIDS = query_getproductbyIDS.replace("$1", productIDs)
    pool.query(query_getproductbyIDS, (error, results) => {
        if(error) {
            return res.status(200).json({
                results: []
            })
        }
        var processedItemList = results.rows
        // var results = results.rows
        var counter = {}
        for(let i = 0; i < user_shopping_cart_list.length; i++) {
            if(user_shopping_cart_list[i] in counter) {
                counter[user_shopping_cart_list[i]] =  counter[user_shopping_cart_list[i]] + 1
            } else {
                counter[user_shopping_cart_list[i]] =  1
            }
        }
        console.log((counter))
        for(let i = 0; i < processedItemList.length; i++) {
            processedItemList[i]["quantity"] = counter[processedItemList[i].productid]
        }
        console.log(processedItemList)
        return res.status(200).json({
            results: processedItemList
        })
    })
}

// const getProductByID = (req, res) => {
//     const body = 
//     pool.query(queries.getProductByID, (error, results) => {
//         if(error) throw error;
//         res.status(200).json(results.rows)
//     })
// }

module.exports = {
    getAllProduct,
    getProductPageNo,
    getProductSortedLowestHighest,
    getProductSortedHighestLowest,
    getProductByID,
    getProductByIDs,
}