import Head from 'next/head'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Apple Stuff */}
          <meta name="theme-color" content="#ff6600" />
          <link rel="apple-touch-icon" href="/static/icon.png" />
          <meta name="apple-mobile-web-app-title" content="Hacker News" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>

        <div className="container">
          {this.props.children}
        </div>

      <style jsx>{`
      .container {
        width: 90%;
        margin: auto;
      }
    `}</style>

      </div>

    )
  }
}