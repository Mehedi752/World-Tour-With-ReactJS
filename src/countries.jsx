import { useEffect, useState } from "react";
import Country from "./country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedCountryFlags = (flag) => {
        const newVisitedCountryFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedCountryFlags);
    }

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://restcountries.com/v3.1/all";
            const res = await fetch(url);
            const data = await res.json();
            setCountries(data);
        };
        fetchData();
    }, []);

    return (
        <div className="px-5 lg:px-0">
            <h3 className="mb-5 text-center">Countries: {countries.length}</h3>
            <div className="mb-5">
                <h4 className="font-semibold text-yellow-400">Visited Country:</h4>
                <ul className="">
                    {
                        visitedCountries.map(country =>
                            <li key={country.cca3}> {country.name.common} </li>)
                    }
                </ul>
            </div>

            <div className="mb-5">
                <h4 className="font-semibold text-yellow-400">Visited Country Flags:</h4>
                <ul className="flex flex-col md:flex-row gap-3 mt-3">
                    {
                        visitedFlags.map(flag =>
                            <img src={flag} alt="" className="w-[100px]" />)
                    }
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    countries.map(country =>
                        <Country key={country.cca3}
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedCountryFlags={handleVisitedCountryFlags}
                            country={country}></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;