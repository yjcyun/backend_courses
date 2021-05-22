const path = require('path');
const express = require('express');

const app = express();

// assign setting globally
app.set('view engine', 'pug'); // define which engine we'll use
app.set('views', 'views'); // define where html files are locationed in the 2nd parameter

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
