exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get('Cookie').split('=')[1];

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn,
  });
};

// sensitive data like authentication should not be stored on client side because it can easily be manipulated
// tracking user can use cookies to store data. (How long user can stay logged in)
// recommend using a library to handle cookies
exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');
  res.redirect('/');
};
