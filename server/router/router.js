const {Router} = require('express')
const controller = require('../controller/controller')
const router = Router()

router.get('/getallproducts', controller.getAllProduct)
router.post('/getproductsbypage', controller.getProductPageNo)
router.post('/getallproducts/price-asc', controller.getProductSortedLowestHighest)
router.post('/getallproducts/price-desc', controller.getProductSortedHighestLowest)
router.post('/getProductByID', controller.getProductByID)
router.post('/getProductByIDs', controller.getProductByIDs)
router.post('/emailsignup', controller.emailSignUp)

module.exports = router