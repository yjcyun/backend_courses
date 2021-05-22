## Middlewares

Middlewares accept 3 arguments req, res, next. `next()` must be called to move on to the next middleware

```
app.use((req, res, next) => {
  console.log('In the middleWARE');
  next();
});
```

When handling routes with `app.use()`, `next()` should not be run

```
app.use('/add-product', (req, res, next) => {
  console.log('In the 2nd middleWARE');
  res.send('<h1>Add product page</h1>');
});
```

For routes, it's better to use `app.get()`, `app.post()` or any other HTTP request since `app.use()` accepts all incoming requests
