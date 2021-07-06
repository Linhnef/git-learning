import * as React from 'styled-components';
import styled from 'styled-components';

export const CustomButton = styled.button`
    display: inline-block;
    float : right;
    margin-right: 5%;
    margin-top: 20px;
    padding: 1rem 4rem;
    padding-right: 3.1rem;
    font-size: 1.4rem;
    letter-spacing: 0.8rem;
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;
    &:hover{
        background-color: black;
        color: white;
    }

`;