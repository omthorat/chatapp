import "./App.css";
import { Heading } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Chats from "./pages/Chats";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/chats" component={Chats} />
      </Switch>
    </Router>
  );
}

export default App;
