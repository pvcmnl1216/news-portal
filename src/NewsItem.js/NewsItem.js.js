
import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <li>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </li>
  );
};

export default NewsItem;
