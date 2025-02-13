import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Post = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:9000/news/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch article details");
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Error fetching article. Please try again.");
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div className="d-flex flex-column gap-4 p-5">
      {error && <p style={{ color: "red" }}>{error}</p>}

      {article ? (
        <div className="d-flex flex-column flex-xl-row gap-5">
         
          <div className="d-flex flex-column gap-3" style={{ width: "60%" }}>
            <h1>{article.title}</h1>
            <div className="d-flex align-items-center gap-2">
              <span>By {article.author}</span>
              <span>on {new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
            <p>{article.description}</p>
            <p>{article.content}</p>
          </div>
          {article.urlToImage && (
            <div className="d-md-none d-xl-block" style={{ width: "40%" }}>
              <img src={article.urlToImage} alt={article.title} style={{ width: "100%" }} />
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Post;
