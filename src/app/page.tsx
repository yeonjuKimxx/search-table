"use client";

import React from "react";

export default function Home() {
  return (
    <main className="container">
      <form>
        <input
          type="search"
          name="search"
          placeholder="Search"
          aria-label="Search"
        />
        <fieldset>
          <input type="radio" id="dance" name="radio-search" checked />
          <label htmlFor="dance">dance</label>
          <input type="radio" id="artist" name="radio-search" />
          <label htmlFor="artist">artist</label>
          <input type="radio" id="dancer" name="radio-search" disabled />
          <label htmlFor="dancer" aria-disabled="true">
            dancer
          </label>
          <input type="radio" id="hashtag" name="radio-search" disabled />
          <label htmlFor="hashtag" aria-disabled="true">
            hashtag
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
