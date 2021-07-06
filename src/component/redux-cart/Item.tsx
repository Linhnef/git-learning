import styled from "styled-components";



const CustomDiv = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    font-size: 17px;
    border-bottom:1px black solid;
`;

interface itemProps{
    name : string,
    price : number,
    amount : number,
    onClick: () => void
}
export const CustomItem = (props : itemProps) => {


    return <CustomDiv>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.amount}</p>
        <button onClick={props.onClick}>add</button>
    </CustomDiv>
}