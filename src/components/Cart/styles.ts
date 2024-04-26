import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  height: 100vh;
  z-index: 999;
  background-color: #0F52BA;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  
 
  
  @media (max-width: 360px) {
        width: 95%;
    }
`;

export const HeaderCart = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

export const LeftSection = styled.div`
    
`

export const RightSection = styled.div`
`

export const TitleCart = styled.h3`
    font-size: 27px;
    color: #FFFFFF;
`

export const CloseButton = styled.div`
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50% ;
    background-color: #000000;
    color: #FFFFFF;
`

export const ContainerCard = styled.div`
    height: calc(100vh - 300px); /* Altura total menos a altura da SectionTotal */
    max-height: calc(100vh - 200px); /* Altura máxima, deixando espaço para a SectionTotal */
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
    margin-left: 20px;

    @media (max-width: 360px) {
        height: calc(100vh - 200px); /* Ajuste para telas menores */
    }
`;


export const Content = styled.div`
   width: 100%;
   padding: 10px;
   margin-top: 30px;
   
`

export const Card = styled.div`
  position: relative; // Adicione esta linha para definir o posicionamento relativo
  width: 379px;
  height: 95px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const DeleteProductButton = styled.div`
  position: absolute;
  left: 95%; // Ajuste a posição conforme necessário
  top: 5%; // Ajuste a posição conforme necessário
  transform: translateY(-50%); // Ajuste a posição conforme necessário
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #FFFFFF;
  padding: 12px;

  @media (max-width: 360px) {
    right: 0; // Ajuste a posição conforme necessário
  }
`;

export const Image = styled.img`
    width: 48px;
    height: 57px;
    
    @media (max-width: 360px) {
        margin-right: 20px;
    }
`

export const ProductName = styled.div`
    width: 35%;
`

export const ContainerActions = styled.div`
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70px;
    height: 30px;
    border:1px solid #BFBFBF;
    border-radius: 8px;

    span {
        color: #000000;
        font-weight:600;
        cursor: pointer;
    }
    
    p{
        color: #000000;
        font-weight:600;
    }
    
    @media (max-width: 360px) {
        margin-right: 20px;
    }
`

export const Divider = styled.div`
    width: 1px;
    height: 10px;
    color: #BFBFBF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Price = styled.span`
    font-weight: 600;
`
export const ContainerTotal = styled.div`
   position: absolute; /* Altere para absoluto */
   bottom: 0;
   width: 100%; /* Ajuste a largura para ocupar toda a largura do Container */
`

export const SectionTotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    align-items: center;
    font-size: 28px;
    background-color: #0F52BA;
    color: #FFFFFF;
    width: 100%;

    @media (max-width: 360px) {
        width: 100%;
    }
`

export const TextTotal = styled.span`
    color: #FFFFFF;
    font-weight: 700;
`

export const TotalValue = styled.span`
    color: #FFFFFF;
    font-weight: 700;
`

export const ButtonBuy = styled.div`
    width: 486px;
    height: 100px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 28px;
    
     
    @media (max-width: 360px) {
        width: 350px;
    }

`

export const TextCartEmpty = styled.span`
    color: #FFFFFF;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`