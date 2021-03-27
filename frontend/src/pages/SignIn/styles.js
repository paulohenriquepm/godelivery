import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    background: #4D85EE;    
`;

export const Content = styled.div`
    padding: 48px 32px;
    width: 360px;
    border-radius: 4px;
    background: #fff;

    h1 {
        color: #4D85EE;
        font-size: 32px;
        text-align: center;
        letter-spacing: 5px;
        margin-bottom: 32px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;

    label {
        color: #444444;
        margin-bottom: 8px;
    }

    input {
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #444444;

        &:focus {
            border-color: #4D85EE;
        }
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    background: #4D85EE;  
    color: #fff;
    border: 1px solid #4D85EE;
    border-radius: 4px;
`;