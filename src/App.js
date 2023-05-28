// src/App.js
import "./App.css";
import countriesJSON from "./countries.json";
import Navbar from "./components.jsx/Navbar";
import CountriesList from "./components.jsx/CountriesList";
import CountryDetails from "./components.jsx/CountryDetails";

function App() {
  return (
    <>
    <Navbar/>
    
   <CountriesList path= "/" Countrieslist={countriesJSON}/>
   <CountryDetails/>

  
    </>
  )
}


export default App;