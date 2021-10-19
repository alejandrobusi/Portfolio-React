import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About";
import { UseSpanishProvider } from  './Context/UseSpanishContext'


function App() {
  return (
    <div>
      <UseSpanishProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </BrowserRouter>
        </UseSpanishProvider>
    </div>
  );
}

export default App;
