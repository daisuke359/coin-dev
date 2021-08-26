import "bootstrap/dist/css/bootstrap.css";
import CoinList from './components/CoinList';
import Header from './components/Header';
import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';
import {CurrencyContextProvider} from "./context/CurrencyContext";

const MainWrapper = styled.div`
        background-color: #F5F5F5;
    `;

function App() {

  return (
    <CurrencyContextProvider>
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <MainWrapper>
        <CoinList/>
      </MainWrapper>
    </div>
    </CurrencyContextProvider>
  );
}

export default App;
