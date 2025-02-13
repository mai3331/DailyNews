import React, { useEffect, useState } from "react";
import "./home.css";
import Featured from "../Components/Featured";
import List from "../Components/postList";
import Related from "../Components/realated";
const Home = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [general, setGeneral] = useState(null);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "http://localhost:9000/news/latest/articles"
        );
        const data = await response.json();
        console.log("Fetched Articles:", data);
        setArticles(data.articles);
      } catch (err) {
        setError("Failed to fetch");
      }
    };

    fetchArticles();
  }, []);
  useEffect(() => {
    const fetchGenral = async () => {
      try {
        const response = await fetch("http://localhost:9000/news");
        const data = await response.json();
        console.log("Fetched Articles:", data);
        setGeneral(data.articles);
      } catch (error) {
        setError("Failed to fetch");
      }
    };
    fetchGenral();
  }, []);


  return (
    <div>
  
      <div className="ticker">
        <ul className="ticker-data">
          {general &&
            general.map((gene, index) => (
              <li key={index}>
                <span>{gene.title}</span>
                <span aria-hidden="true">{gene.title}</span>
              </li>
            ))}
        </ul>
      </div>

      <h2
        style={{
          fontSize: "40px",
          color: "#8B0000",
          display: "flex",
          alignSelf: "start",
          fontWeight: "bold",
        }}
      >
        <a href="/" className="btn btn_live">
          <span className="live-icon"></span>
        </a>
       News
      </h2>

      <Featured />
      <Related></Related>
      <List />
    </div>
  );
};
export default Home;
