import StoryList from '../components/StoryList'
import Layout from '../components/Layout'
import 'isomorphic-fetch'


export default class extends React.Component {

  static async getInitialProps() {
    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const stories = await req.json()
    return {
      stories
    }
  }


  render() {
    const { stories } = this.props
    return (
      <Layout title="Latest News">
        <header>
          <img src="/static/y18.gif" alt="YC Logo"/>
          <h1>Hacker News</h1>
          <ul className="menu">
            <li><a href="">new</a><span className="separator">|</span></li>
            <li><a href="">comments</a><span className="separator">|</span></li>
            <li><a href="">show</a><span className="separator">|</span></li>
            <li><a href="">ask</a><span className="separator">|</span></li>
            <li><a href="">jobs</a><span className="separator">|</span></li>
            <li><a href="">submit</a></li>
          </ul>
        </header>

        <main>
          {
            stories.map((story, i) => (
              <StoryList key={story.id} story={story} index={i+1}/>
            ))
          }
        </main>

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

          <style jsx>{`

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
              font-size: 12px;
              font-family: sans-serif;
            }

            a {
              text-decoration: none;
            }

            ul {
              margin: 0;
              padding-left: 0;
            }

            ul li {
              display: inline;
              margin 0 5px; 0 5px;
            }

            .separator {
              margin-left: 4px;
            }

            main, footer {
              background-color: #f6f6ef;
              font-family: Verdana, Geneva, sans-serif;
            }

            footer {
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



          `}

          </style>


      </Layout>
    )
  }
 }