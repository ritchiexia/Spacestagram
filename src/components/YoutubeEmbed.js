import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ videoURL }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={videoURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="embeddedVideo"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;