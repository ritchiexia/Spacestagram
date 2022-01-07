import React from 'react'

const Post = ({ post }) => {
  return (
    <div className="post-cell">
        <img className="post-img" src={post.url} alt={post.hdurl} />
        <div className="post-content">
          <h3>{post.title}</h3>
          <b>{post.date}</b>
          <p>{post.explanation}</p>
          <button>Like</button>
        </div>
      </div>
  )
}

export default Post
