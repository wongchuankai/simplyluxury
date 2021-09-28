const getAllProducts = "Select * FROM productitem"
const getProductByID = "Select * FROM productitem WHERE productID = $1"
const getProductByIDs = "Select * FROM productitem WHERE productID IN ($1)"
const getProductSortedLowestHighest = "Select * FROM productitem ORDER BY price ASC"
const getProductSortedHighestLowest = "Select * FROM productitem ORDER BY price DESC"

module.exports = {
    getAllProducts,
    getProductByID,
    getProductByIDs,
    getProductSortedLowestHighest,
    getProductSortedHighestLowest
}