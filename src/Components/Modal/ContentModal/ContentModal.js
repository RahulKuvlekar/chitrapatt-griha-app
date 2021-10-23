import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import "./ContentModal.css";
import CloseIcon from "@mui/icons-material/Close";
import axiosReq from "../../../Config/axiosReq";
import {
  fetchContentVideo,
  fetchContentData,
} from "../../../Config/fetchActions";
import {
  IMG_BASE_URL_500,
  UN_AVAILABLE,
  UN_AVAILABLE_LANDSCAPE,
} from "../../../Config/config";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CustomCaraosel from "../../Caraosel/CustomCaraosel";

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState([]);
  const [video, setVideo] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    try {
      const { data } = await axiosReq.get(fetchContentData(media_type, id));
      console.log(media_type, " feteh data ", id, data);
      setContent(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchVideo = async () => {
    try {
      const { data } = await axiosReq.get(fetchContentVideo(media_type, id));
      // console.log(media_type, " feteh data ",data?.results[0]?.key);
      setVideo(data?.results[0]?.key);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
    fetchVideo();
    return () => {
      setContent([]);
      setVideo([]);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Button
        className="post__button"
        style={{ color: "white" }}
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 900,
        // }}
        style={{
          backgroundColor: "rgba(0,0,0,.7)",
        }}
      >
        <Fade in={open}>
          <Box className="contentModal__box">
            {content && (
              <>
                <div className="contentModal__CloseIcon">
                  <CloseIcon onClick={handleClose} fontSize="large" />
                </div>

                <div className="contentModal">
                  <img
                    src={
                      content?.poster_path
                        ? `${IMG_BASE_URL_500}/${content.poster_path}`
                        : UN_AVAILABLE
                    }
                    alt={content.name || content.title}
                    className="contentModal__portrait"
                  />
                  <img
                    src={
                      content?.backdrop_path
                        ? `${IMG_BASE_URL_500}/${content?.backdrop_path}`
                        : UN_AVAILABLE_LANDSCAPE
                    }
                    alt={content.name || content.title}
                    className="contentModal__landscape"
                  />
                  <div className="contentModal__about">
                    <span className="contentModal__title">
                      {content.name || content.title} (
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </span>
                    {content.tagline && (
                      <i className="tagline">{content?.tagline}</i>
                    )}

                    <div className="contentModal__description">
                      <p>{content?.overview}</p>
                    </div>

                    <div className="contentModal__caraosel">
                      <CustomCaraosel id={id} media_type={media_type} />
                    </div>

                    {video && (
                      <Button
                        className="youtube__button"
                        variant="contained"
                        // startIcon={}
                        color="error"
                        target="__blank"
                        href={`https://www.youtube.com/watch?v=${video}`}
                      >
                        <YouTubeIcon />
                        <span>Watch the Trailer</span>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
