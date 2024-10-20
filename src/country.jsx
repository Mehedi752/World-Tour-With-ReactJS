import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
    console.log(country);
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        // alert("You are already visited this country!");
    }

    return (
        <div className="p-5 border rounded-xl flex flex-col gap-5">
            <img src={flags.png} alt="" className="h-[200px] rounded-xl" />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-yellow-400">Name: {name.common}</h3>
                <p className="">Population: {population}</p>
                <p className="">Arear: {area}</p>
                <p className="">Code: {cca3}</p>
                <button onClick={() => handleVisitedCountry(country)} className="btn w-[120px] bg-blue-700 text-white">Mark Visited</button>
                <button onClick={handleVisited} className="btn w-[120px] bg-blue-700 text-white"> {visited?"Visited":"Going"} </button>
                { visited ? "You are already visited this country!" : "Okay Let's Goooo!!" }
            </div>
        </div>
    );
};

export default Country;