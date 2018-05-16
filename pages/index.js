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


        <main>
          {
            stories.map((story, i) => (
              <StoryList key={story.id} story={story} index={i+1}/>
            ))
          }
        </main>


      </Layout>
    )
  }
 }