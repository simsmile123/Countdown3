import React, { useState, useEffect } from 'react';

const NewsDisplay = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results.slice(0, 5)); // Only take the top 5 news stories
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
        alert('Error fetching news data. Please try again later.');
      });
  }, []);

  return (
    <div>
      {/* Display news stories */}
    </div>
  );
};

export default NewsDisplay;