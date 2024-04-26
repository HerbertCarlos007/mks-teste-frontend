import React, { useState, useEffect } from "react";
import { CartIcon } from "../CartIcon";
import * as C from "./styles";

interface HeaderProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

declare global {
  interface WindowEventMap {
    cartUpdated: CustomEvent<number>
  }
}

export const Header: React.FC<HeaderProps> = ({ setIsVisible }) => {
  const [quantityItens, setQuantityItens] = useState(0);
  useEffect(() => {

    const itens = localStorage.getItem("products");

    if (itens) {
      const itensParsed = JSON.parse(itens);

      const newQuantity = Array.isArray(itensParsed) ? itensParsed.length : 1;
      setQuantityItens(newQuantity);
    }
  }, []);
  
  useEffect(() => {
    const updateCartQuantity = (event: CustomEvent) => {
      setQuantityItens(event.detail);
    };
  
    window.addEventListener('cartUpdated', updateCartQuantity);
  
    return () => {
      window.removeEventListener('cartUpdated', updateCartQuantity);
    };
  }, []);

  return (
    <C.Container>
      <C.Content>
        <C.LeftSection>
          <C.Title>MKS</C.Title>
          <C.Subtitle>Sistemas</C.Subtitle>
        </C.LeftSection>
        <C.CartButton onClick={() => setIsVisible(true)} data-testid="cart-button">
          <CartIcon />{quantityItens}
        </C.CartButton>
      </C.Content>
    </C.Container>
  );
};
