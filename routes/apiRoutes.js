// var index = require("../public/index.html");



module.exports = function(app) {
    app.get("/api/index", function(req, res) {
        res.json(index)
    });


}