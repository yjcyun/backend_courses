const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split('=')[1];

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('60b3e8620f78275a408ec60f')
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};

// exports.postLogin = (req, res, next) => {
//   res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');
//   res.redirect('/');
// };

// sensitive data like authentication should not be stored on client side because it can easily be manipulated
// tracking user can use cookies to store data. (How long user can stay logged in)
// recommend using a library to handle cookies

// store information in session which occurs on the server level
// store the ID of session as a cookie in the frontend

// can connect to mongodb to store sessions
