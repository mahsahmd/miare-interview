import styled from "styled-components";

export const DateWrapper = styled.div`
    background-color: #ecedef;
    height:40px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-right: 24px;
    color: #363336;
    font-weight: 500;

`;

export const TransactionsWrapper = styled.div`
    margin-top: 24px;

`;

export const TransactionWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #ececec;
    padding: 18px 24px;
    display: flex;
    justify-content: space-between;
       font-weight: 500;
    font-size: 14px;

`;

export const TransactionInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ColoredText = styled.p`
    color:${props => props.color};
 
`;