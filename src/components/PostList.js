import React, { useState } from 'react'
import axios from 'axios'
import Post from './Post'

const PostList = () => {
  const [posts, setPosts] = useState([])

  React.useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=dDgQPpBDapWWbmAmU1PpAeEycjbWg7QUJiETSsNN", { params: { count: 5 } }).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.date} post={post}/>
      ))}
    </div>
  )
}

export default PostList
