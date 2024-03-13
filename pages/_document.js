import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/nep8kox.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="drawer" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
