import styled from "styled-components";


const Header = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: rgba(0,0,0,75);
    font-size: 25px;
    color: white;
`;
const CustomP = styled.p`
    margin-left: 200px;
    line-height: 70px;
`;

interface headerProps{
    children : any
}

export const CustomHeader = (props : headerProps) => {
    return <Header>
        <p>Redux Card</p>
        {props.children}
    </Header>
}