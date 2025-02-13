const express=require('express')
const router=express.Router()
const cors=require ('cors')
const {storeNews,getNews,getNewsById,getLatestArticles,getByCategory}=require('../controllers/newsController')
router.use(cors());
router.post('/',storeNews);
router.get('/',getNews);
router.get("/top-headlines/:category", getByCategory);
router.get('/latest/articles',getLatestArticles);




module.exports=router;