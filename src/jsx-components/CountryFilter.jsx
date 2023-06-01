import { useContext, useState, useRef } from "react";
import { ColorContext } from "../contexts/ColorContext";
import { HiChevronDown, HiSearch } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";

function CountryFilter ({ dataCopy, setAllCountries }) {

    const colorTheme = useContext(ColorContext);
    const [ isDropdownExpanded, setIsDropdownExpanded ] = useState(false);
    const [ selectedRegionFilter, setSelectedRegionFilter ] = useState("");

    const inputRef = useRef(null);

    const capitalized =(str) => {
        if (typeof str !== "string" || str.length === 0) {
            return str; 
        }
        let words = str.split(" "); 
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word.length > 0) {
                words[i] = word.charAt(0).toUpperCase() + word.slice(1);
            }
        }
        return words.join(" "); 
    }

    const searchFilter = () => {
        setAllCountries(dataCopy.filter((country) => {
            return country.name.common.includes(capitalized(inputRef.current.value))
        }))
    }

    const regionFilter = (selectedRegion) => {
        setAllCountries(dataCopy.filter((country) => {
            return country.region === selectedRegion;
        }))
        setIsDropdownExpanded(false);
        setSelectedRegionFilter(selectedRegion);
    }

    const removeFilter = () => {
        selectedRegionFilter && setAllCountries(dataCopy);
        setSelectedRegionFilter("");
    }

    return (
        <section className="country-filter">
            <div className={`search-filter filter-wrapper ${colorTheme ? "dark-blue-bg very-dark-blue-shadow" : "white-bg gray-shadow"}`}>
                <HiSearch className={`search-icon icon ${colorTheme ? "white-fc" : "gray-fc"}`} />
                <input   className={`search-filter-input ${colorTheme ? "white-fc" : "black-fc"}`} type="text" placeholder="Search for a country..." ref={inputRef} onChange={searchFilter}/>
            </div>
            <div className="region-filter-control">
                <button className={`remove-filter-button ${colorTheme ? "dark-blue-bg white-fc very-dark-blue-shadow" : "white-bg black-fc gray-shadow"}`} onClick={removeFilter}>Remove Filter <RiCloseCircleLine className="icon clear-icon"/></button>
                <div className={`region-filter filter-wrapper ${colorTheme ? "dark-blue-bg white-fc very-dark-blue-shadow" : "white-bg black-fc gray-shadow"}`}>
                    <button className="dropdown-toggle" onClick={() => setIsDropdownExpanded(prevState => !prevState)}>Filter by Region <HiChevronDown className="chevron-down-icon icon" /></button>
                    <div className={`dropdown ${isDropdownExpanded ? "" : "display-none"} ${colorTheme ? "dark-blue-bg white-fc very-dark-blue-shadow" : "white-bg black-fc gray-shadow"}` }>
                        <button className="dropdown-button" onClick={() => regionFilter("Africa")}>Africa</button>
                        <button className="dropdown-button" onClick={() => regionFilter("Americas")}>Americas</button>
                        <button className="dropdown-button" onClick={() => regionFilter("Antarctic")}>Antarctic</button>
                        <button className="dropdown-button" onClick={() => regionFilter("Asia")}>Asia</button>
                        <button className="dropdown-button" onClick={() => regionFilter("Europe")}>Europe</button>
                        <button className="dropdown-button" onClick={() => regionFilter("Oceania")}>Oceania</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CountryFilter;