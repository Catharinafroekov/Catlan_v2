"use client";
import React, { useState, useEffect } from "react";

const Lineup = () => {
    const [bands, setBands] = useState([]); // State til at gemme bands-data

    // Funktion til at hente data fra API
    useEffect(() => {
        const fetchBands = async () => {
            const response = await fetch("https://freezing-humble-sauroposeidon.glitch.me/bands?limit=15");
            const data = await response.json();
            setBands(data.slice(0, 15));
        };
        fetchBands();
    }, []);
    
 const createPyramidLevels = (bands) => {
    const levels = [];
    let levelSize = 5;
    let index = 0;
    while (index < bands.length) {
        levels.push(bands.slice(index, index + levelSize));
        index += levelSize;
        levelSize = Math.max(1, levelSize - 1);
    }

    return levels;
};

const pyramidLevels = createPyramidLevels(bands);

return (
    <section className="flex flex-col items-center space-y-4 mb-10 mt-10">
        <h1 className="text-darkblue text-center font-bold p-10 text-2xl uppercase">Lineup</h1>
        {pyramidLevels.map((level, index) => (
            <div key={index} className="flex justify-center space-x-4" id="lineup">
                {level.map((band, idx) => (
                    <p key={idx} className="text-lg font-semibold">{band.name}</p>
                ))}
            </div>
        ))}
    </section>
);
};

export default Lineup;