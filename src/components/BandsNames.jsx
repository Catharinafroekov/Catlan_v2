"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const BandsLineup = () => {
  const [bands, setBands] = useState([]); // State til at holde alle bands
  const [selectedGenre, setSelectedGenre] = useState(""); // State til at holde valgt genre
  const [filteredBands, setFilteredBands] = useState([]); // State til at holde de filtrerede bands
  const [tags, setTags] = useState([]); // State til at holde genrer (tags)
  const [searchQuery, setSearchQuery] = useState(""); // State til at holde søgeord (til bandnavn)

  // useEffect hook til at hente data når komponenten bliver mountet
  useEffect(() => {
    const fetchBands = async () => {
      const response = await fetch("https://freezing-humble-sauroposeidon.glitch.me/bands");
      const data = await response.json();
      setBands(data); // Sætter de hentede bands i state
      setFilteredBands(sortBands(data)); // Sorterer og sætter de filtrerede bands

      // Finder unikke genrer ved at mappe bandernes genre og fjerne dubletter
      const uniqueGenres = [...new Set(data.map((band) => band.genre))];
      setTags(uniqueGenres); // Sætter de unikke genrer i state
    };
    fetchBands();
  }, []);

  // useEffect hook til at filtrere bands, når genre eller søgning ændres
  useEffect(() => {
    let filtered = bands;

    if (selectedGenre) {
      filtered = filtered.filter((band) => band.genre === selectedGenre);
    }

    if (searchQuery) {
      filtered = filtered.filter((band) =>
        band.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBands(sortBands(filtered));
  }, [selectedGenre, bands, searchQuery]);

  // Funktion til at sortere bands alfabetisk
  const sortBands = (bands) => {
    return [...bands].sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <div>
      {/* Dropdown til at vælge genre */}
      <div className="mt-5 ml-5">
        <select
          name="genre"
          id="genre-select"
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="bg-blue rounded-15 p-2 cursor-pointer text-black"
        >
          <option value="">All bands</option>
          {tags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Søgefelt til bandnavn */}
      <div className="mt-5 ml-5 mb-5">
        <input
          type="text"
          placeholder="Search for a band"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-blue rounded-15 p-2 cursor-pointer text-black"
        />
      </div>

      {/* Visning af bands */}
      <section className="p-4 flex justify-center">
        {filteredBands.length > 0 ? (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
            {filteredBands.map((band, index) => (
              <div key={index} className="bg-white text-center flex flex-col justify-between min-h-[240px] max-w-[220px]">
                <Image
                  className="m-2 mx-auto"
                  src={band.logo.includes("https") ? band.logo : `/img/${band.logo}`}
                  width={200}
                  height={220}
                  alt={band.name}
                />
                <p className="text-black p-2 mb-2 h-10 flex items-center justify-center">{band.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
};

export default BandsLineup;