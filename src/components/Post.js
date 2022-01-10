import React, { useState } from 'react'
import YoutubeEmbed from './YoutubeEmbed';

const Post = ({ post }) => {
  const [showLiked, setShowLiked] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  function convertDate(date) {
    var newDate = new Date(date);
    return newDate.toLocaleString("en-CA", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  return (
    <div className="post-cell">
        {post.media_type === "video" ? 
          <YoutubeEmbed videoURL={post.url}/>
          :
          <img className="post-img" src={post.url} alt={post.hdurl} />
        }
        <div className="post-content">
          <h3>{post.title}</h3>
          <b>{convertDate(post.date)}</b>
          <p className={showExpanded ? "post-explanation" : "post-explanation-preview"}>{post.explanation}</p>
          <button className="post-explanation-expand" onClick={() => setShowExpanded(!showExpanded)}><b>···</b></button>
          <div className="like-box">
            <button className="like-button" onClick={() => setShowLiked(!showLiked)}>{showLiked ? "Unlike" : "Like"}</button>
            {showLiked&&<p>❤️</p>}
            <button className="share-link" onClick={() => navigator.clipboard.writeText(post.url)}>🔗</button>
          </div>
        </div>
      </div>
  )
}

export default Post
