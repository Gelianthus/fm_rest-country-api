import { useContext, useState, useEffect } from "react";
import { ColorContext } from "../contexts/ColorContext";
import CountryFilter from "./CountryFilter";
import CountryCard from "./reusable-components/CountryCard";
import ExpandedCountryCard from "./reusable-components/ExpandedCountryCard";

function Main () {

    const colorTheme = useContext(ColorContext);
    
    const [ allCountries, setAllCountries ] = useState([]);
    const [ dataCopy, setCopyData ] = useState();
    const [ isCardExpanded, setIsCardExpanded ] = useState(false);
    const [ moreDetails, setMoreDetails ] = useState(null);

    useEffect(() => {
        async function fetchCountries () {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                setAllCountries(data);
                setCopyData(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCountries();
    }, []);

    return (
        <main className={`${colorTheme ? "darker-blue-bg" : "very-light-gray-bg"}`}>
            {
                isCardExpanded ?
                    <ExpandedCountryCard 
                        setIsCardExpanded={setIsCardExpanded} 
                        moreDetails={moreDetails} 
                        setMoreDetails={setMoreDetails}
                        dataCopy={dataCopy}
                    /> :
                    <div>
                        <CountryFilter dataCopy={dataCopy} setAllCountries={setAllCountries} />
                        <section className="country-card-container">
                            {allCountries.map(country => {
                                return <CountryCard 
                                    key={country.name.common} 
                                    setAllCountries={setAllCountries}
                                    setMoreDetails={setMoreDetails}
                                    setIsCardExpanded={setIsCardExpanded} 
                                    dataCopy={dataCopy} 
                                    name={country.name.common} 
                                    population={country.population} 
                                    region={country.region} 
                                    capital={country.capital} 
                                    flagImg={country.flags.png} 
                                    nativeName={country.name.nativeName}
                                    subRegion={country.subregion}
                                    topLevelDomain={country.tld}
                                    currencies={country.currencies}
                                    languages={country.languages}
                                    cioc={country.cioc}
                                    borders={country.borders}
                                />
                            })}
                        </section>
                    </div>
            }
        </main>    
    )
}

export default Main;