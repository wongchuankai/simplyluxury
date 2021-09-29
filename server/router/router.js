const {Router} = require('express')
const controller = require('../controller/controller')
const passport = require('passport');
const router = Router()

router.get('/getallproducts', controller.getAllProduct)
router.post('/getproductsbypage', controller.getProductPageNo)
router.post('/getallproducts/price-asc', controller.getProductSortedLowestHighest)
router.post('/getallproducts/price-desc', controller.getProductSortedHighestLowest)
router.post('/getProductByID', controller.getProductByID)
router.post('/getProductByIDs', controller.getProductByIDs)
router.post('/emailsignup', controller.emailSignUp)
router.post('/contactMsg', controller.contactMsg)

router.post('/signup', controller.signup)
router.post('/login', controller.login)

// router.post('/signup', passport.authenticate('signup', { session: false}), controller.newUser)

// router.post(
//     '/login',
//     async (req, res, next) => {
//       passport.authenticate(
//         'login',
//         async (err, user, info) => {
//           try {
//             if (err || !user) {
//               const error = new Error('An error occurred.');
  
//               return next(error);
//             }
//             req.login(
//               user,
//               { session: false },
//               async (error) => {
//                 if (error) return next(error);
  
//                 const body = { _id: user._id, email: user.email };
//                 const token = jwt.sign({ user: body }, 'TOP_SECRET');
  
//                 return res.json({ token });
//               }
//             );
//           } catch (error) {
//             return next(error);
//           }
//         }
//       )(req, res, next);
//     }
//   );
  
module.exports = router