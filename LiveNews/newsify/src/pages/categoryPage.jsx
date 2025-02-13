import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./categoryPage.css";
const Category = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/news/top-headlines/${category}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchCategory();
  }, [category]);

  return (
    <div className="containers mt-5">
      <main className="news">
      <h2 style={{fontWeight:"bold",fontSize:'44px',marginLeft:'0px',textTransform:'uppercase'}}> <span style={{fontSize:'52px',fontWeight:'bold',color:"#8B0000"}}>|</span>{category} NEWS</h2>
        {articles.filter((article)=>article.urlToImage).slice(0, 5).map((article, index) => (
          <div
            className="article"
            key={article.id || index}
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              className="imgs rounded-5"
            />
            <div className="articlecontent">
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{fontSize:'30px',fontWeight:'bold',textDecoration:"none",color:'black'}}>
            {article.title}
          </a>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </main>

      <aside className="sidebar">
        <h2 style={{fontWeight:"bold",fontSize:'44px',marginRight:'110px'}}> <span style={{fontSize:'52px',fontWeight:'bold',marginLeft:'0px'}}>|</span>Trending Articles</h2>
        {articles.filter((article)=>article.urlToImage).slice(5, 20).map((article, index) => (
          <div className="sidebar-item" key={article.id || index}>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="sidebar-img rounded-3"
            />
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{fontSize:'20px',fontWeight:'bold',textDecoration:"none",color:'black'}}>
            {article.title}
          </a>
          </div>
        ))}
      </aside>
    </div>
  );
};
export default Category;
