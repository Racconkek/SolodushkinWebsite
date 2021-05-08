const BiographyModel = require('../../models/biography.js');


module.exports = async function getBiographyPartByName(req, res) {
    const paramsName = req.params.name;
    BiographyModel.findOne({name: paramsName}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({messageerror: 'Error on find conferences collection'});
        }
        res.json({data: data});
    })
}
