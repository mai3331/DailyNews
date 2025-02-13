import { useEffect, useState } from "react";
import "./related.css";
const Related = () => {
  const [general, setGeneral] = useState(null);
  const [error, setError] = useState(null);
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

  return (<>
   <h2 style={{fontWeight:"bold",fontSize:'44px',marginLeft:'38px'}}> <span style={{fontSize:'52px',fontWeight:'bold',color:"#8B0000"}}>|</span>RELATED</h2>
    <div className="wrap">    
      {general &&
        general
          .filter((gene) => gene.urlToImage)
          .slice(0, 6)
          .map((item) => (
            <div
              className="article"
              key={item.id || item.title}
              style={{ backgroundImage: `url(${item.urlToImage})` }}
            >
              <div className="overlay"></div>
              <div className="wrap-title">
                <span className="title">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {item.title}
                  </a>
                </span>
              </div>
              <h1>
                <span>{item.source.name}</span>
              </h1>
            </div>
          ))}
    </div>
  
  </>
  );
};
export default Related;
