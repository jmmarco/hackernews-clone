import Link from 'next/link'

export const StoryList = (props) => {
  console.log(props)
  const { story, index } = props
  const {points, user, comments_count, time_ago, domain, url} = story
  const commentUrl = `${url}`

  return (
    <div className="story">
      {index && <span className="index">{index}.</span>}
      <span className="upvote">&#9652;</span>
      <a href={story.url}>
        <h2>{story.title}</h2>
        <span className="domain"> {domain && `(${domain})` }</span>
      </a>
      <div className="story-info">
        {points} points by {user} {time_ago} ago | <a href="#">hide</a> | <Link prefetch href={`/story?id=${story.id}`}><a>{comments_count === 0 ? `discuss` : `${comments_count} comments`}</a></Link>
      </div>
      <style jsx>{`
        .story {
          margin: 0;
          padding: 0 5px 5px 5px;
          font-family: Verdana, Geneva, sans-serif;
          font-size: 10pt;
        }
        .story a {
          text-decoration: none;
          color: black;

        }

        .story h2 {
          font-size: 10pt;
          font-weight: normal;
          display: inline;
        }

        .upvote {
          color: grey;
          font-size: 14pt;
        }

        .story-info, .domain, .index {
          color: #828282;
        }
        .story-info {
          font-size: 7pt;
          padding-left:20px;
        }

        .domain {
          font-size: 8pt;
        }

      `}</style>
    </div>
  )


}

export default StoryList