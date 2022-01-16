import React, { useState } from 'react'
import axios from 'axios'
import Post from './Post'

const PostList = ({parameters}) => {
  const [posts, setPosts] = useState([])

  React.useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=dDgQPpBDapWWbmAmU1PpAeEycjbWg7QUJiETSsNN", { params: parameters }).then((response) => {
      setPosts(response.data.reverse());
    });
    console.log(parameters)
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
