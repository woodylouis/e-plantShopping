import React from "react";
import { useCart } from "./CartContext";

const ProductListingPage = () => {
  const { addToCart, cartItems } = useCart();

  // 检查商品是否已在购物车中
  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  // 植物数据，分为3个类别
  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 29.99,
      category: "Tropical",
      image:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      price: 39.99,
      category: "Tropical",
      image:
        "https://images.unsplash.com/photo-1546436836-47263d1177af?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Snake Plant",
      price: 19.99,
      category: "Succulent",
      image:
        "https://images.unsplash.com/photo-1596326062925-73694b32bc29?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Aloe Vera",
      price: 14.99,
      category: "Succulent",
      image:
        "https://images.unsplash.com/photo-1550005519-0f8ef0005094?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Pothos",
      price: 12.99,
      category: "Vine",
      image:
        "https://images.unsplash.com/photo-1585357687172-4196030681b9?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Philodendron",
      price: 17.99,
      category: "Vine",
      image:
        "https://images.unsplash.com/photo-1611606689494-aa2700054812?w=300&h=300&fit=crop",
    },
  ];

  // 按类别分组植物
  const groupedPlants = plants.reduce((groups, plant) => {
    const category = plant.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(plant);
    return groups;
  }, {});

  return (
    <div className="product-listing-page">
      <h2 className="page-title">Our Plants</h2>

      {Object.entries(groupedPlants).map(([category, categoryPlants]) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="plants-grid">
            {categoryPlants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />
                <div className="plant-info">
                  <h4 className="plant-name">{plant.name}</h4>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-button"
                    onClick={() => addToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
