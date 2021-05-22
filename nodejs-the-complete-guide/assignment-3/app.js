const express = require('express');
const path = require('path');
const app = express();

const homeRoutes = require('./routes/home-route');
const userRoutes = require('./routes/users-route');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use(userRoutes);

app.listen(3000, () => console.log('Server listening on port 3000'));
