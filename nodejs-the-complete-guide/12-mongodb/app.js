const path = require('path');
const express = require('express');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

// SET VIEWS
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  User.findById('60b3b69546ff918893ae41b3')
    .then((user) => {
      req.user = new User(user.namem, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => console.log(err));
});

// ROUTES
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000, () => 'Server running on port 3000');
});
