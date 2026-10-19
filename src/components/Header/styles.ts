import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #4558e7;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const HeaderTitle = styled.h1`
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
`;

interface AuthButtonProps{
    isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
    border: none;
    border-radius: 5px;
    height: 3   0px;
    padding: 0 1rem;
    background-color: ${(props) => props.isLogged? "red" : "#176c12"};
    color: white;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.3rem;
    svg {
        font-size: 0.8rem;
    }
`;

export const CartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: #c943ac;
    color: black;

    display: flex;
    align-items: center;
    gap: 0.3rem;
    svg {
        font-size: 0.8rem;
    }
`;