const ConferenceModel = require('../../models/conference.js');

module.exports = async function getConferences(req, res) {
    ConferenceModel.find({}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({messageerror: 'Error on find conferences collection'});
        }
        res.json({data: data});
    })
};
