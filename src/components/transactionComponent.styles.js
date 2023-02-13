import styled from "styled-components";

export const DateWrapper = styled.div`
    background-color: #ecedef;
    height:40px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-right: 16px;
    color: #635d63;
    font-weight: 500;

`;

export const TransactionsWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 64px auto 0 auto;

`;

export const TransactionWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #ececec;
    padding: 18px 24px;
    display: flex;
    justify-content: space-between;

`;

export const TransactionInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ColoredText = styled.p`
    color:${props => props.color};
    font-weight: 500;
    font-size: 16px;
`;