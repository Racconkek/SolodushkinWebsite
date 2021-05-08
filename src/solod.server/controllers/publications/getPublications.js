const PublicationModel = require('../../models/publication.js');

module.exports = async function getPublications(req, res) {
    PublicationModel.find({}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({messageerror: 'Error on find publications collection'});
        }
        res.json({data: data});
    })
}
