import React, { useState } from "react";
import axios from "axios";
import Post from "./Post";
import "@shopify/polaris/build/esm/styles.css";

const PostList = ({ parameters }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (loading) {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`,
          { params: parameters }
        )
        .then((response) => {
          setPosts(response.data.reverse());
          setLoading(false);
        });
    }
  }, [loading, parameters]);

  return (
    <div className="container">
      {loading ? (
        <div className="loader" />
      ) : (
        posts.map((post) => <Post key={post.date} post={post} />)
      )}
    </div>
  );
};

export default PostList;
