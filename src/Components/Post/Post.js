import React from "react";
import "./Post.css";
import { IMG_BASE_URL_300, UN_AVAILABLE } from "../../Config/config";
import { Badge } from "@mui/material";
import ContentModal from "../../Components/Modal/ContentModal/ContentModal";

const Post = ({
  id,
  title,
  date,
  poster_path,
  backdrop_path,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <div key={id} id={id} className="post__section">
        <Badge
          className="post__badge"
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="post__poster"
          src={
            poster_path
              ? `${IMG_BASE_URL_300}/${poster_path}`
              : `${UN_AVAILABLE}`
          }
          alt={title}
        />
        <h2 className="post__brand">{title}</h2>
        <div className="post__info">
          <span className="post__type">{media_type}</span>
          <span className="post__date">{date}</span>
        </div>
      </div>
    </ContentModal>
  );
};

export default Post;
