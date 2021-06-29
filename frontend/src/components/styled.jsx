import styled from "styled-components";

export const BtnDefaultIcons = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4ms;
    &:hover {
        background-color: #ccc;
    }
    .center {
        text-align: center;
        width: 100%;
    }
`;

export const BtnDefault = styled(BtnDefaultIcons)`
    background-color: #7d2ae8;
    color: #fff;
    display: inline;
    &:hover {
        background-color: #4e129c;
    }
`; 