let model = require('../model/model');

const createCat = (req,res) => {
    let cat = req.body;
    model.insert(cat, (err, result) => {
    if(err) {
        res.json({statusCode: 400, message: err});
    } else {
        res.json({statusCode: 200, data: result, message: 'Cat successfully added'})''
    }
});
}

const getAllCats = (req,res) => {
    model.getAllCats((err, result) => {
        if(err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successful'});
        }
    });
}

module.exports = {createCat, getAllCats}
