import { Link } from 'react-router-dom';
import countriesJSON from '../countries.json';


//STYLED COMPONENTS:
const styles = { width: '18rem', color: 'blue' };


function CountriesList({countriesList}) {

  return (
    <div class="container">
      <div class="row">
        <div>
          {countriesJSON.map((country) => {
            return (
              <div className="col-5" style={styles} key={country.alpha3Code}>
                <div className="card-body">
                  <h5 className="countries-name">{country.name.common}</h5>
                  <img
                    src={
                      'https://flagpedia.net/data/flags/icon/72x54/' +
                      country.alpha2Code.toLowerCase() +
                      '.png'
                    }
                    alt="Country Flag"
                  />
                  <Link to={'/CountryDetails/' + country.alpha3Code}>
                    Country Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
