import {Component} from "react";
import Navbar from "./components/Navbar"
import {BrowserRouter, Route} from "react-router-dom"


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
        <Route exact path="/" component={Home} />
        <Route path="/Axolotl" component={Axolotl} />
        <Route path="/Aye-aye" component={Ayeaye} />
        <Route path="/Platypus" component={Platypus} />
      </div>
    </BrowserRouter>
  );
}
}

export default App;

