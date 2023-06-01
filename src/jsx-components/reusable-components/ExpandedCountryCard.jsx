import { useContext, useRef } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import { MdKeyboardBackspace } from "react-icons/md";

function ExpandedCountryCard ({ setIsCardExpanded, moreDetails, setMoreDetails, dataCopy }) {

    const formatter = new Intl.NumberFormat('en-US');
    const colorTheme = useContext(ColorContext);
    const dialogRef = useRef(null);

    const dialogPopup = () => {
        dialogRef.current.showModal();
        setTimeout(() => {
            dialogRef.current.close();
        }, 600)
    }

    const backHandle = () => {
        setIsCardExpanded(false);
    }

    const nativeNameHandle = () => {
        return moreDetails.nativeName && (Object.keys(moreDetails.nativeName)[0] || Object.keys(moreDetails.nativeName)[1]);
    }
    const getNativeName = nativeNameHandle();

    const currenciesHandle = () => {
        return moreDetails.currencies && Object.keys(moreDetails.currencies)[0];
    }
    const getCurrencies = currenciesHandle();

    const languagesHandle = () => {
        const langList = [];
        const languages = moreDetails.languages && Object.keys(moreDetails.languages);
        moreDetails.languages && languages.map((lang) => {
            langList.push(moreDetails.languages[lang]);
        });
        return langList.join(", ");
    }
    const getLanguages = languagesHandle();

    const borderClickHandle = (border) => {
        const newCountry = dataCopy.filter((country) => {
            return country.cioc === border;
        })
        newCountry[0] ? setMoreDetails({
            flagImg: newCountry[0].flags.png,
            name: newCountry[0].name.common,
            nativeName: newCountry[0].name.nativeName,
            population: newCountry[0].population,
            region: newCountry[0].region,
            subRegion: newCountry[0].subregion,
            capital: newCountry[0].capital,
            topLevelDomain: newCountry[0].tld,
            currencies: newCountry[0].currencies,
            languages: newCountry[0].languages,
            cioc: newCountry[0].cioc,
            borders: newCountry[0].borders
        }) : dialogPopup()
    }
    
    return (
        <div className="detail-page">
            <dialog className={`${colorTheme ? "dark-blue-bg white-fc very-dark-blue-shadow" : "white-bg black-fc gray-shadow"}`} ref={dialogRef}>Outdated country code</dialog>
            <div className="back-button-wrapper">
                <button className={`back-button ${colorTheme ? "dark-blue-bg white-fc very-dark-blue-shadow": "white-bg black-fc gray-shadow"}`} onClick={backHandle}><MdKeyboardBackspace className="icon back-icon"/> Back</button>
            </div>
            <div className={`informations ${colorTheme ? "white-fc" : "black-fc"}`}>
                <div className={"info_flag-wrapper"}>
                    <img src={moreDetails.flagImg} alt={moreDetails.flagAlt} />
                </div>
                <div className="info_content">
                    <h2 className="info_content-header">{moreDetails.name}</h2>
                    <div className="info_content-body">
                        <div className="cb-left-col">
                            <p className="info"><span className="medium-weight-text">Native Name: </span>{
                                moreDetails.nativeName && moreDetails.nativeName[getNativeName].common
                            }</p> 
                            <p className="info"><span className="medium-weight-text">Population: </span>{formatter.format(moreDetails.population)}</p>
                            <p className="info"><span className="medium-weight-text">Region: </span> {moreDetails.region}</p>
                            <p className="info"><span className="medium-weight-text">Sub Region: </span>{moreDetails.subRegion}</p>
                            <p className="info"><span className="medium-weight-text">Capital: </span>{moreDetails.capital}</p>
                        </div>
                        <div className="cb-right-col">
                            <p className="info"><span className="medium-weight-text">Top Level Domain: </span> {moreDetails.topLevelDomain}</p>
                            <p className="info"><span className="medium-weight-text">Currencies: </span>{
                                moreDetails.currencies && moreDetails.currencies[getCurrencies].name
                            }</p>
                            <p className="info"><span className="medium-weight-text">Languages: </span>{getLanguages}</p>
                            <p className="info"><span className="medium-weight-text">CIOC: </span>{moreDetails.cioc}</p>
                        </div>
                    </div>
                    <div className="borders">
                        <p className="medium-weight-text">Border Countries: </p>
                        <div className="border-list">
                            {moreDetails.borders && moreDetails.borders.map((border) => {
                                return <button className={`border-button ${colorTheme ? "dark-blue-bg white-fc very-dark-blue-shadow": "white-bg black-fc gray-shadow"}`} key={border} onClick={() => borderClickHandle(border)}>{border}</button>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandedCountryCard;