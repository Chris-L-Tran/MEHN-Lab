var passport = require("passport")

function getSignup(request, response) {
  response.render("signup.hbs", { message: request.flash('signupMessage') });
}

function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });
  return signupStrategy(request, response);
}

function getLogin(request, response) {
  response.render('login.hbs', { message: request.flash('loginMessage') });
}

function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });
  return loginProperty(request, response);
}

function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}

function secret(request, response){
  response.render("secret.hbs");
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
};