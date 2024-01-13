import React, { useEffect, useState } from "react";
import "./style.css";
const LoadMore = () => {
  const [skipped, setSkipped] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const dataFetcher = async () => {
      setIsLoading(true);
      try {
        const url = `https://dummyjson.com/products?limit=20&skip=${skipped}`;
        const res = await fetch(url);
        const data = await res.json();
        data
          ? setProducts((prevProducts) => [...prevProducts, ...data.products])
          : null;
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    dataFetcher();
  }, [skipped]);

  return (
    <section>
      {isLoading ? (
        <div className="loading-container">Loading...</div>
      ) : (
        <section className="products-section">
          {products.map((product) => {
            const { id, title, thumbnail } = product;
            return (
              <div className="products" key={id}>
                <img src={thumbnail} alt={title} />
                <h3>{title}</h3>
              </div>
            );
          })}
        </section>
      )}
      <div className="btn-container">
        {!isLoading && (
          <button
            className=" more-products-btn"
            disabled={products.length === 100 && true}
            onClick={() => setSkipped((prevVal) => prevVal + 20)}
          >
            Load More Products
          </button>
        )}
      </div>
    </section>
  );
};

export default LoadMore;
