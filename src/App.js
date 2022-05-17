import {Component} from "react";
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Switch} from "react-router-dom"


import Home from "./components/Home"
import Axolotl from "./components/Axolotl"
import Ayeaye from "./components/Aye-aye"
import Platypus from "./components/Platypus"

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/axolotl" component={Axolotl} />
        <Route path="/aye-aye" component={Ayeaye} />
        <Route path="/platypus" component={Platypus} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
