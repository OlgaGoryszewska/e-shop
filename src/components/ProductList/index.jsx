import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v2.api.noroff.dev/online-shop'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image.url} alt={item.image.alt} />
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Discounted Price: ${item.discountedPrice}</p>
          <p>Rating: {item.rating}</p>
          <div>
            <h3>Reviews</h3>
            {item.reviews.map(review => (
              <div key={review.id}>
                <p>{review.username}: {review.rating} stars</p>
                <p>{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataFetchingComponent;
