import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, where green meets serenity! We are a
          premier destination for plant lovers, offering a wide variety of
          beautiful, healthy houseplants that bring life and freshness to your
          home or office. Our carefully curated collection includes everything
          from low-maintenance succulents to exotic flowering plants, all
          nurtured with care to ensure they thrive in your space. Whether you're
          a seasoned gardener or just beginning your plant journey, Paradise
          Nursery has the perfect green companion waiting for you.
        </p>
        <button
          className="get-started-btn"
          onClick={() => navigate("/products")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
