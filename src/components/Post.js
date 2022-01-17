import React, { useState } from 'react'
import YoutubeEmbed from './YoutubeEmbed';
import { MediaCard } from '@shopify/polaris';

const Post = ({ post }) => {
  const [showLiked, setShowLiked] = useState(false);

  function convertDate(date) {
    var newDate = new Date(date);
    return newDate.toLocaleString("en-CA", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  return (
    <MediaCard
      key={post.date}
      title={`${convertDate(post.date)} | ${post.title}`}
      primaryAction={{
        content: showLiked ? "❤️ Unlike" : "Like",
        onAction: () => setShowLiked(~showLiked),
      }}
      description={post.explanation}
      popoverActions={[{content: '🔗 Copy image link', onAction: () => {navigator.clipboard.writeText(post.url)}}]}
      portrait={true}
    >
      {post.media_type === "video" ?
        <YoutubeEmbed videoURL={post.url} />
        :
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          src={post.url}
        />
      }
    </MediaCard>
  )
}

export default Post
