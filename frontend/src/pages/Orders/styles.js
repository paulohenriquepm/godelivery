import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #F5F5F5;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 1024px;
    padding: 64px 0;
`;

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-bottom: 48px;

    h1 {
        color: #444444;
        font-weight: bold;
        margin-bottom: 40px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const SearchInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px;
    height: 40px;
    width: 300px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    background: #fff;

    &:focus-within {
        border-color: #4D85EE;
    }

    input {
        border: none;
    }

    svg {
        color: #444444;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    background: #4D85EE;  
    color: #fff;
    width: 200px;
    height: 40px;
    border: 1px solid #4D85EE;
    border-radius: 4px;
`;

export const Table = styled.table`
    border-spacing: 0px;

    thead tr th {
        text-align: left;
        font-size: 24px;
        color: #444444;

        &.id {
            width: 80px;
        }

        &.actions {
            width: 100px;
            text-align: center;
        }

        &.status {
            width: 60px;
        }

        &.recipient,
        &.deliveryman, 
        &.city, 
        &.states {
            width: 170px;
        }
    }

    tbody::before {
        height: 32px;
        display: table-row;
        content: '';
    }

    tbody tr td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 24px 0;
        background: #fff;
        color: #666666;

        &.id {
            width: 80px;
            padding-left: 8px;
        }

        &.actions {
            width: 100px;
            text-align: center;
        }

        &.status {
            width: 60px;
            text-align: center;
        }

        &.recipient,
        &.deliveryman, 
        &.city, 
        &.state {
            width: 170px;
        }

        &.status {
            div {
                text-align: center;
                font-size: 10px;
                font-weight: bold;
                padding: 4px 16px;
                border-radius: 4px;
            }

            &.delivered div {
                color: #2CA42B;
                background: #DFF0DF;
            }

            &.pending div {
                color: #C1BC35;
                background: #F0F0DF;
            }

            &.canceled div {
                color: #DE3B3B;
                background: #FAB0B0;
            }

            &.withdrawal div {
                color: #4D85EE;
                background: #BAD2FF;
            }
        }
    }
`;
