import * as React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useHistory } from "react-router";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  React.useEffect(() => {
    switch (value) {
      case 0:
        history.push("/");
        break;

      case 1:
        history.push("/movies");
        break;

      case 2:
        history.push("/tv-series");
        break;

      case 3:
        history.push("/search");
        break;

      default:
        history.push("/");
        break;
    }
  }, [value, history]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
        className="footer"
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            window.scroll(0, 0);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Trendings"
            icon={<WhatshotRoundedIcon />}
          />
          <BottomNavigationAction
            label="Movies"
            icon={<MovieCreationRoundedIcon />}
          />
          <BottomNavigationAction label="TV Series" icon={<TvRoundedIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchRoundedIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}
