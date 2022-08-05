const isLoggedIn = function isLoggedIn(req,res,next){
    req.user ? next() : res.status(401)
}

module.exports = isLoggedIn