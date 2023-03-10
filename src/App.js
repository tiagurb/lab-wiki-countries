import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";


function App() {

  const [countries, setCountries] = useState([]);


  useEffect(() => {
    async function getCountries() {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      console.log(response.data);

      setCountries(response.data);
    }
    getCountries();
  }, []);


  return (
  <>
    <Navbar/>
    <CountriesList countries={countries}/>
    
    <Routes>
      <Route path="/country/:id" element={<CountryDetails countries={countries}/>}/>
    </Routes>
  </>
  );
}
export default App;
