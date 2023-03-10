import { NavLink } from 'react-router-dom';

function CountriesList(props) {
  return (
    <>
      <ul className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        {props.countries.length > 0 ? (
          props.countries.map((country) => {
            return (
              <li className="list-group" key={country.alpha3Code}>
                <NavLink
                  className={'list-group-item list-group-item-action'}
                  to={`/country/${country.alpha3Code}`}
                >
                  {country.name.official}
                </NavLink>
              </li>
            );
          })
        ) : (
          <p>Loading .....</p>
        )}
      </ul>
    </>
  );
}

export default CountriesList;
