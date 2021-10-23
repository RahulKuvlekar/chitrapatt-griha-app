import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axiosReq from "../../Config/axiosReq";
import { fetchContentCredits } from "../../Config/fetchActions";
import "./CustomCaraosel.css";
import { IMG_BASE_URL_300, UN_AVAILABLE } from "../../Config/config";

const CustomCaraosel = ({ media_type, id }) => {
  const [credits, setCredits] = useState([]);

  const handleDragStart = (e) => e.preventDefault();

  const items = credits.map((data) => (
    <div className="carouselItem">
      <img
        src={
          data.profile_path
            ? `${IMG_BASE_URL_300}/${data.profile_path}`
            : UN_AVAILABLE
        }
        alt={data?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{data?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 2,
    },
    420: {
      items: 3,
    },
    512: {
      items: 4,
    },
    1020: {
      items: 3,
    },
    1240: {
      items: 5,
    },
  };

  useEffect(() => {
    const fetchCredits = async () => {
      const { data } = await axiosReq.get(fetchContentCredits(media_type, id));
      console.log("CREDITS ", data);
      setCredits(data.cast);
    };
    fetchCredits();
    //eslint-disable-next-line
  }, []);
  return (
    <AliceCarousel
      className="customCarousel"
      mouseTracking
      autoPlay
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
    />
  );
};

export default CustomCaraosel;
