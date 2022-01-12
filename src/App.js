import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About";
import { UseSpanishProvider } from  './Context/UseSpanishContext'
import Portfolio from './Pages/Portfolio/Portfolio';
import ContactMe from './Pages/ContactMe/ContactMe';


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
            <Route path="/portf">
              <Portfolio/>
            </Route>
            <Route path="/contact">
              <ContactMe/>
            </Route>
          </Switch>
        </BrowserRouter>
        </UseSpanishProvider>
    </div>
  );
}

export default App;
