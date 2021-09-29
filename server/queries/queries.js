const getAllProducts = "Select * FROM productitem"
const getProductByID = "Select * FROM productitem WHERE productID = $1"
const getProductByIDs = "Select * FROM productitem WHERE productID IN ($1)"
const getProductSortedLowestHighest = "Select * FROM productitem ORDER BY price ASC"
const getProductSortedHighestLowest = "Select * FROM productitem ORDER BY price DESC"
const signUpQuery = "INSERT INTO users(username, password) VALUES($1, $2)"
const loginQueryUsername = "SELECT * FROM users WHERE username = $1"
const loginQueryPassword = "SELECT * FROM users WHERE username = $1 AND password = $2"

// const loginQuery = ""

module.exports = {
    getAllProducts,
    getProductByID,
    getProductByIDs,
    getProductSortedLowestHighest,
    getProductSortedHighestLowest,
    signUpQuery,
    loginQueryUsername,
    loginQueryPassword

}