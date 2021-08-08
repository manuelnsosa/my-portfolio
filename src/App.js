import { Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
//import NavBar from "./components/NavBar/NavBar.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Resume from "./components/Resume/Resume.jsx";
//<Route path="/" component={NavBar} />
function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio} />
    </>
  );
}

export default App;
