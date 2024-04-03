"use client";

import React, { useState } from "react";
import Table from "./Table";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("dance");
  const [items, setItems] = useState([] as any[]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log("Submitted:", search);

    const endpoint = `http://192.168.52.44:8000/${selectedRadio}/${search}`;
    try {
      const response = await fetch(endpoint);

      const data = await response.json();

      const items = data.items;
      setItems(items);

      console.table("Search items:", items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleRadioChange = (event: any) => {
    setSelectedRadio(event.target.id);
    console.log(event.target.id);
  };

  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          onChange={handleChange}
          placeholder="Search"
          aria-label="Search"
        />
        <fieldset>
          <input
            type="radio"
            id="dance"
            name="radio-search"
            onChange={handleRadioChange}
          />
          <label htmlFor="dance">dance</label>
          <input type="radio" id="artist" name="radio-search" />
          <label htmlFor="artist">artist</label>
          <input
            type="radio"
            id="dancer"
            name="radio-search"
            onChange={handleRadioChange}
          />
          <label htmlFor="dancer" aria-disabled="true">
            dancer
          </label>
          <input
            type="radio"
            id="hashtag"
            name="radio-search"
            onChange={handleRadioChange}
          />
          <label htmlFor="hashtag" aria-disabled="true">
            hashtag
          </label>
          <input
            type="radio"
            id="challenge"
            name="radio-search"
            onChange={handleRadioChange}
          />
          <label htmlFor="challenge">challenge</label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {items && <Table data={items} />}
    </main>
  );
}
