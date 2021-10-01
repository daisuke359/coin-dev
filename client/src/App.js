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
import Login from "./pages/Login";
import Register from "./pages/Register";

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
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </CurrencyContextProvider>
  );
}

export default App;
