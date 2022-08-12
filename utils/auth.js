// checks to see if a logged in before they can use certain app functionality
const checkAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = checkAuth;
