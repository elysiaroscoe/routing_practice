import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import ThreeParams from "./components/ThreeParams";
import Variable from "./components/Variable";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <h1>Routing Assignment</h1>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        {/* Multi parameter route on top so that it gets recognized */}
        <Route path="/:variable/:color1/:color2">
          <ThreeParams/>
        </Route>
        <Route path="/:variable">
          <Variable/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
