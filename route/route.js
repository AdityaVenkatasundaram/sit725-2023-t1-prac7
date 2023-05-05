var express = require("express")

let router = express.Router();
let controller = require('../controller/controller');

router.post('/api/projects', (req, res) => {
    controller.createCat(req, res);
});

router.get('/api/projects',(req,res) => {
   controller.getAllCats(req, res);
});


module.exports = router;