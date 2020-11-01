import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import AllProjects from "./components/AllProjects/AllProjects";
import ContactForm from "./components/ContactForm/ContactForm";
import About from "./components/About/About";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" >
          <Home></Home>
        </Route>

        <Route exact path="/all-projects" >
          <AllProjects></AllProjects>
        </Route>

        <Route exact path="/contact" >
          <ContactForm></ContactForm>
        </Route>

        <Route exact path="/about" >
          <About></About>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
