import { useState, useEffect } from "react";
import * as C from "./styles";
import { Products } from "../Products";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { toastifyWarn } from "../../utils/Notifications";


interface CartProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart: React.FC<CartProps> = ({ isVisible, setIsVisible }) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const updateCartQuantity = () => {
      getCartItems();
    };

    window.addEventListener("cartUpdated", updateCartQuantity);

    return () => {
      window.removeEventListener("cartUpdated", updateCartQuantity);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      getCartItems();
    }
  }, [isVisible]);

  const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("products") || "[]");

    const cartItemsWithTotalPrice = cartItems.map((product: any) => {
      const quantity = Number(product.quantity) || 1;
      const price = Number(product.price);

      return {
        ...product,
        totalPrice: quantity * price,
      };
    });

    setProducts(cartItemsWithTotalPrice);
  };

  const removeProduct = (productId: number) => {
    const updatedProducts = products?.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    const totalItems = updatedProducts.reduce(
      (total: number, product: Products) => total + product.quantity,
      0
    );
    const event = new CustomEvent("cartUpdated", { detail: totalItems });
    window.dispatchEvent(event);
    toastifyWarn('Produto removido do carrinho')
  };

  const calculateTotal = () => {
    return (
      products?.reduce(
        (total, product) => total + Number(product.totalPrice),
        0
      ) || 0
    );
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    const updatedProducts = (products || []).map((product) => {
      if (product.id === productId) {
        const updatedProduct = {
          ...product,
          quantity: newQuantity,
          totalPrice: newQuantity * product.price,
        };
        return updatedProduct;
      }
      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const increaseQuantity = (productId: number) => {
    const updatedProducts = (products || []).map((product) => {
      if (product.id === productId) {
        const newQuantity = (product.quantity || 1) + 1;
        updateQuantity(productId, newQuantity);
        return {
          ...product,
          quantity: newQuantity,
          totalPrice: newQuantity * product.price,
        };
      }
      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const decreaseQuantity = (productId: number) => {
    const updatedProducts = (products || []).map((product) => {
      if (product.id === productId) {
        const newQuantity = Math.max((product.quantity || 1) - 1, 1);
        updateQuantity(productId, newQuantity);
        return {
          ...product,
          quantity: newQuantity,
          totalPrice: newQuantity * product.price,
        };
      }
      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const getProductQuantity = (productId: number) => {
    const product = (products || []).find((p) => p.id === productId);
    return product ? product.quantity || 1 : 1;
  };

  return (
    <>
      {isVisible && (
        <C.Container data-testid="cart-container">
          <C.HeaderCart>
            <C.LeftSection>
              <C.TitleCart data-testid="cart">
                Carrinho
                <br />
                de compras
              </C.TitleCart>
            </C.LeftSection>
            <C.RightSection>
              <C.CloseButton
                onClick={() => setIsVisible(false)}
                data-testid="close-button"
              >
                X
              </C.CloseButton>
            </C.RightSection>
          </C.HeaderCart>

          <C.ContainerCard>
            <C.Content>
              {products.length === 0 ? (
                <C.TextCartEmpty>
                  Seu carrinho está vazio
                  <PiShoppingCartSimpleLight size={40}/>
                </C.TextCartEmpty>
              ) : (
                products.map((product) => (
                  <C.Card key={product.id}>
                    <C.DeleteProductButton
                      onClick={() => removeProduct(product.id)}
                    >
                      X
                    </C.DeleteProductButton>
                    <C.Image src={product.photo} />
                    <C.ProductName>{product.name}</C.ProductName>

                    <C.ContainerActions>
                      <span onClick={() => decreaseQuantity(product.id)}>
                        -
                      </span>
                      <C.Divider>|</C.Divider>
                      <p>{getProductQuantity(product.id)}</p>
                      <C.Divider>|</C.Divider>
                      <span onClick={() => increaseQuantity(product.id)}>
                        +
                      </span>
                    </C.ContainerActions>

                    <C.Price>{product.totalPrice}</C.Price>
                  </C.Card>
                ))
              )}
            </C.Content>
          </C.ContainerCard>
          <C.ContainerTotal>
            <C.SectionTotal>
              <C.TextTotal>Total:</C.TextTotal>
              <C.TotalValue>R${calculateTotal()}</C.TotalValue>
            </C.SectionTotal>

            <C.ButtonBuy>Finalizar Compra</C.ButtonBuy>
          </C.ContainerTotal>
        </C.Container>
      )}
    </>
  );
};
