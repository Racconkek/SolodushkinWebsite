const BiographyModel = require('../../models/biography.js');


module.exports = async function getBiography(req, res) {
    console.log(req.params);
    BiographyModel.find({}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({messageerror: 'Error on find conferences collection'});
        }
        res.json({data: data});
    })
}
