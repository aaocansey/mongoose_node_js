const express = require('express');
const {body} = require('express-validator');
const {createStdConntroller, viewStdController, updateStdController, deleteStdController} = require('../controllers/controllers');
const router = express.Router()
const isAuth = require('../middlewares/is_Auth');



// create
router.post("/stdapp",isAuth,body('name').trim().not().isEmpty(),createStdConntroller);
// retrieve
router.get("/stdapp/:id?", isAuth ,viewStdController);
// // update
router.put("/stdapp", updateStdController);
// // delete
router.delete("/stdapp", deleteStdController);


module.exports = router
