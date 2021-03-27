import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    width: 100%;
    background: #fff;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1024px;

    nav {
        display: flex;
        align-items: center;

        strong {
            color: #4D85EE;
            font-size: 32px;
            margin-right: 64px;
        }

        a {
            color: #999999;

            & + a {
                margin-left: 32px;
            }

            &.selected {
                color: #444444;
            }
        }
    }

    aside {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span {
            color: #444444;
            margin-bottom: 4px;
        }

        button {
            background: none;
            border: none;
            color: #DE3B3B;
        }
    }
`;