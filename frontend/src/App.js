import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Chats from "./pages/Chats";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>

     <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignUp}  />
        <Route path="/login" component={LoginPage} />
        <Route path="/chats" component={Chats} />
      </Switch>
    </Router>
    </>
   
  );
}

export default App;
