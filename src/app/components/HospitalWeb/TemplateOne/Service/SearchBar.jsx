"use client";
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Pass the search query back to the parent
  };

  return (
    <div className="w-full my-5">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for services or doctors..."
        className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-md outline-none focus:outline-0 "
      />
    </div>
  );
}
