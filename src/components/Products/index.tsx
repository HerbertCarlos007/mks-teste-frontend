import * as C from "./styles";
import { BagIcon } from "../BagIcon";
import { useQuery } from "react-query";
import { Load } from "../../Load";
import { toastifySuccess } from "../../utils/Notifications";

export interface Products {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
}

interface IData {
  products: Products[];
}

export const Products = () => {
  
  const getProducts = async () => {
    const request = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    );
    const response = await request.json();
    return response;
  };

  const { data, isLoading, isError } = useQuery<IData>(["products"], getProducts);

  if (isLoading) return <Load/>
  if (isError) return <div>Error fetching data</div>;

  const updateCartQuantity = () => {
    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const totalItems = existingProducts.reduce(
      (total: number, product: Products) => total + product.quantity,
      0
    );
    const event = new CustomEvent("cartUpdated", { detail: totalItems });
    window.dispatchEvent(event);
  };

  const handleBuyClick = (product: Products) => {
    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const existingProductIndex = existingProducts.findIndex(
      (p: Products) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      existingProducts[existingProductIndex].quantity += 1;
    } else {
      product.quantity = 1;
      existingProducts.push(product);
    }

    localStorage.setItem("products", JSON.stringify(existingProducts));
    updateCartQuantity();
    
    toastifySuccess("Produto adicionando no carrinho!")
  };

  return (
    <C.Container>
      <C.CardContainer>
        {data &&
          data.products.map((product) => (
            <C.Card key={product.id}>
              <C.Image src={product.photo} />
              <C.ContainerProductNameAndPrice>
                <C.ProductName>{product.name}</C.ProductName>
                <C.Price>R${product.price}</C.Price>
              </C.ContainerProductNameAndPrice>
              <C.Description>{product.description}</C.Description>
              <C.ButtonBuy onClick={() => handleBuyClick(product)}>
                <BagIcon></BagIcon>
                Comprar
              </C.ButtonBuy>
            </C.Card>
          ))}
      </C.CardContainer>
    </C.Container>
  );
};
