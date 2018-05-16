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

          <header>
            <img src="/static/y18.gif" alt="YC Logo"/>
            <h1>Hacker News</h1>
            <ul className="menu">
              <li><a href="">new</a><span className="separator">|</span></li>
              <li><a href="">threads</a><span className="separator">|</span></li>
              <li><a href="">comments</a><span className="separator">|</span></li>
              <li><a href="">show</a><span className="separator">|</span></li>
              <li><a href="">ask</a><span className="separator">|</span></li>
              <li><a href="">jobs</a><span className="separator">|</span></li>
              <li><a href="">submit</a></li>
            </ul>
          </header>
        
          {this.props.children}

          <footer>
            <hr className="divider"/>
            <span className="yclinks">Guidelines | FAQ | Support | API | Security | Lists | Bookmarklet | Legal | Apply to YC | Contact</span>
            <form method="get" action="//hn.algolia.com/">
              <label htmlFor="">
                Search:
                <input type="text"/>
              </label>  
            </form>
          </footer>
        </div>

      <style jsx>{`
      .container {
        width: 90%;
        margin: auto;
        background-color: #f6f6ef;
      }
      img {
        width: 18px;
        height: 18px;
        border: 1px solid white;
        margin-right: 4px;
      }
      header {
        display: flex;
        background-color: rgb(255, 102, 0);
        line-height: 12pt;
        font-size: 12px;
        align-items: center;
        font-family: Verdana, Geneva, sans-serif;
        padding: 2px;
        
      }
      h1, h2 {
        margin: 0;
        font-size: 10pt;
        font-family: Verdana, Geneva, sans-serif;
      }


      ul {
        margin: 0;
        padding-left: 0;
      }

      ul li {
        display: inline;
        margin 0 5px; 0 5px;
      }

      ul li a {
        text-decoration: none;
        color: #000
      }

      .separator {
        margin-left: 4px;
      }

      footer {
        background-color: #f6f6ef;
        font-family: Verdana, Geneva, sans-serif;
        padding: 10px 0 10px 0;
        font-size: 8pt;
        color: #828282;
        text-align: center;
      }
      .divider {
        margin: 10px 0 10px 0;
        border: 0;
        height: 1px;
        // margin: 0;
        background-color: rgb(255, 102, 0);
      }
      .yclinks {
        margin-bottom: 20px;
      }

      form {
        margin-top: 20px;
      }
      
    `}</style>

      </div>

    )
  }
}