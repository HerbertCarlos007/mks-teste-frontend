import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
  
    
    @media (max-width: 360px) {
        width: 50%;
    }
`

export const CardContainer = styled.div`
    margin-top: 40px; /* Adicione um espaçamento entre os cards e o footer */
    width: 70%;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-items: center;
    
    
    
    @media (min-width: 1600px) {
        width: 50%;
    }
    
    @media (max-width: 360px) {
        width: 25%;
    }
    
`

export const Card = styled.div`
    width: 218px;
    max-height: 285px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.14);
    border-radius: 8px;
`   

export const Image = styled.img`
    width: 111px;
    height: 138px;
`

export const ContainerProductNameAndPrice = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-left: 10px;
`

export const ProductName = styled.span`
    width: 60%;
    height: 30px;
`

export const Price = styled.div`
    width: 100px;
    padding: 10xp;
    height: 30px;
    background-color: #373737;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:8px;
    color: #FFFFFF

  
`

export const Description = styled.span`
    font-size: 10px;
    padding: 10px;
    margin-top: 15px;
`

export const ButtonBuy = styled.div`
    width: 100%;
    height: 31px;
    background-color: #0F52BA;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 8px;
`
