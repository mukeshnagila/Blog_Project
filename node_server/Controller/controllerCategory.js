const Alldata = require("../Store/DataStore")

const Controller = (req,res) => {
    return res.send(Alldata);
}

module.exports = Controller;