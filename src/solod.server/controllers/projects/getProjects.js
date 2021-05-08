const ProjectModel = require("../../models/project.js");

module.exports = async function getProjects(req, res) {
    ProjectModel.find({}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({messageerror: 'Error on find projects collection'});
        }

        res.json({data: data});
    })
};
