const Article=require('../models/article')
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8c198d5c469041c2af3f48086a9363c0');

// newsapi.v2.topHeadlines({
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   const result=Article.insertMany(response.articles)
//   console.log(response);
// }).catch(error => {
//   console.error('Error fetching news:', error);
// });
exports.storeNews=async(req,res)=>{
    try {
        const fetch = (await import('node-fetch')).default;
        const response=await fetch("https://newsapi.org/v2/top-headlines?&apiKey=8c198d5c469041c2af3f48086a9363c0")
        
        console.log(data);
        const result=await Article.insertMany(data.articles)
        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.getNews = async (req, res) => {
      try {
        const fetch = (await import('node-fetch')).default;
        const response=await fetch("https://newsapi.org/v2/everything?domains=bbc.com,cnn.com&language=en&apiKey=8c198d5c469041c2af3f48086a9363c0")
      if (!response.ok) {
        throw new Error(`Failed to fetch news. Status: ${response.status}`);
      }
        const data = await response.json();
        res.json(data);
       
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
  };
  // exports.getNewsById = async (req, res) => {
  //   try {
  //     const article = await Article.findById(req.params.id);
  //     if (article) {
  //       res.json(article);
  //     } else {
  //       res.status(404);
  //       throw new Error("article not found");
  //     }
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // };
  exports.getLatestArticles = async (req, res) => {
    try {
      const fetch = (await import('node-fetch')).default;
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=8c198d5c469041c2af3f48086a9363c0"
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch news. Status: ${response.status}`);
      }
  
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.getByCategory = async (req, res) => {
    try {
      const category = req.params.category;
      const apiKey = "8c198d5c469041c2af3f48086a9363c0";
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news. Status: ${response.status}`);
      }
  
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };