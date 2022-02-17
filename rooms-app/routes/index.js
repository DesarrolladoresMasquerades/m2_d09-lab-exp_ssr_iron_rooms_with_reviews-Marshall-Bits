const router = require("express").Router();


/* GET home page */
router.get("/", (req, res, next) => {
  let notLogged = false
  if (!req.session.user) {
    notLogged = true
    res.render("index", { notLogged });
  }
  else {
    const username = req.session.user.fullName
    res.render("index", { notLogged, username })
  }
});

module.exports = router;
