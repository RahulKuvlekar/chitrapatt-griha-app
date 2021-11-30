import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import TVseries from "./Pages/TVseries/TVseries";
import Search from "./Pages/Search/Search";
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container
          style={{ padding: "0 !important", maxWidth: "unset !important" }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
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
