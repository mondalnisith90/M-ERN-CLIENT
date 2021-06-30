import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import SignIn from "./Components/SignIn";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Weather from "./Components/Weather";
import {Switch, Route} from "react-router-dom";
import("../node_modules/bootstrap/dist/css/bootstrap.min.css");
import("../node_modules/bootstrap/dist/js/bootstrap.bundle.js");
import("./App.css");

const App = () => {

  return (
    <>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={Aboutus}/>
       <Route exact path="/contact" component={Contactus}/>
       <Route exact path="/signin" component={SignIn}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/weather" component={Weather} />
       <Route component={Error}/>
     </Switch>
    </>
  );
}

export default App;
