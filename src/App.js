import {Component} from "react";
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Switch} from "react-router-dom"


import Home from "./components/Home"
import Axolotl from "./components/Axolotl"
import Blobfish from "./components/Blobfish"
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
        <Route path="/blobfish" component={Blobfish} />
        <Route path="/platypus" component={Platypus} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;

