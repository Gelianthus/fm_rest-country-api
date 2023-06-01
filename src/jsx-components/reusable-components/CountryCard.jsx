import { useContext, useEffect } from "react";
import { ColorContext } from "../../contexts/ColorContext";


function CountryCard ({ setAllCountries, setMoreDetails, setIsCardExpanded, dataCopy, name, population, region, capital, flagImg, nativeName, subRegion, topLevelDomain, currencies, languages, cioc, borders }) {

    const formatter = new Intl.NumberFormat('en-US');
    const colorTheme = useContext(ColorContext);

    const clickHandle = () => {
        setIsCardExpanded(true);
        setMoreDetails({
            flagImg: flagImg,
            name: name,
            nativeName: nativeName,
            population: population,
            region: region,
            subRegion: subRegion,
            capital: capital,
            topLevelDomain: topLevelDomain,
            currencies: currencies,
            languages: languages,
            cioc: cioc,
            borders: borders
        })
        setAllCountries(dataCopy);
    }

    return (
        <div className={`country-card ${colorTheme ? "very-dark-blue-shadow dark-blue-bg white-fc" : "gray-shadow white-bg black-fc"}`} onClick={clickHandle}>
            <div className="flag-wrapper">
                <img className="country-flag" src={flagImg} alt={`flag of ${name}`} />
            </div>
            <div className="country-details">
                <h2 className="country-details-header">{name}</h2>
                <div className="country-details-body">
                    <p><span className="medium-weight-text">Population:</span> {formatter.format(population)}</p>
                    <p><span className="medium-weight-text">Region:</span> {region}</p>
                    <p><span className="medium-weight-text">Capital:</span> {capital}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard;