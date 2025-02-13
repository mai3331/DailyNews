import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Featured.css';

const Featured = () => {
  const [articles, setArticles] = useState([]);
  const [general, setGeneral] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:9000/news/latest/articles");
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError("Failed to fetch articles");
      }
    };

    const fetchGeneral = async () => {
      try {
        const response = await fetch("http://localhost:9000/news");
        const data = await response.json();
        setGeneral(data.articles);
      } catch (err) {
        setError("Failed to fetch general news");
      }
    };

    fetchArticles();
    fetchGeneral();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  // if (articles.length === 0 || general.length === 0) {
  //   return <div>Loading...</div>;
  // }

  const mainArticle = articles.find((article) => article.urlToImage);
  const sideArticles = general.filter((gene) => gene.urlToImage).slice(20, 23);

  return (
    <div className="container-fluid">
      <div className="row g-5">
        <div className="col-lg-6 d-flex flex-column">
          {mainArticle && (
            <>
              <img
                src={mainArticle.urlToImage}
                alt={mainArticle.title}
                className="img-fluid rounded-5 mb-3"
                style={{ objectFit: 'cover', height: '100%' }}
              />
              <div className="d-flex align-items-center mb-2">
                <h1 className="me-2" style={{fontSize:'32px'}}>01.</h1>
                <a href={mainArticle.url} target="_blank" rel="noopener noreferrer" style={{fontSize:'26px',fontWeight:'bold',color:'#8B0000'}}>
                         {mainArticle.title}
                    </a>
              </div>
              <span style={{ color: '#777' }}>
                {new Date(mainArticle.publishedAt).toLocaleDateString()}
              </span>
              <p style={{ color: 'black', fontWeight: 'bold' }}>
                {mainArticle.description}
              </p>
            </>
          )}
        </div>

    
        <div className="col-lg-6 d-flex flex-column justify-content-between over">
          {sideArticles.map((gene, index) => (
            <div key={gene.id} className="d-flex mb-3 mt-3" style={{ height: '33.33%' }}>
              <img
                src={gene.urlToImage}
                alt={gene.title}
                className="img-fluid rounded-5 me-3"
                style={{ objectFit: 'cover', width: '40%' }}
              />
              <div>
                <div className="d-flex align-items-center">
                  <h2 className="h5 article-title" style={{fontSize:"23px"}}>{`0${index + 2}.`}</h2>
                  <a href={gene.url} target="_blank" rel="noopener noreferrer" style={{fontSize:'20px',fontWeight:'bold',color:'#8B0000'}}>
                         {gene.title}
                    </a>
                </div>
                <p style={{ color: '#777' }}>
                  {new Date(gene.publishedAt).toLocaleDateString()}
                </p>
                <p style={{ color: 'black' ,fontWeight:"bold"}} className="description">
                  {gene.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
