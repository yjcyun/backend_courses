const express = require('express');
const placesRoutes = require('./routes/places-routes');

const app = express();

app.use(express.json());
app.use('/api/places', placesRoutes);
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({
    message: error.message || 'An unknown error occurred',
  });
});

app.listen(5000, () => console.log('Server listening on port 5000'));
