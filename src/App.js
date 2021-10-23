import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import TVseries from "./Pages/TVseries/TVseries";
import Search from "./Pages/Search/Search";
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route exact path="/movies" component={Movies} />
            <Route path="/tv-series" component={TVseries} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
