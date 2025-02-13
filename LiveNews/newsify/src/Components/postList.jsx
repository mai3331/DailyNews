import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Featured.css'
const List = () => {
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

  return (
    <>
      <div className="d-flex flex-column gap-5 mb-5 mt-5 ">
          <h2 style={{fontWeight:"bold",fontSize:'44px',marginLeft:'38px'}}> <span style={{fontSize:'52px',fontWeight:'bold',color:"#8B0000"}}>|</span>More to explore</h2>
        {general &&
          general
            .filter((gene) => gene.urlToImage)
            .slice(7, 11)
            .map((gene, index) => (
              <div key={gene.id || index} className="d-flex flex-column flex-xl-row gap-4" style={{ boxShadow:" 0 1em 1em -1em rgba(0, 0, 0, .25)"}}>            
                <div className="d-md-none d-xl-block" style={{marginLeft:"38px"}}>
                  <img src={gene.urlToImage} alt="" className="squar-image rounded-5" />
                </div>
                <div className="my-2">
                  <Link to={`/articles/${gene._id}`} style={{ fontWeight: "bold" ,textDecoration:'none',color:'black',fontSize:'30px'}}>
                    {gene.title}
                  </Link>
                  <div className="d-flex align-items-center gap-2" style={{ color: "#777" }}>
                    <span>Source:</span>
                    <Link style={{ color: "#000080" }}>{gene.source.name}</Link>
                    <span>on {new Date(gene.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <p style={{fontSize:'18px'}}>{gene.description}</p>
                  <a href={gene.url} target="_blank" rel="noopener noreferrer" style={{fontSize:'16px',textDecoration:"underline",color:'#000080'}}>
                         read more
                    </a>
                </div>
               <hr className="hr-black"/>
              </div>
            ))}
      </div>
    </>
  );}
export default List;