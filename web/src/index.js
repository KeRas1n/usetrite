import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchContextProvider } from './contexts/SearchContext';
import { NewSearchContextProvider } from './contexts/NewSearchContext'; 
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import Router from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <>
  <NewSearchContextProvider>
    <AuthContextProvider>
    <SearchContextProvider>
      <Router/>
    </SearchContextProvider>
    </AuthContextProvider>
  </NewSearchContextProvider>
  </>
);

