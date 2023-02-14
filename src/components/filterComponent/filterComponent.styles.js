import styled from "styled-components";
import { BiChevronDown } from 'react-icons/bi';

export const TransactionType = styled.p`
    font-weight: 500;
`;
export const FilterSectionWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0 24px;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 8px;
        gap: 8px;

    }
`;
export const FilterSection = styled.div`
  display: flex;
  gap: 8px;
  
`;

export const SearchInput = styled.input`
    border: 1px solid #8d8888;
    border-radius: 4px;
    ::placeholder{
        color:black;
        font-size: 14px;
        font-weight: 500;
    }

`
export const Dropdown = styled.div`
`;

export const DropdownSelectedItem = styled.div`
    border: 1px solid #8d8888;
    position: relative;
    cursor: pointer;
    width: 180px;
    height:32px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
    justify-content: space-between;
    padding-right: 4px;

`;
export const DropdownOptions = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: absolute;
    background-color: #f4f4f4;
    width: 180px;
    font-size: 14px;
    font-weight: 500;
`;
export const DropdownOption = styled.div`
    cursor: pointer;
    margin: 4px;
    padding: 4px;
    &:not(:last-child){
    border-bottom: 1px solid #8d8888;

    }
`;

export const Arrow = styled(BiChevronDown)`
    color: #fff;
    font-size: 24px;
`;

export const ArrowWrapper = styled.div`
   background-color: #567ee5;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 32px;
`;
