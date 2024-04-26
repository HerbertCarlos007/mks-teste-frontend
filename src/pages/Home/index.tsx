import {useState} from 'react'
import * as C from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { Cart } from "../../components/Cart";

export const Home = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(false)
  
  return (
    <>
      <Header setIsVisible={setIsVisible}/>
      <Cart isVisible={isVisible} setIsVisible={setIsVisible}/>
      <C.Container>
        <Products />
      </C.Container>
      <Footer />
    </>
  );
};
