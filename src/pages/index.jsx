import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

const NewsReact = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log('TAMPILAN AWAL');
    fetchArticles();
    return () => {
      setArticles([]);
    }
  }, []);

  const fetchArticles = () => {
    const apiKey = 'ec9fb3f7a0504d73a2f447742e80381b';
    const url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("BERITA DI UPDATE");
    const apiKey = 'ec9fb3f7a0504d73a2f447742e80381b';
    const url = `https://newsapi.org/v2/top-headlines?country=id&q=${searchTerm}&apiKey=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <NavBar />
      <SearchBar searchTerm={searchTerm} handleSearchInputChange={handleSearchInputChange} handleSearchSubmit={handleSearchSubmit} />
      <NewsList articles={articles} />
    </div>
  );
}

export default NewsReact;
