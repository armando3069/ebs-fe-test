import React, { useState } from "react";

import ShopItem from "../../components/productItems/shopItem";
import "./style.css";
import { useShoppingCart } from "../../context/shopContext";

const Home = () => {
  const { products } = useShoppingCart();
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const FillterCategory =
    category === "All"
      ? products
      : products.filter((item) => item.category === category);

  const sortedProducts = [...FillterCategory].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="viewContainer">
      <div className="container">

        <div className="filter">

          <div className="category-filter">
            <div
              className={category === "All" ? "active" : "all"}
              onClick={() => setCategory("All")}
            >
              All Products
            </div>
            <div
              className={category === "women's clothing" ? "active" : "all"}
              onClick={() => setCategory("women's clothing")}
            >
              women's clothing
            </div>
            <div
              className={category === "jewelery" ? "active" : "all"}
              onClick={() => setCategory("jewelery")}
            >
              Jewelery
            </div>
            <div
              className={category === "men's clothing" ? "active" : "all"}
              onClick={() => setCategory("men's clothing")}
            >
              men's clothing
            </div>

            <div
              className={category === "electronics" ? "active" : "all"}
              onClick={() => setCategory("electronics")}
            >
              electronics
            </div>

          </div>

          <div className="price-Filter">

          <button
            className="sort-price"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
          </div>

        </div>

        <div className="Items">
          {sortedProducts.map((product) => (
            <ShopItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
