import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); 
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = 'http://localhost:3000/articles';
        if (selectedCategory) {
          url += `?category=${selectedCategory}`;
        }
        const response = await axios.get(url);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category); 
  };

  return (
    <div className="App">
      
      <nav className="navbar">
        <div className="logo">News Geek</div>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={() => handleCategoryClick('')}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#entertainment"
              onClick={() => handleCategoryClick('Entertainment')}
              className={selectedCategory === 'Entertainment' ? 'active' : ''}
            >
              Entertainment
            </a>
          </li>
          <li>
            <a
              href="#technology"
              onClick={() => handleCategoryClick('Technology')}
              className={selectedCategory === 'Technology' ? 'active' : ''}
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href="#sports"
              onClick={() => handleCategoryClick('Sports')}
              className={selectedCategory === 'Sports' ? 'active' : ''}
            >
              Sports
            </a>
          </li>
          <li>
            <a
              href="#business"
              onClick={() => handleCategoryClick('Business')}
              className={selectedCategory === 'Business' ? 'active' : ''}
            >
              Business
            </a>
          </li>
          <li>
            <a
              href="#health"
              onClick={() => handleCategoryClick('Health')}
              className={selectedCategory === 'Health' ? 'active' : ''}
            >
              Health
            </a>
          </li>
          <li>
            <a
              href="#science"
              onClick={() => handleCategoryClick('Science')}
              className={selectedCategory === 'Science' ? 'active' : ''}
            >
              Science
            </a>
          </li>
        </ul>
      </nav>

      
      <div className="articles-grid">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <h2>{article.title}</h2>
              <p>{article.content.substring(0, 100)}...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

export default App;