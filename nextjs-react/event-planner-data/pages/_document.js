import Document, { Html, Head, Main, NextScript } from 'next/document';
// not the same Head component from 'next/head'

// must be class based component
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <div id='overlays'></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
