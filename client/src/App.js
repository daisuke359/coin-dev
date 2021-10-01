import "bootstrap/dist/css/bootstrap.css";
import GlobalStyle from './GlobalStyles';
import {CurrencyContextProvider} from "./context/CurrencyContext";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {

  return (
    <CurrencyContextProvider>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </CurrencyContextProvider>
  );
}

export default App;
