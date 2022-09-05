import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/song/View";
import Edit from "./components/song/Edit";
import AddSong from "./components/pages/AddSong";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/addsong" component={AddSong} />
          <Route exact path="/" component={Home} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
