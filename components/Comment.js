export const Comment = (props) => {
  const {comment} = props
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="upvote">&#9652;</span>{ comment.user} {comment.time_ago} 
        <a href=""> [-]</a>
      </div>
      <div className="comment-text" dangerouslySetInnerHTML={{__html: comment.content}}></div>
      <a className="reply" href="">reply</a>
      

    <style jsx>{`
      .comment {
        padding-left: 18px; 
        font-size: 9pt;
        font-family: Verdana, Geneva, sans-serif;
      }

      .comment-header {
        font-size: 8pt;
        color: #828282;
      }

      .comment-header a {
        text-decoration: none;
      }

      .comment-text {
        padding-left: 16px;
      }

      .comment-text a {
        color: #000;
      }
  

      .reply {
        padding-left: 16px;
      }

      .reply {
        color: #000;
      }

  

      .upvote {
        color: grey;
        font-size: 14pt;
        margin: 2px;
      }
    `}</style>
    </div>

  )
}

export default Comment