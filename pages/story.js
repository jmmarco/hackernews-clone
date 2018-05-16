import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Comment from '../components/Comment'
import StoryList from '../components/StoryList'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const req = await fetch(`https://api.hackerwebapp.com/item/${query.id}`)
    const story = await req.json()
    return { story }
  }


  render() {
    console.log(this.props.story)
    const { story } = this.props
    const { comments, title } = story
    return (
      <Layout title={title}>
      <StoryList story={story} />

        <form action="">
          <input type="hidden"/>
          <textarea name="text" cols="60" rows="6"></textarea>
          <br/>
          <br/>
          <input type="submit" value="add comment"/>
        </form>
        <br/>
        <br/>

        {
          comments.map((comment) => (
            <Comment key={comment.user} comment={comment}/>
          ))
        }
        <style jsx>{`
          form {
            margin-bottom: 1em;
            padding-left: 20px;
          }
        
        `}
        </style>
      </Layout>
    )
  }
}