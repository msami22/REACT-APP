import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Header from "./Header";
import "./ProductListing.css";

const products = [
  // Indoor Plants
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 45,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop",
    description: "Swiss Cheese Plant",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&h=400&fit=crop",
    description: "Low maintenance air purifier",
  },

  // Succulents
  {
    id: 3,
    name: "Jade Plant",
    price: 20,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=400&fit=crop",
    description: "Lucky plant for prosperity",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 18,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=400&h=400&fit=crop",
    description: "Healing succulent",
  },

  // Flowering Plants
  {
    id: 5,
    name: "Peace Lily",
    price: 35,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop",
    description: "Elegant white blooms",
  },
  {
    id: 6,
    name: "Orchid",
    price: 55,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1615879005043-d1e20d752e7e?w=400&h=400&fit=crop",
    description: "Exotic beauty",
  },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = ["Indoor Plants", "Succulents", "Flowering Plants"];

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-listing">
      <Header />
      <div className="container">
        <h1 className="page-title">Our Plant Collection</h1>

        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="products-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <p className="product-price">${product.price}</p>
                      <button
                        className={`add-to-cart-btn ${
                          isInCart(product.id) ? "disabled" : ""
                        }`}
                        onClick={() => handleAddToCart(product)}
                        disabled={isInCart(product.id)}
                      >
                        {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
