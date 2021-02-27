var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render("doitac", { data: {} });
});
router.get("/test", function(req, res) {
    res.render("doitac1", { data: {} });
});

module.exports = router;