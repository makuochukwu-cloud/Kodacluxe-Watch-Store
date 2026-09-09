import "../stylesheet/Shop.css";
import dropDown from "../assets/svgs.shop/filters.svg";
import { useState } from "react";
import products from "../data/product";
import { useSearchParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [filterDropDown, setFilterDropDown] = useState(false);

  const [searchParams] = useSearchParams();

  const startingCategory = searchParams.get("category") || "All";

  const [category, setCategory] = useState(startingCategory);

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  const { cart, setCart } = useOutletContext();
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  
  return (
    <section>
      <section class="shop-hero">
        <h2>Timeless Pieces Sourced For You</h2>
        <p>
          Explore our curated selection of premium watches for every style and
          occasion.
        </p>
      </section>
      <div class="filter">
        <button
          onClick={() => setFilterDropDown(!filterDropDown)}
          class="filter-btn"
          id="filter-btn"
        >
          <p>FILTER</p> <img src={dropDown} />
        </button>
      </div>
      <section class="shop-contents">
        <aside className={filterDropDown ? "aside active" : "aside"}>
          <h2>Categories</h2>
          <div class="categories">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("All");
              }}
            >
              All Watches
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("Men");
              }}
            >
              Men's Watches
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("Women");
              }}
            >
              Women's Watches
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("Unisex");
              }}
            >
              Unisex Watches
            </a>
          </div>
        </aside>

        {/* <!--shop main body --> */}
        <section class="shop-items">
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div className="product-grid-cards" key={product.id}>
                <div className="product-images">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>
                    {product.size} • {product.movement}
                  </p>
                  <h4>₦{product.price.toLocaleString()}</h4>
                  <button onClick={() => addToCart(product)}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
