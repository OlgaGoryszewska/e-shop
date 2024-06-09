// src/pages/SearchPage.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../../components/Product';

type Image = {
  url: string;
  alt: string;
};

type Review = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

type ProductType = {
  id: string;
  title: string;
  image: Image;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  tags: string[];
  reviews: Review[];
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage: React.FC = () => {
  const query = useQuery();
  const searchTerm = query.get('query');
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop?query=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setProducts(result.data); // Assuming result.data contains the list of products
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchProducts();
    }
  }, [searchTerm]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} {...product} />
        ))
      )}
    </div>
  );
};

export default SearchPage;
