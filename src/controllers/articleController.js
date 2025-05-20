import Article from "../models/Article.js";
import User from "../models/User.js";

export const addArticle = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const newArticle = await Article.create({
      title,
      content,
      category: category || "General",
    });

    res.status(201).json({ message: "Article added successfully", article: newArticle });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getArticles = async (req, res) => {
 try {
   const user = await User.findById(req.user?.id);
   const lang = user?.language || "en";
   const { category } = req.query;

   const query = category ? { category } : {};
   const articles = await Article.find(query).sort({ createdAt: -1 });

   const localizedArticles = articles.map(article => ({
     ...article._doc,
     title: article.title[lang] || article.title.en,
     content: article.content[lang] || article.content.en,
   }));

   res.status(200).json({ articles: localizedArticles });
 } catch (err) {
   res.status(500).json({ message: "Server error", error: err.message });
 }
};