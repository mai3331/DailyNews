const mongoose=require('mongoose');

const articleSchema = new mongoose.Schema({
    source: {
        id: { type: String, default: null },
        name: { type: String}
      },
      author: { type: String, default: 'Unknown' },
      title: { type: String },
      description: { type: String },
      url: { type: String},
      urlToImage: { type: String },
      publishedAt: { type: Date},
      content: { type: String },
    });

module.exports=mongoose.model("Article",articleSchema)