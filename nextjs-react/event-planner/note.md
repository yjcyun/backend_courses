Static generation

- pre-generate a page(with data prepared on the server-side) during build time
- pages are prepared ahead of time and can be cached by the server/CDN serving the app

Any code within this function will never be exposed on the client side
`export async function getyStaticProps(context){...}`
