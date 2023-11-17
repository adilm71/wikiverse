import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [article, setArticle] = useState("");

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchArticle = async (slug) => {
    const response = await fetch(`${apiURL}/wiki/${slug}`);
    const data = await response.json();
    setArticle(data.content);
  };

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {article === "" && (
        <PagesList pages={pages} fetchArticle={fetchArticle} />
      )}{" "}
      {article != "" && (
        <>
          <p>{article}</p>
          <button onClick={() => setArticle("")}>Back to WikiVerse</button>
        </>
      )}
    </main>
  );
};
