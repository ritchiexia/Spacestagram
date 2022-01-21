import { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { Heading, Icon, Stack, Tooltip } from "@shopify/polaris";
import { CalendarMinor, ProfileMinor } from "@shopify/polaris-icons";

import ToggleButton from "@mui/material/ToggleButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Post = ({ post }) => {
  const [showLiked, setShowLiked] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  const convertDate = (date) => {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate.toLocaleString("en-CA", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="post-cell">
      {post.media_type === "video" ? (
        <YoutubeEmbed videoURL={post.url} />
      ) : (
        <img style={{ width: "100%" }} src={post.url} alt={post.hdurl} />
      )}
      <div style={{ padding: "10px 20px" }}>
        <div style={{ padding: "0px 0px 8px 0px" }}>
          <Stack>
            <div className="badge">
              <Icon source={CalendarMinor} />
              {convertDate(post.date)}
            </div>
            {post.hasOwnProperty("copyright") && (
              <div className="badge">
                <Icon source={ProfileMinor} />
                {`© ${post.copyright}`}
              </div>
            )}
          </Stack>
        </div>
        <Heading element="h2">{post.title}</Heading>
        <p
          className={
            showExpanded ? "post-explanation" : "post-explanation-preview"
          }
        >
          {post.explanation}
        </p>
        <button
          className="post-explanation-expand"
          onClick={() => setShowExpanded(!showExpanded)}
        >
          <b>{showExpanded ? "Collapse text" : "Show more..."}</b>
        </button>
        <div className="like-box">
          <Tooltip
            content={showLiked ? "Unlike" : "Like"}
            active={false}
            dismissOnMouseOut={true}
            preferredPosition="above"
          >
            <ToggleButton
              value="check"
              selected={showLiked}
              onChange={() => {
                setShowLiked(!showLiked);
              }}
            >
              {showLiked ? (
                <FavoriteIcon sx={{ color: "red" }} fontSize="large" />
              ) : (
                <FavoriteBorderIcon fontSize="large" />
              )}
            </ToggleButton>
          </Tooltip>
          <div className="share-link">
            <Tooltip
              content="Copy image link"
              active={false}
              dismissOnMouseOut={true}
              preferredPosition="above"
            >
              <ToggleButton
                value="check"
                selected={false}
                onChange={() => navigator.clipboard.writeText(post.url)}
              >
                <ShareIcon fontSize="large" />
              </ToggleButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
