import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;

    @media only screen and (max-width: 768px) {
        height: auto;
    }
`

export const RegistrationBox = styled.div`
    width: 100%;
    max-width: 1200px;
    border-radius: 14px;
    box-shadow: 1px 2px 10px 10px #cccccc;
    background-color: #ffffff;
    padding: 32px;
`

export const PageTitle = styled.h1`
    font-family: "Roboto";
    font-size: 2rem;
    color: #2d5327;
    text-align: center;
    margin: 0;
`

export const FormControlWrapper = styled.div`
    width: 100%;
    margin-top: 32px;
`

export const FlexEnd = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
