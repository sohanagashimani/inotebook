import React,{useContext} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/Notes/NoteState";
// import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NoteContext from "./Context/Notes/NoteContext";
function App() {
  const context = useContext(NoteContext);
  console.log(context);
  console.log("sfs")
  // const {alert} = context;
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/* <Alert alert = {alert} /> */}
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
