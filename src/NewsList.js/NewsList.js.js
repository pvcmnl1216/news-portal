
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=7ae26ead277448ef91b42336ce7eef5b'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {news.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
