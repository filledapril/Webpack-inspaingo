/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/home.jpeg */ "./src/assets/home.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/info.jpeg */ "./src/assets/info.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Noto Sans SC', sans-serif;\n    font-size: 1.3125rem;\n}\n\nh1{\n    font-size: 2.5rem;\n    /* change */\n    font-weight: 700;\n    color: rbg(35, 35 ,85);\n}\n\nh2 {\n    font-size: 2rem;\n    /* change */\n    font-weight: 700;\n    color: rbg(35, 35 ,85);\n}\n\nspan {\n    font-family: 'Poppins', sans-serif;\n    font-size: .9rem;\n    color: #757373;\n}\n\nh6 {\n    font-size: 1.1rem;\n    color: rgb(24, 24, 49);\n}\n\np {\n    font-family: 'Noto Sans SC', sans-serif;\n    font-size: 1rem;\n}\n\n/* Navigation */\n\nnav {\n    position: fixed;\n    width: 100%;\n    background-color: #fff;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: .5vw 8vw;\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);\n    z-index: 99;\n}\n\nnav img {\n    width: 150px;\n    cursor: pointer;\n}\n\n#menu__toggle {\n    display: none;\n  }\n\nnav .navigation ul {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n\nnav .navigation ul li {\n    list-style: none;\n    margin-left: 30px;\n}\n\nnav .navigation ul .transfer-es {\n    margin-left: 10px;\n}\n\nnav .navigation ul li a {\n    text-decoration: none;\n    color: #232B2B;\n    font-size: 16px;\n    font-weight: 500;\n    transition: .3s ease;\n}\n\nnav .navigation ul .transfer-es a{\n    font-size: 18px;\n    color: #DC3D24;\n}\n\nnav .navigation ul li a:hover {\n    color: #E3AE57;\n}\n\nnav .navigation ul .transfer-es a:hover {\n    color: #232B2B;\n}\n\nnav .navigation ul li .red--hover:hover {\n    color: #DC3D24;\n}\n\n/* ------Home----------- */\n\n#home {\n    background-image: linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 100%;\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-top: 40px;\n}\n\n#home h2 {\n    color: #fff;\n    font-size: 2.2rem;\n    letter-spacing: 1px;\n}\n\n#home p {\n    width: 50%;\n    color: #fff;\n    font-size: .9rem;\n    line-height: 25px;\n\n}\n\n#home .btn {\n    margin-top: 30px;\n}\n\n#home a{\n    text-decoration: none;\n    font-size: .9rem;\n    padding: 13px 35px;\n    background-color: #fff;\n    font-weight: 600;\n    border-radius: 5px;\n}\n\n#home a.btn-red {\n    color: #fff;\n    background: #DC3D24;\n    transition: .3s ease;\n}\n\n#home a.btn-red:hover {\n    color: #E3AE57;\n    background: #fff;\n}\n\n#home a.btn-yellow {\n    color: #fff;\n    background: #E3AE57;\n    transition: .3s ease;\n}\n\n#home a.btn-yellow:hover {\n    color: #DC3D24;\n    background: #fff;\n}\n\n/* ----------Features---------- */\n\n#features {\n    padding: 5vw 8vw 0 8vw;\n    text-align: center;\n}\n\n#features .fea__cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    grid-gap: 1rem;\n    margin-top: 50px;\n}\n\n#features .fea__card {\n    background: #f9f9ff;\n    text-align: start;\n    padding: 2rem;\n}\n\n#features .fea__card i {\n    font-size: 2.3rem;\n    color: #DC3D24;\n}\n\n#features .fea__card h3 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: #232B2B;\n    padding: 13px 0 7px 0;\n}\n\n#features .fea__card p {\n    font-size: 1rem;\n    font-weight: 400;\n    color: #232B2B;\n}\n\n/* -----result----- */\n\n#result {\n    position: relative;\n    overflow: hidden;\n    padding: 20px;\n}\n\n.arrow-btn--pre,\n.arrow-btn--next {\n    border: none;\n    width: 10vw;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0)0%, #fff 100%);\n    cursor: pointer;\n    z-index: 9;\n}\n\n.arrow-btn--pre {\n    left: 0;\n}\n\n.arrow-btn--next {\n    right: 0;\n}\n\n.arrow-btn--pre i,\n.arrow-btn--next i {\n    font-size: 1rem;\n    opacity: .3;\n}\n\n.arrow-btn--pre:hover i,\n.arrow-btn--next:hover i \n{\n    opacity: 1;\n}\n\n.result-catagory {\n    position: relative;\n    padding: 0 10vw;\n    font-size: 30px;\n    font-weight: 500;\n    margin-bottom: 40px;\n    text-align: center;\n    font-family: 'Noto Sans SC', sans-serif;\n}\n.result-catagory::after {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(120deg, #DC3D24, #E3AE57);\n    width: 20%;\n    height: 4px;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%) skew(-50deg);\n\n}\n\n.result-container {\n    padding: 0 10vw;\n    display: flex;\n    overflow: auto;\n    scroll-behavior: smooth;\n}\n\n.result-container::-webkit-scrollbar {\n    display: none;\n}\n\n.result__card {\n    flex: 0 0 auto;\n    width: 200px;\n    height: 330px;\n    margin-right: 40px;\n}\n\n.result__card--image {\n    position: relative;\n    width: 100%;\n    height: 350px;\n    overflow: hidden;\n}\n\n.card-img {\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: cover;\n}\n\n.card-btn {\n    position: absolute;\n    color: #232B2B;\n    bottom: 40px;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 10px 5px;\n    width: 50%;\n    border: none;\n    outline: 4px solid #232B2B;\n    background: none;\n    border-radius: 10px;\n    transition: .5s ease;\n    cursor: pointer;\n    opacity: 0;\n}\n\n.result__card:hover .card-btn{\n    opacity: 1;\n}\n\n.card-btn:hover {\n    background: #DC3D24;\n    color: #fff;\n    outline: none;\n}\n\n\n/* --------services-------- */\n\n#service {\n    padding: 8vw 8vw 8vw 8vw;\n    text-align: center;\n}\n\n#service .service__cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    grid-gap: 1rem;\n    margin-top: 50px;\n}\n\n#service .service__card {\n    text-align: start;\n    background: #f9f9ff;\n    height: 100%;\n    position: relative;\n}\n\n#service .service__card:hover {\n    box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);\n}\n\n#service .service__card img {\n    width: 100%;\n    height: 60%;\n    background-size: cover;\n    background-position: center;\n}\n\n#service .service__card .details {\n    padding: 15px 15px 15px 15px;\n}\n\n.details-btn--lineone,\n.details-btn--linetwo\n{\n    margin-top: 7px;\n}\n\n.details-btn--lineone a{\n    text-decoration: none;\n    font-size: .3rem;\n    padding: .25rem .75rem;\n    color: #fff;\n    background-color: #E3AE57;\n    font-weight: 300;\n    border-radius: 10px;\n    transition: .3s ease;\n}\n\n.details-btn--lineone a:hover {\n    opacity: .75;\n    color: #232B2B;\n}\n\n.details-btn--linetwo a{\n    text-decoration: none;\n    font-size: .3rem;\n    padding: .25rem .75rem;\n    color: #fff;\n    background-color: #E3AE57;\n    font-weight: 300;\n    border-radius: 10px;\n}\n\n.details-btn--linetwo a:hover {\n    opacity: .75;\n    color: #232B2B;\n}\n\n#service .service__card .deco-tag {\n    background-color: #DC3D24;\n    color: #fff;\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.5rem;\n    line-height: 70px;\n    width: 70px;\n    height: 70px;\n    text-align: center;\n    border-radius: 50%;\n    position: absolute;\n    right: 15px;\n    bottom: 130px;\n}\n\n/* ------contact info------ */\n\n#info {\n    padding: 6vw 8vw 6vw 8vw;\n    background-image: linear-gradient(rgba(234, 203, 1, 0.3), rgba(112, 73, 50, 0.7)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: top;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#info .reminder {\n    color: #fff;\n}\n\n#info .reminder .time {\n    display: flex;\n    margin-top: 30px;\n}\n\n#info .reminder .time .date {\n    font-size: 1rem;\n    font-weight: 300;\n    text-align: center;\n    padding: 13px 33px;\n    background: rgba(255, 255, 255, 0.25);\n    backdrop-filter: blur(4px);\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n    border: 1px solid rgba(255, 255, 255, 0.25);\n    border-radius: 10px;\n    margin: 0 5px 10px 5px;\n}\n\n/* form version */\n#info .form {\n    width: 30%;\n    background: #fff;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    padding: 40px;\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n}\n\n#info .form input {\n    margin: 15px 0;\n    padding: 15px 10px;\n    border: 1px solid rgb(183, 44, 9);\n    outline: none;\n}\n\n#info .form input::placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #413c3c;\n    font-size: .9rem;\n    font-weight: 500;\n}\n\n/* reused btn style */\n#info a{\n    text-decoration: none;\n    font-size: .9rem;\n    padding: 13px 35px;\n    background-color: #fff;\n    font-weight: 600;\n    border-radius: 5px;\n}\n\n#info .form .btn {\n    margin-top: 20px;\n}\n\n#info a.btn-red {\n    color: #fff;\n    background: #DC3D24;\n    transition: .3s ease;\n}\n\n#info a.btn-red:hover {\n    color: #fff;\n    background: #E3AE57;\n}\n\n/* QRcode version */\n#info .qr-code {\n    width: 50%;\n    display: flex;\n    flex-direction: row;\n}\n\n#info .qr-code .code-card {\n    width: 40%;\n    background: #fff;\n    border-radius: 8px;\n    padding: 10px;\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n    position: relative;\n}\n\n#info .qr-code .code-card::before {\n    position: absolute;\n\ttop: 0;\n    left: 0%;\n\tz-index: 2;\n\tdisplay: block;\n\tcontent: '';\n\twidth: 20%;\n\theight: 100%;\n\tbackground: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\n\tbackground: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\n\t-webkit-transform: skewX(-20deg);\n\ttransform: skewX(-20deg);\n}\n\n#info .qr-code .code-card:hover::before {\n    -webkit-animation: shine .75s;\n\tanimation: shine .75s;\n}\n@-webkit-keyframes shine {\n\t100% {\n\t\tleft: 125%;\n\t}\n}\n@keyframes shine {\n\t100% {\n\t\tleft: 125%;\n\t}\n}\n\n.code-card + .code-card {\n    margin-left: 15px;\n}\n\n#info .qr-code .code-card img {\n    width: 100%;\n}\n\n\n\n/* ------Coopeation----- */\n\n#cooper {\n    padding: 8vw 8vw 8vw 8vw;\n    text-align: center;\n}\n\n#cooper .cooper-cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    grid-gap: 1rem;\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n\n#cooper .cooper-cards .cooper-card{\n    background: #fafaf1;\n    padding: 30px 10px;\n}\n\n#cooper .cooper-cards .cooper-card p {\n    font-size: .9rem;\n    text-align:justify;\n    margin: 5px 0 5px 0;\n}\n\n#cooper .cooper-card .cooper-card--uni{\n    width: 170px;\n    height: 170px;\n    border: 10px solid #f9f9ff;\n    border-radius: 50%;\n}\n\n#cooper .cooper-card .cooper-card--uni:hover{\n    opacity: 0.75;\n}\n\n#cooper .cooper-card .cooper-card--logo{\n    margin-top: 10px;\n    width: 150px;\n    height: 150px;\n    background: transparent;\n    cursor: pointer;\n    transition: all 0.6s;\n}\n\n#cooper .cooper-card--lan {\n    width: 100px;\n    max-width: 100%;\n    margin-top: 30px;\n}\n\n\n#cooper .cooper-card .cooper-card--logo:hover {\n    transform: scale(1.2);\n}\n\n/* ---Footer----- */\n\nfooter {\n    padding: 8vw;\n    background-color: #2b2523;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-wrap: wrap;\n}\n\nfooter .footer-col {\n    padding-bottom: 40px;\n}\n\nfooter h3 {\n    color: rgb(241, 240, 245);\n    font-size: 1.2rem;\n    font-weight: 600;\n    padding-bottom: 20px;\n}\n\nfooter li {\n    list-style: none;\n    padding: 10px 0;\n    font-size: .95rem;\n    cursor: pointer;\n    transition: .3s ease;\n}\n\nfooter li a:hover {\n    color: #f9f9ff;\n}\n\nfooter li a{\n    text-decoration: none;\n    color: #8a857b;\n}\n\nfooter img{\n    width: 100px;\n    border-radius: 15px;\n    transition: .3s ease;\n}\n\nfooter img:hover {\n    transform: scale(2);\n}\n\nfooter p {\n    color: #8a857b;\n    font-size: .9rem;\n    text-align:center;\n}\n\nfooter .ct-i {\n    margin: 0 1rem 0 0;\n}\n\n\nfooter .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    flex-wrap: wrap;\n}\n\nfooter .copyright p{\n    color: #413c3c;\n}\n\nfooter .cp-i {\n    color: #413c3c;\n    cursor: pointer;\n    transition: .3s ease;\n}\n\nfooter .cp-i:hover {\n    color: #fff;\n    cursor: pointer;\n}\n\n\n\n@media (max-width: 1180px) {\n\n    #features .fea__cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n        grid-gap: 1rem;\n        margin-top: 50px;\n    }\n\n    #cooper .cooper-cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n        grid-gap: 1rem;\n        margin-top: 50px;\n        margin-bottom: 50px;\n    }\n\n    #cooper .cooper-cards .cooper-card{\n        background: #fafaf1;\n        padding: 20px 30px;\n    }\n    \n}\n\n@media (max-width: 810px) {\n\n    nav img {\n        margin: 0 auto;\n        width: 120px;\n        cursor: pointer;\n    }\n\n    nav .navigation ul {\n        display: block;\n    }\n\n    nav .navigation ul li {\n        text-align: center;\n        margin: 0 auto;\n        padding-bottom: 20px;\n    }\n    \n    nav .navigation ul .transfer-es {\n        line-height: 0;\n        margin: 15px 0px;\n    }\n\n    nav .navigation ul .transfer-es a{\n        font-size: 25px;\n        color: #232B2B;\n    }\n    /* hamburger menu icon */\n      #menu__toggle:checked + .menu__btn > span {\n        transform: rotate(45deg);\n      }\n      #menu__toggle:checked + .menu__btn > span::before {\n        top: 0;\n        transform: rotate(0deg);\n      }\n      #menu__toggle:checked + .menu__btn > span::after {\n        top: 0;\n        transform: rotate(90deg);\n      }\n      #menu__toggle:checked ~ .menu__box {\n        right: 0 !important;\n      }\n      .menu__btn {\n        position: fixed;\n        top: 23px;\n        right: 35px;\n        width: 26px;\n        height: 26px;\n        cursor: pointer;\n        z-index: 1;\n      }\n      .menu__btn > span,\n      .menu__btn > span::before,\n      .menu__btn > span::after {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        background-color: #616161;\n        transition-duration: .25s;\n      }\n      .menu__btn > span::before {\n        content: '';\n        top: -8px;\n      }\n      .menu__btn > span::after {\n        content: '';\n        top: 8px;\n      }\n      .menu__box {\n        display: block;\n        position: fixed;\n        top: 0;\n        right: -100%;\n        width: 200px;\n        height: 100%;\n        margin: 0;\n        padding: 80px 0;\n        list-style: none;\n        background-color: #ECEFF1;\n        box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);\n        transition-duration: .25s;\n      }\n      .menu__item {\n        text-decoration: none;\n        transition-duration: .25s;\n      }\n\n      /* home */\n\n    #home h2 {\n        color: #fff;\n        font-size: 2rem;\n        letter-spacing: 1px;\n    }\n    \n    #home p {\n        width: 70%;\n        color: #fff;\n        font-size: .9rem;\n        line-height: 25px;\n    \n    }\n    \n    #home a{\n        text-decoration: none;\n        font-size: .9rem;\n        padding: 13px 35px;\n        background-color: #fff;\n        font-weight: 600;\n        border-radius: 5px;\n    }\n      \n      /* service */\n    #service .service__cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n        grid-gap: 1rem;\n    }\n\n    #service .service__card .details {\n        padding: 15px 20px;\n        margin: 0;\n    }\n\n    .details-btn--lineone a{\n        text-decoration: none;\n        font-size: 1rem;\n        padding: .25rem .75rem;\n        color: #fff;\n        background-color: #E3AE57;\n        font-weight: 300;\n        border-radius: 10px;\n    }\n\n    .details-btn--linetwo a{\n        text-decoration: none;\n        font-size: 1rem;\n        padding: .25rem .75rem;\n        color: #fff;\n        background-color: #E3AE57;\n        font-weight: 300;\n        border-radius: 10px;\n    }\n\n    #service .service__card .deco-tag {\n        background-color: #DC3D24;\n        color: #fff;\n        font-family: 'Poppins', sans-serif;\n        font-size: 2rem;\n        line-height: 100px;\n        width: 100px;\n        height: 100px;\n        text-align: center;\n        border-radius: 50%;\n        position: absolute;\n        right: 15px;\n        bottom: 150px;\n    }\n\n    #service .service__card img {\n        width: 100%;\n        height: 65%;\n        background-size: cover;\n        background-position: center;\n    }\n\n    /* info */\n\n    #info .qr-code{\n        display: none;\n    }\n\n    /* cooper */\n\n    #cooper .cooper-cards .cooper-card{\n        background: #fafaf1;\n        padding: 20px 50px;\n    }\n\n    #cooper .cooper-card .cooper-card--uni{\n        width: 230px;\n        height: 230px;\n        border: 10px solid #f9f9ff;\n        border-radius: 50%;\n    }\n\n    #cooper .cooper-card .cooper-card--logo{\n        margin-top: 7px;\n        width: 200px;\n        height: 200px;\n        background: transparent;\n        cursor: pointer;\n        transition: all 0.6s;\n    }\n\n    /* Hidden parts */\n\n    .section--none {\n        display: none;\n    }\n\n    .section--hidden {\n        visibility: hidden;\n    }\n\n}\n\n@media (max-width: 558px){\n\n    #features .fea__cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n        grid-gap: 1rem;\n        margin-top: 50px;\n    }\n\n}\n\n@media (max-width: 499px){\n\n    .result__card {\n        width: 100px;\n        height: 150px;\n    }\n\n    .result__card--image {\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n    #service h2 {\n        font-size: 25px;\n    }\n\n    #service .service__cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n        grid-gap: 1rem;\n    }\n\n    .details-btn--lineone,\n    .details-btn--linetwo {\n        margin: 1px 0 1px 0;\n    }\n\n    .details-btn--lineone a{\n        font-size: .3rem;\n        padding: .25rem .75rem;\n    }\n\n    .details-btn--linetwo a{\n        font-size: .3rem;\n        padding: .25rem .75rem;\n        margin-bottom: 20px;\n    }\n\n    .hidden-tag {\n        display: none;\n    }\n\n    #service .service__card .details {\n        padding-top: 0;\n    }\n\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Noto Sans SC', sans-serif;\n    font-size: 1.3125rem;\n}\n\nh1{\n    font-size: 2.5rem;\n    /* change */\n    font-weight: 700;\n    color: rbg(35, 35 ,85);\n}\n\nh2 {\n    font-size: 2rem;\n    /* change */\n    font-weight: 700;\n    color: rbg(35, 35 ,85);\n}\n\nspan {\n    font-family: 'Poppins', sans-serif;\n    font-size: .9rem;\n    color: #757373;\n}\n\nh6 {\n    font-size: 1.1rem;\n    color: rgb(24, 24, 49);\n}\n\np {\n    font-family: 'Noto Sans SC', sans-serif;\n    font-size: 1rem;\n}\n\n/* Navigation */\n\nnav {\n    position: fixed;\n    width: 100%;\n    background-color: #fff;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: .5vw 8vw;\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);\n    z-index: 99;\n}\n\nnav img {\n    width: 150px;\n    cursor: pointer;\n}\n\n#menu__toggle {\n    display: none;\n  }\n\nnav .navigation ul {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n\nnav .navigation ul li {\n    list-style: none;\n    margin-left: 30px;\n}\n\nnav .navigation ul .transfer-es {\n    margin-left: 10px;\n}\n\nnav .navigation ul li a {\n    text-decoration: none;\n    color: #232B2B;\n    font-size: 16px;\n    font-weight: 500;\n    transition: .3s ease;\n}\n\nnav .navigation ul .transfer-es a{\n    font-size: 18px;\n    color: #DC3D24;\n}\n\nnav .navigation ul li a:hover {\n    color: #E3AE57;\n}\n\nnav .navigation ul .transfer-es a:hover {\n    color: #232B2B;\n}\n\nnav .navigation ul li .red--hover:hover {\n    color: #DC3D24;\n}\n\n/* ------Home----------- */\n\n#home {\n    background-image: linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(\"../assets/home.jpeg\");\n    width: 100%;\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-top: 40px;\n}\n\n#home h2 {\n    color: #fff;\n    font-size: 2.2rem;\n    letter-spacing: 1px;\n}\n\n#home p {\n    width: 50%;\n    color: #fff;\n    font-size: .9rem;\n    line-height: 25px;\n\n}\n\n#home .btn {\n    margin-top: 30px;\n}\n\n#home a{\n    text-decoration: none;\n    font-size: .9rem;\n    padding: 13px 35px;\n    background-color: #fff;\n    font-weight: 600;\n    border-radius: 5px;\n}\n\n#home a.btn-red {\n    color: #fff;\n    background: #DC3D24;\n    transition: .3s ease;\n}\n\n#home a.btn-red:hover {\n    color: #E3AE57;\n    background: #fff;\n}\n\n#home a.btn-yellow {\n    color: #fff;\n    background: #E3AE57;\n    transition: .3s ease;\n}\n\n#home a.btn-yellow:hover {\n    color: #DC3D24;\n    background: #fff;\n}\n\n/* ----------Features---------- */\n\n#features {\n    padding: 5vw 8vw 0 8vw;\n    text-align: center;\n}\n\n#features .fea__cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    grid-gap: 1rem;\n    margin-top: 50px;\n}\n\n#features .fea__card {\n    background: #f9f9ff;\n    text-align: start;\n    padding: 2rem;\n}\n\n#features .fea__card i {\n    font-size: 2.3rem;\n    color: #DC3D24;\n}\n\n#features .fea__card h3 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: #232B2B;\n    padding: 13px 0 7px 0;\n}\n\n#features .fea__card p {\n    font-size: 1rem;\n    font-weight: 400;\n    color: #232B2B;\n}\n\n/* -----result----- */\n\n#result {\n    position: relative;\n    overflow: hidden;\n    padding: 20px;\n}\n\n.arrow-btn--pre,\n.arrow-btn--next {\n    border: none;\n    width: 10vw;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0)0%, #fff 100%);\n    cursor: pointer;\n    z-index: 9;\n}\n\n.arrow-btn--pre {\n    left: 0;\n}\n\n.arrow-btn--next {\n    right: 0;\n}\n\n.arrow-btn--pre i,\n.arrow-btn--next i {\n    font-size: 1rem;\n    opacity: .3;\n}\n\n.arrow-btn--pre:hover i,\n.arrow-btn--next:hover i \n{\n    opacity: 1;\n}\n\n.result-catagory {\n    position: relative;\n    padding: 0 10vw;\n    font-size: 30px;\n    font-weight: 500;\n    margin-bottom: 40px;\n    text-align: center;\n    font-family: 'Noto Sans SC', sans-serif;\n}\n.result-catagory::after {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(120deg, #DC3D24, #E3AE57);\n    width: 20%;\n    height: 4px;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%) skew(-50deg);\n\n}\n\n.result-container {\n    padding: 0 10vw;\n    display: flex;\n    overflow: auto;\n    scroll-behavior: smooth;\n}\n\n.result-container::-webkit-scrollbar {\n    display: none;\n}\n\n.result__card {\n    flex: 0 0 auto;\n    width: 200px;\n    height: 330px;\n    margin-right: 40px;\n}\n\n.result__card--image {\n    position: relative;\n    width: 100%;\n    height: 350px;\n    overflow: hidden;\n}\n\n.card-img {\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: cover;\n}\n\n.card-btn {\n    position: absolute;\n    color: #232B2B;\n    bottom: 40px;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 10px 5px;\n    width: 50%;\n    border: none;\n    outline: 4px solid #232B2B;\n    background: none;\n    border-radius: 10px;\n    transition: .5s ease;\n    cursor: pointer;\n    opacity: 0;\n}\n\n.result__card:hover .card-btn{\n    opacity: 1;\n}\n\n.card-btn:hover {\n    background: #DC3D24;\n    color: #fff;\n    outline: none;\n}\n\n\n/* --------services-------- */\n\n#service {\n    padding: 8vw 8vw 8vw 8vw;\n    text-align: center;\n}\n\n#service .service__cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    grid-gap: 1rem;\n    margin-top: 50px;\n}\n\n#service .service__card {\n    text-align: start;\n    background: #f9f9ff;\n    height: 100%;\n    position: relative;\n}\n\n#service .service__card:hover {\n    box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);\n}\n\n#service .service__card img {\n    width: 100%;\n    height: 60%;\n    background-size: cover;\n    background-position: center;\n}\n\n#service .service__card .details {\n    padding: 15px 15px 15px 15px;\n}\n\n.details-btn--lineone,\n.details-btn--linetwo\n{\n    margin-top: 7px;\n}\n\n.details-btn--lineone a{\n    text-decoration: none;\n    font-size: .3rem;\n    padding: .25rem .75rem;\n    color: #fff;\n    background-color: #E3AE57;\n    font-weight: 300;\n    border-radius: 10px;\n    transition: .3s ease;\n}\n\n.details-btn--lineone a:hover {\n    opacity: .75;\n    color: #232B2B;\n}\n\n.details-btn--linetwo a{\n    text-decoration: none;\n    font-size: .3rem;\n    padding: .25rem .75rem;\n    color: #fff;\n    background-color: #E3AE57;\n    font-weight: 300;\n    border-radius: 10px;\n}\n\n.details-btn--linetwo a:hover {\n    opacity: .75;\n    color: #232B2B;\n}\n\n#service .service__card .deco-tag {\n    background-color: #DC3D24;\n    color: #fff;\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.5rem;\n    line-height: 70px;\n    width: 70px;\n    height: 70px;\n    text-align: center;\n    border-radius: 50%;\n    position: absolute;\n    right: 15px;\n    bottom: 130px;\n}\n\n/* ------contact info------ */\n\n#info {\n    padding: 6vw 8vw 6vw 8vw;\n    background-image: linear-gradient(rgba(234, 203, 1, 0.3), rgba(112, 73, 50, 0.7)), url(\"../assets/info.jpeg\");\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: top;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#info .reminder {\n    color: #fff;\n}\n\n#info .reminder .time {\n    display: flex;\n    margin-top: 30px;\n}\n\n#info .reminder .time .date {\n    font-size: 1rem;\n    font-weight: 300;\n    text-align: center;\n    padding: 13px 33px;\n    background: rgba(255, 255, 255, 0.25);\n    backdrop-filter: blur(4px);\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n    border: 1px solid rgba(255, 255, 255, 0.25);\n    border-radius: 10px;\n    margin: 0 5px 10px 5px;\n}\n\n/* form version */\n#info .form {\n    width: 30%;\n    background: #fff;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    padding: 40px;\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n}\n\n#info .form input {\n    margin: 15px 0;\n    padding: 15px 10px;\n    border: 1px solid rgb(183, 44, 9);\n    outline: none;\n}\n\n#info .form input::placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #413c3c;\n    font-size: .9rem;\n    font-weight: 500;\n}\n\n/* reused btn style */\n#info a{\n    text-decoration: none;\n    font-size: .9rem;\n    padding: 13px 35px;\n    background-color: #fff;\n    font-weight: 600;\n    border-radius: 5px;\n}\n\n#info .form .btn {\n    margin-top: 20px;\n}\n\n#info a.btn-red {\n    color: #fff;\n    background: #DC3D24;\n    transition: .3s ease;\n}\n\n#info a.btn-red:hover {\n    color: #fff;\n    background: #E3AE57;\n}\n\n/* QRcode version */\n#info .qr-code {\n    width: 50%;\n    display: flex;\n    flex-direction: row;\n}\n\n#info .qr-code .code-card {\n    width: 40%;\n    background: #fff;\n    border-radius: 8px;\n    padding: 10px;\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n    position: relative;\n}\n\n#info .qr-code .code-card::before {\n    position: absolute;\n\ttop: 0;\n    left: 0%;\n\tz-index: 2;\n\tdisplay: block;\n\tcontent: '';\n\twidth: 20%;\n\theight: 100%;\n\tbackground: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\n\tbackground: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\n\t-webkit-transform: skewX(-20deg);\n\ttransform: skewX(-20deg);\n}\n\n#info .qr-code .code-card:hover::before {\n    -webkit-animation: shine .75s;\n\tanimation: shine .75s;\n}\n@-webkit-keyframes shine {\n\t100% {\n\t\tleft: 125%;\n\t}\n}\n@keyframes shine {\n\t100% {\n\t\tleft: 125%;\n\t}\n}\n\n.code-card + .code-card {\n    margin-left: 15px;\n}\n\n#info .qr-code .code-card img {\n    width: 100%;\n}\n\n\n\n/* ------Coopeation----- */\n\n#cooper {\n    padding: 8vw 8vw 8vw 8vw;\n    text-align: center;\n}\n\n#cooper .cooper-cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    grid-gap: 1rem;\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n\n#cooper .cooper-cards .cooper-card{\n    background: #fafaf1;\n    padding: 30px 10px;\n}\n\n#cooper .cooper-cards .cooper-card p {\n    font-size: .9rem;\n    text-align:justify;\n    margin: 5px 0 5px 0;\n}\n\n#cooper .cooper-card .cooper-card--uni{\n    width: 170px;\n    height: 170px;\n    border: 10px solid #f9f9ff;\n    border-radius: 50%;\n}\n\n#cooper .cooper-card .cooper-card--uni:hover{\n    opacity: 0.75;\n}\n\n#cooper .cooper-card .cooper-card--logo{\n    margin-top: 10px;\n    width: 150px;\n    height: 150px;\n    background: transparent;\n    cursor: pointer;\n    transition: all 0.6s;\n}\n\n#cooper .cooper-card--lan {\n    width: 100px;\n    max-width: 100%;\n    margin-top: 30px;\n}\n\n\n#cooper .cooper-card .cooper-card--logo:hover {\n    transform: scale(1.2);\n}\n\n/* ---Footer----- */\n\nfooter {\n    padding: 8vw;\n    background-color: #2b2523;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-wrap: wrap;\n}\n\nfooter .footer-col {\n    padding-bottom: 40px;\n}\n\nfooter h3 {\n    color: rgb(241, 240, 245);\n    font-size: 1.2rem;\n    font-weight: 600;\n    padding-bottom: 20px;\n}\n\nfooter li {\n    list-style: none;\n    padding: 10px 0;\n    font-size: .95rem;\n    cursor: pointer;\n    transition: .3s ease;\n}\n\nfooter li a:hover {\n    color: #f9f9ff;\n}\n\nfooter li a{\n    text-decoration: none;\n    color: #8a857b;\n}\n\nfooter img{\n    width: 100px;\n    border-radius: 15px;\n    transition: .3s ease;\n}\n\nfooter img:hover {\n    transform: scale(2);\n}\n\nfooter p {\n    color: #8a857b;\n    font-size: .9rem;\n    text-align:center;\n}\n\nfooter .ct-i {\n    margin: 0 1rem 0 0;\n}\n\n\nfooter .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    flex-wrap: wrap;\n}\n\nfooter .copyright p{\n    color: #413c3c;\n}\n\nfooter .cp-i {\n    color: #413c3c;\n    cursor: pointer;\n    transition: .3s ease;\n}\n\nfooter .cp-i:hover {\n    color: #fff;\n    cursor: pointer;\n}\n\n\n\n@media (max-width: 1180px) {\n\n    #features .fea__cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n        grid-gap: 1rem;\n        margin-top: 50px;\n    }\n\n    #cooper .cooper-cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n        grid-gap: 1rem;\n        margin-top: 50px;\n        margin-bottom: 50px;\n    }\n\n    #cooper .cooper-cards .cooper-card{\n        background: #fafaf1;\n        padding: 20px 30px;\n    }\n    \n}\n\n@media (max-width: 810px) {\n\n    nav img {\n        margin: 0 auto;\n        width: 120px;\n        cursor: pointer;\n    }\n\n    nav .navigation ul {\n        display: block;\n    }\n\n    nav .navigation ul li {\n        text-align: center;\n        margin: 0 auto;\n        padding-bottom: 20px;\n    }\n    \n    nav .navigation ul .transfer-es {\n        line-height: 0;\n        margin: 15px 0px;\n    }\n\n    nav .navigation ul .transfer-es a{\n        font-size: 25px;\n        color: #232B2B;\n    }\n    /* hamburger menu icon */\n      #menu__toggle:checked + .menu__btn > span {\n        transform: rotate(45deg);\n      }\n      #menu__toggle:checked + .menu__btn > span::before {\n        top: 0;\n        transform: rotate(0deg);\n      }\n      #menu__toggle:checked + .menu__btn > span::after {\n        top: 0;\n        transform: rotate(90deg);\n      }\n      #menu__toggle:checked ~ .menu__box {\n        right: 0 !important;\n      }\n      .menu__btn {\n        position: fixed;\n        top: 23px;\n        right: 35px;\n        width: 26px;\n        height: 26px;\n        cursor: pointer;\n        z-index: 1;\n      }\n      .menu__btn > span,\n      .menu__btn > span::before,\n      .menu__btn > span::after {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        background-color: #616161;\n        transition-duration: .25s;\n      }\n      .menu__btn > span::before {\n        content: '';\n        top: -8px;\n      }\n      .menu__btn > span::after {\n        content: '';\n        top: 8px;\n      }\n      .menu__box {\n        display: block;\n        position: fixed;\n        top: 0;\n        right: -100%;\n        width: 200px;\n        height: 100%;\n        margin: 0;\n        padding: 80px 0;\n        list-style: none;\n        background-color: #ECEFF1;\n        box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);\n        transition-duration: .25s;\n      }\n      .menu__item {\n        text-decoration: none;\n        transition-duration: .25s;\n      }\n\n      /* home */\n\n    #home h2 {\n        color: #fff;\n        font-size: 2rem;\n        letter-spacing: 1px;\n    }\n    \n    #home p {\n        width: 70%;\n        color: #fff;\n        font-size: .9rem;\n        line-height: 25px;\n    \n    }\n    \n    #home a{\n        text-decoration: none;\n        font-size: .9rem;\n        padding: 13px 35px;\n        background-color: #fff;\n        font-weight: 600;\n        border-radius: 5px;\n    }\n      \n      /* service */\n    #service .service__cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n        grid-gap: 1rem;\n    }\n\n    #service .service__card .details {\n        padding: 15px 20px;\n        margin: 0;\n    }\n\n    .details-btn--lineone a{\n        text-decoration: none;\n        font-size: 1rem;\n        padding: .25rem .75rem;\n        color: #fff;\n        background-color: #E3AE57;\n        font-weight: 300;\n        border-radius: 10px;\n    }\n\n    .details-btn--linetwo a{\n        text-decoration: none;\n        font-size: 1rem;\n        padding: .25rem .75rem;\n        color: #fff;\n        background-color: #E3AE57;\n        font-weight: 300;\n        border-radius: 10px;\n    }\n\n    #service .service__card .deco-tag {\n        background-color: #DC3D24;\n        color: #fff;\n        font-family: 'Poppins', sans-serif;\n        font-size: 2rem;\n        line-height: 100px;\n        width: 100px;\n        height: 100px;\n        text-align: center;\n        border-radius: 50%;\n        position: absolute;\n        right: 15px;\n        bottom: 150px;\n    }\n\n    #service .service__card img {\n        width: 100%;\n        height: 65%;\n        background-size: cover;\n        background-position: center;\n    }\n\n    /* info */\n\n    #info .qr-code{\n        display: none;\n    }\n\n    /* cooper */\n\n    #cooper .cooper-cards .cooper-card{\n        background: #fafaf1;\n        padding: 20px 50px;\n    }\n\n    #cooper .cooper-card .cooper-card--uni{\n        width: 230px;\n        height: 230px;\n        border: 10px solid #f9f9ff;\n        border-radius: 50%;\n    }\n\n    #cooper .cooper-card .cooper-card--logo{\n        margin-top: 7px;\n        width: 200px;\n        height: 200px;\n        background: transparent;\n        cursor: pointer;\n        transition: all 0.6s;\n    }\n\n    /* Hidden parts */\n\n    .section--none {\n        display: none;\n    }\n\n    .section--hidden {\n        visibility: hidden;\n    }\n\n}\n\n@media (max-width: 558px){\n\n    #features .fea__cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n        grid-gap: 1rem;\n        margin-top: 50px;\n    }\n\n}\n\n@media (max-width: 499px){\n\n    .result__card {\n        width: 100px;\n        height: 150px;\n    }\n\n    .result__card--image {\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n    #service h2 {\n        font-size: 25px;\n    }\n\n    #service .service__cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n        grid-gap: 1rem;\n    }\n\n    .details-btn--lineone,\n    .details-btn--linetwo {\n        margin: 1px 0 1px 0;\n    }\n\n    .details-btn--lineone a{\n        font-size: .3rem;\n        padding: .25rem .75rem;\n    }\n\n    .details-btn--linetwo a{\n        font-size: .3rem;\n        padding: .25rem .75rem;\n        margin-bottom: 20px;\n    }\n\n    .hidden-tag {\n        display: none;\n    }\n\n    #service .service__card .details {\n        padding-top: 0;\n    }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/gzh.png":
/*!****************************!*\
  !*** ./src/assets/gzh.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "gzh.png";

/***/ }),

/***/ "./src/assets/home.jpeg":
/*!******************************!*\
  !*** ./src/assets/home.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home.jpeg";

/***/ }),

/***/ "./src/assets/info.jpeg":
/*!******************************!*\
  !*** ./src/assets/info.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "info.jpeg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/r1.jpeg":
/*!****************************!*\
  !*** ./src/assets/r1.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "r1.jpeg";

/***/ }),

/***/ "./src/assets/r2.png":
/*!***************************!*\
  !*** ./src/assets/r2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "r2.png";

/***/ }),

/***/ "./src/assets/r3.jpeg":
/*!****************************!*\
  !*** ./src/assets/r3.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "r3.jpeg";

/***/ }),

/***/ "./src/assets/r4.png":
/*!***************************!*\
  !*** ./src/assets/r4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "r4.png";

/***/ }),

/***/ "./src/assets/r5.jpeg":
/*!****************************!*\
  !*** ./src/assets/r5.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "r5.jpeg";

/***/ }),

/***/ "./src/assets/r6.jpeg":
/*!****************************!*\
  !*** ./src/assets/r6.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "r6.jpeg";

/***/ }),

/***/ "./src/assets/r7.jpeg":
/*!****************************!*\
  !*** ./src/assets/r7.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "r7.jpeg";

/***/ }),

/***/ "./src/assets/s1.jpeg":
/*!****************************!*\
  !*** ./src/assets/s1.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "s1.jpeg";

/***/ }),

/***/ "./src/assets/s2.jpeg":
/*!****************************!*\
  !*** ./src/assets/s2.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "s2.jpeg";

/***/ }),

/***/ "./src/assets/s3.jpeg":
/*!****************************!*\
  !*** ./src/assets/s3.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "s3.jpeg";

/***/ }),

/***/ "./src/assets/s4.jpeg":
/*!****************************!*\
  !*** ./src/assets/s4.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "s4.jpeg";

/***/ }),

/***/ "./src/assets/s5.jpeg":
/*!****************************!*\
  !*** ./src/assets/s5.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "s5.jpeg";

/***/ }),

/***/ "./src/assets/s6.jpeg":
/*!****************************!*\
  !*** ./src/assets/s6.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "s6.jpeg";

/***/ }),

/***/ "./src/assets/uab.jpeg":
/*!*****************************!*\
  !*** ./src/assets/uab.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "uab.jpeg";

/***/ }),

/***/ "./src/assets/ucm.jpeg":
/*!*****************************!*\
  !*** ./src/assets/ucm.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ucm.jpeg";

/***/ }),

/***/ "./src/assets/unilogo.png":
/*!********************************!*\
  !*** ./src/assets/unilogo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unilogo.png";

/***/ }),

/***/ "./src/assets/upc.jpeg":
/*!*****************************!*\
  !*** ./src/assets/upc.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "upc.jpeg";

/***/ }),

/***/ "./src/assets/upm.jpeg":
/*!*****************************!*\
  !*** ./src/assets/upm.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "upm.jpeg";

/***/ }),

/***/ "./src/assets/wechat.png":
/*!*******************************!*\
  !*** ./src/assets/wechat.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wechat.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_r1_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/r1.jpeg */ "./src/assets/r1.jpeg");
/* harmony import */ var _assets_r2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/r2.png */ "./src/assets/r2.png");
/* harmony import */ var _assets_r3_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/r3.jpeg */ "./src/assets/r3.jpeg");
/* harmony import */ var _assets_r4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/r4.png */ "./src/assets/r4.png");
/* harmony import */ var _assets_r5_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/r5.jpeg */ "./src/assets/r5.jpeg");
/* harmony import */ var _assets_r6_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/r6.jpeg */ "./src/assets/r6.jpeg");
/* harmony import */ var _assets_r7_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/r7.jpeg */ "./src/assets/r7.jpeg");
/* harmony import */ var _assets_s1_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/s1.jpeg */ "./src/assets/s1.jpeg");
/* harmony import */ var _assets_s2_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/s2.jpeg */ "./src/assets/s2.jpeg");
/* harmony import */ var _assets_s3_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/s3.jpeg */ "./src/assets/s3.jpeg");
/* harmony import */ var _assets_s4_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/s4.jpeg */ "./src/assets/s4.jpeg");
/* harmony import */ var _assets_s5_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/s5.jpeg */ "./src/assets/s5.jpeg");
/* harmony import */ var _assets_s6_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/s6.jpeg */ "./src/assets/s6.jpeg");
/* harmony import */ var _assets_wechat_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/wechat.png */ "./src/assets/wechat.png");
/* harmony import */ var _assets_gzh_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/gzh.png */ "./src/assets/gzh.png");
/* harmony import */ var _assets_unilogo_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/unilogo.png */ "./src/assets/unilogo.png");
/* harmony import */ var _assets_uab_jpeg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/uab.jpeg */ "./src/assets/uab.jpeg");
/* harmony import */ var _assets_upc_jpeg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/upc.jpeg */ "./src/assets/upc.jpeg");
/* harmony import */ var _assets_ucm_jpeg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/ucm.jpeg */ "./src/assets/ucm.jpeg");
/* harmony import */ var _assets_upm_jpeg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/upm.jpeg */ "./src/assets/upm.jpeg");





















 // logo

var logoImg = document.getElementById('logo');
logoImg.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__; // result img

var resultImg1 = document.getElementById('r1');
resultImg1.src = _assets_r1_jpeg__WEBPACK_IMPORTED_MODULE_2__;
var resultImg2 = document.getElementById('r2');
resultImg2.src = _assets_r2_png__WEBPACK_IMPORTED_MODULE_3__;
var resultImg3 = document.getElementById('r3');
resultImg3.src = _assets_r3_jpeg__WEBPACK_IMPORTED_MODULE_4__;
var resultImg4 = document.getElementById('r4');
resultImg4.src = _assets_r4_png__WEBPACK_IMPORTED_MODULE_5__;
var resultImg5 = document.getElementById('r5');
resultImg5.src = _assets_r5_jpeg__WEBPACK_IMPORTED_MODULE_6__;
var resultImg6 = document.getElementById('r6');
resultImg6.src = _assets_r6_jpeg__WEBPACK_IMPORTED_MODULE_7__;
var resultImg7 = document.getElementById('r7');
resultImg7.src = _assets_r7_jpeg__WEBPACK_IMPORTED_MODULE_8__; //result function

var resultContainers = document.querySelectorAll('div.result-container');
var nextBtn = document.querySelectorAll('.arrow-btn--next');
var preBtn = document.querySelectorAll('.arrow-btn--pre');
resultContainers.forEach(function (container, i) {
  var containerDimensions = container.getBoundingClientRect();
  var containerWidth = containerDimensions.width;
  nextBtn[i].addEventListener('click', function () {
    container.scrollLeft += containerWidth / 2;
  });
  preBtn[i].addEventListener('click', function () {
    container.scrollLeft -= containerWidth / 2;
  });
}); //service img

var serviceImg1 = document.getElementById('s1');
serviceImg1.src = _assets_s1_jpeg__WEBPACK_IMPORTED_MODULE_9__;
var serviceImg2 = document.getElementById('s2');
serviceImg2.src = _assets_s2_jpeg__WEBPACK_IMPORTED_MODULE_10__;
var serviceImg3 = document.getElementById('s3');
serviceImg3.src = _assets_s3_jpeg__WEBPACK_IMPORTED_MODULE_11__;
var serviceImg4 = document.getElementById('s4');
serviceImg4.src = _assets_s4_jpeg__WEBPACK_IMPORTED_MODULE_12__;
var serviceImg5 = document.getElementById('s5');
serviceImg5.src = _assets_s5_jpeg__WEBPACK_IMPORTED_MODULE_13__;
var serviceImg6 = document.getElementById('s6');
serviceImg6.src = _assets_s6_jpeg__WEBPACK_IMPORTED_MODULE_14__; //info function

var locations = document.querySelectorAll('div.times div');

var updateTimes = function updateTimes() {
  locations.forEach(function (location) {
    var output = location.querySelector('output');
    var timeZone = location.getAttribute('data-timezone');
    var now = luxon.DateTime.now().setZone(timeZone);
    output.innerHTML = now.toFormat('HH:mm a');
  });
};

updateTimes();
setInterval(function () {
  updateTimes();
}, 1000); //info img

var wechatQRImg = document.getElementById('wechatQR');
wechatQRImg.src = _assets_wechat_png__WEBPACK_IMPORTED_MODULE_15__;
var gzhQRImg = document.getElementById('gzhQR');
gzhQRImg.src = _assets_gzh_png__WEBPACK_IMPORTED_MODULE_16__; //cooperation img

var uniLogoImg1 = document.getElementById('uni-logo1');
uniLogoImg1.src = _assets_unilogo_png__WEBPACK_IMPORTED_MODULE_17__;
var uniLogoImg2 = document.getElementById('uni-logo2');
uniLogoImg2.src = _assets_unilogo_png__WEBPACK_IMPORTED_MODULE_17__;
var uniLogoImg3 = document.getElementById('uni-logo3');
uniLogoImg3.src = _assets_unilogo_png__WEBPACK_IMPORTED_MODULE_17__;
var uniLogoImg4 = document.getElementById('uni-logo4');
uniLogoImg4.src = _assets_unilogo_png__WEBPACK_IMPORTED_MODULE_17__;
var uniImg1 = document.getElementById('u1');
uniImg1.src = _assets_uab_jpeg__WEBPACK_IMPORTED_MODULE_18__;
var uniImg2 = document.getElementById('u2');
uniImg2.src = _assets_upc_jpeg__WEBPACK_IMPORTED_MODULE_19__;
var uniImg3 = document.getElementById('u3');
uniImg3.src = _assets_ucm_jpeg__WEBPACK_IMPORTED_MODULE_20__;
var uniImg4 = document.getElementById('u4');
uniImg4.src = _assets_upm_jpeg__WEBPACK_IMPORTED_MODULE_21__;
var footerImg1 = document.getElementById('footer-qr1');
footerImg1.src = _assets_wechat_png__WEBPACK_IMPORTED_MODULE_15__;
var footerImg2 = document.getElementById('footer-qr2');
footerImg2.src = _assets_gzh_png__WEBPACK_IMPORTED_MODULE_16__;
})();

/******/ })()
;
//# sourceMappingURL=bundle4d6fe52a76190c91d7c7.js.map