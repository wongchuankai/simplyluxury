const pool = require('../db/db')
const queries = require('../queries/queries')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth')

require('dotenv').config()

function hashPassword(password) {
    return bcrypt.hash(password, 10)
}

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SIMPLY_LUXURY_EMAIL,
      pass: process.env.SIMPLY_LUXURY_PASSWORD
    }
})

const emailSignUp = (req, res) => {
    const body = req.body
    const email = body.email
    var mailOptions = {
        from: process.env.SIMPLY_LUXURY_EMAIL,
        to: email,
        subject: 'Signing up to Simply Luxury',
        text: 'Thank you for signing up with us!'
    };
      
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        res.status(400).json({
            result: false,
            message: "error in signing up"
        })
    } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({
            result: true,
            message: "You have successfully sign up."
        })
    }
    });
}

const contactMsg = (req, res) => {
    const body = req.body
    const name = body.name
    const email = body.email
    const msg = body.msg
    // if()
    var mailOptions = {
        from: process.env.SIMPLY_LUXURY_EMAIL,
        to: email,
        subject: 'Get In Touch With Simply Luxury',
        text: `Dear, ${name}, Thank you for getting touch with us!`
    };
      
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        res.status(400).json({
            result: false,
            message: "error in signing up"
        })
    } else {
        console.log('Email sent: ' + info.response);
        var mailOptions = {
            from: process.env.SIMPLY_LUXURY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: 'Get In Touch With Simply Luxury',
            text: `${name}, ${email}, ${msg}`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.status(400).json({
                    result: false,
                    message: "error in signing up"
                })
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({
                    result: true,
                    message: "You have successfully sign up."
                })
            }
        });
    }
    });
}

const getAllProduct = (req, res) => {
    pool.query(queries.getAllProducts, (error, results) => {
        if(error) {
            console.log(error)

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
        // console.log(paginatedResults)
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
        // console.log((counter))
        for(let i = 0; i < processedItemList.length; i++) {
            processedItemList[i]["quantity"] = counter[processedItemList[i].productid]
        }
        console.log(processedItemList)
        return res.status(200).json({
            results: processedItemList
        })
    })
}

const newUser = async (req, res , next) => {
    console.log("FINAL")
    return res.json({
        message: 'Signup successful',
        user: req.user
    })
}

function createToken(userID, username) {
    const body = {
        userID: userID,
        username: username
    }
    const jwtToken = jwt.sign({
        user: body
    }, process.env.JWT_SECRET)
    return jwtToken
}

function usernameAlreadyExist(username) {
    return `Key (username)=(${username}) already exists.`
}

const signup = async (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password
    var hashedPassword = await hashPassword(password, 10)
    pool.query(queries.signUpQuery, [username, hashedPassword], (error, result) => {
        if(error) {
            if(usernameAlreadyExist(username) === error["detail"]) {
                return res.status(400).json({
                    success: false,
                    msg: "Username already taken"
                })    
            }
            return res.status(400).json({
                success: false,
                msg: "Error when signing up"
            })
        } 
        return res.status(200).json({
            success: true,
            msg: "Sign up successful"
        })
    })
}

const login = async (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password
    
    pool.query(queries.loginQueryUsername, [username], (error, result) => {
        if(error) {
            return res.status(400).json({
                success: false,
                msg: "Error when signing up"
            })
        } 
        if(result.rows.length === 0) {
            return res.status(200).json({
                success: false,
                msg: "Invalid username"
            })
        }
        const userResult = result.rows[0]
        bcrypt.compare(password, userResult.password, (err, data) => {
            if(err)  {
                return res.status(400).json({
                    success: false,
                    msg: "Error when signing up"
                })
            }
            if (data) {
                const token = createToken( userResult.userid ,username)
                return res.status(200).json({
                    success: true,
                    token: token,
                    msg: "Login successful",
                })
            } else {
                return res.status(401).json({ success: false, msg: "Wrong Password" })
            }
        })
    })
}

module.exports = {
    getAllProduct,
    getProductPageNo,
    getProductSortedLowestHighest,
    getProductSortedHighestLowest,
    getProductByID,
    getProductByIDs,
    emailSignUp,
    contactMsg,
    newUser,
    signup,
    login
}