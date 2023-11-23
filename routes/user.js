
const { Router } = require('express')
const adminSchema = require('../models/admin-schema')
let express = require('express')
const usercontroller = require('../controller/usercontroller')
let router = express.Router()
let controller = require('../controller/usercontroller')
let  checkUser = require('../controller/userAunth')
let userSchema= require('../models/user-schema')
const { URLSearchParams } = require('url')

router.get('/',controller.sessionHandeler)
router.get('/logout',(req,res)=>{
     req.session.loggedin = false
     res.redirect('/')
})
router.get('/register',(req,res)=>{

    res.render('users/signup')    
})
router.get('/loginPage',checkUser.checkUser,controller.loginPageView)
router.post('/sighup',controller.adding)
router.post('/otp',controller.otpChecker)
router.post('/otplogin',controller.otploginChecker)
router.post('/login',controller.loginChecker)
router.get('/accountView',checkUser.checkUser,controller.cartCountChecker,controller.accountView)
router.get('/payementVerify',checkUser.checkUser,controller.cartCountChecker,controller.paymentStatusChanger,controller.accountView)

router.get('/index-2',controller.sessionHandeler)
router.get('/checkout',checkUser.checkUser,controller.checkoutProductViewer)
router.get('/contact',(req,res)=>{
    res.render('users/contact')
})
router.get('/elements',(req,res)=>{
    res.render('users/elements')
})
router.get('/categories',controller.cartCountChecker,controller.productAdder)
router.get('/pro-details',controller.cartCountChecker,controller.productViewer)
router.get('/cart',checkUser.checkUser,controller.cartCountChecker,controller.cartCountChecker,controller.showCart)
router.post ('/cartAdding',checkUser.checkUser,controller.cartCountChecker,controller.cartAdder)
router.get ('/plus',checkUser.checkUser,controller.cartCountChecker,controller.quantityPlus)
router.get('/dic',checkUser.checkUser,controller.cartCountChecker,controller.quantityDic)
router.get('/deleteCart', checkUser.checkUser,controller.cartCountChecker, controller.cartDeleting)
router.post('/adress',checkUser.checkUser,controller.cartCountChecker,controller.adressAdder)
router.get('/resend',controller.cartCountChecker,controller.resendOtp)
router.get('/resendloginEmailVerificationOtp',controller.cartCountChecker,controller.forgotPasswordResendOtp)
router.get('/resendlogin',controller.cartCountChecker,controller.resendOtpLogin)
router.post('/order',checkUser.checkUser,controller.cartCountChecker,controller.orderDetails)
router.post('/deleteOrder',checkUser.checkUser,controller.cartCountChecker,controller.orderDelete)
router.get('/deleteAddress',checkUser.checkUser,controller.cartCountChecker,controller.adressDelete)
router.post('/search',controller.cartCountChecker,controller.searching)
router.post('/priceChange',controller.cartCountChecker,controller.priceCategoryChange)
router.post('/categorychange',controller.cartCountChecker,controller.categoryChange)
router.get('/returnOrder', checkUser.checkUser,controller.cartCountChecker,controller.orderReturn)
router.post('/applyCoupen',checkUser.checkUser,controller.cartCountChecker,controller.ApplyCode)
router.get('/orderHistroy',checkUser.checkUser,controller.cartCountChecker,controller.orderHistoryShow)
router.get('/forgotPassword',controller.cartCountChecker,controller.forgotPasswordEmailPageShow)
router.post('/forgotEmailVerify',controller.cartCountChecker,controller.forgotPasswordEmailVerify)
router.post('/emailVerificationOtp',controller.cartCountChecker,controller.forgotPasswordEmailOtpVerify)
router.post('/ChangePassword',controller.cartCountChecker,controller.NewPasswordChange)
router.post('/showProductDetails',checkUser.checkUser,controller.cartCountChecker,controller.showOrderProductDetail)
router.get('/profileEdit',checkUser.checkUser,controller.cartCountChecker,controller.profileEditPageShow)
router.post('/ChangeProfile',checkUser.checkUser,controller.cartCountChecker,controller.profileEditApply)

module.exports = router