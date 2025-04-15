import React, { useState } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

const ProductCard = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.text_secondary + 20};
  border-radius: 10px;
  padding: 16px;
  width: 260px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 16px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin: 8px 0;
`;

const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const CartNotification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: fade-in-out 3s ease-in-out;

  @keyframes fade-in-out {
    0%, 100% {
      opacity: 0;
      transform: translateY(-20px);
    }
    10%, 90% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const products = [
  { id: 1, name: "Yoga Mat", price: "Rs.1000", img: "https://via.placeholder.com/260" },
  { id: 2, name: "Dumbbells", price: "Rs.2000", img: "https://via.placeholder.com/260" },
  { id: 3, name: "Resistance Bands", price: "Rs.500", img: "https://via.placeholder.com/260" },
  { id: 4, name: "Treadmill", price: "Rs.15000", img: "https://via.placeholder.com/260" },
  { id: 5, name: "Exercise Ball", price: "Rs.1200", img: "https://via.placeholder.com/260" },
];

const Products = () => {
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <>
      {showNotification && <CartNotification>Item added to cart!</CartNotification>}
      <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.img} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <AddToCartButton onClick={() => addToCart(product)}>
              Add to Cart
            </AddToCartButton>
          </ProductCard>
        ))}
      </ProductContainer>
    </>
  );
};

export default Products;
