import axios from "axios";
import { useEffect, useState } from "react";



function CountryDetails(props) {

useEffect(() => {
    async function getCountries() {
        const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
        );
        console.log(response.data);
    
    }
    getCountries();
    }, []);
    

  return (
    <div>
      {props.countries.length > 0 ? (
        props.countries.map((country) => {
          return (
            <div className="col-7">
              <h1>{country.name.official}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: '30%' }}>Capital</td>
                    <td>{country.Capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {country.area}
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                      {props.countries > 0 ? (
                        country.borders.map((border) => {
                        return (
                           <li key={border}>
                          <a href={border}>{border}</a>
                        </li> 
                        )
                      })) : (
                                <p>Loading .....</p>
                            )}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      ) : (
        <p>Loading .....</p>
      )}
    </div>
  );
}

export default CountryDetails;
