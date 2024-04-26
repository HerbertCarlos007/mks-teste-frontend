import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 101px;
    background-color: #0F52BA;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const Title = styled.h3`
    font-size: 40px;
    color: #FFFFFF;
    font-weight: 600;
    line-height: 19px;
`

export const Subtitle = styled.span`
    font-size: 20px;
    font-weight: 100;
    line-height: 17px;
    color: #FFFFFF;
    margin-top: 10px;
`

export const CartButton = styled.div`
    width: 90px;
    height: 45px;
    border-radius: 8px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    cursor: pointer;
    
`