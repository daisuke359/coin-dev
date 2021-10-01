import { createContext, useState, useContext } from "react";

export const CurrencyContext = createContext();

export const ExerciseContext = createContext();


export const CurrencyContextProvider = ({children}) => {
    
    const [currencies, setCurrencies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(20);

    const value = {
        currencies,
        setCurrencies,
        currentPage,
        setCurrentPage,
        postsPerPage,
        setPostPerPage
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
}

export const useCurrencyContext = () => useContext(CurrencyContext);