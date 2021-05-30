const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
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
  User.findById('60b3e8620f78275a408ec60f')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

// ROUTES
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://christinayun:wVPoHoXGhxOfb13K@cluster0.qoxpr.mongodb.net/shop?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: 'Mars',
          email: 'mars@email.com',
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000, () => 'Server running on port 3000');
  })
  .catch((err) => console.log(err));
