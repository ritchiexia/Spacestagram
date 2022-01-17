import React, { useState } from 'react'
import axios from 'axios'
import Post from './Post'
import '@shopify/polaris/build/esm/styles.css';

const PostList = ({parameters}) => {
  const [posts, setPosts] = useState([])
  
  React.useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=dDgQPpBDapWWbmAmU1PpAeEycjbWg7QUJiETSsNN", { params: parameters }).then((response) => {
      setPosts(response.data.reverse())
    });
  }, []);

  return (
    <div className="container">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default PostList
