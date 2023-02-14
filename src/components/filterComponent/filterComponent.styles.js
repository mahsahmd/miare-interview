import styled from "styled-components";

export const FilterSectionWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0 24px;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: start;
    }
`;
export const FilterSection = styled.div`
  display: flex;
  gap: 8px;
  
`;

export const SearchInput = styled.input`
    border: 1px solid #8d8888;
    ::placeholder{
        color:black;
        font-size: 14px;
    }

`
export const Dropdown = styled.div``;

export const DropdownSelectedItem = styled.div`
    border: 1px solid #8d8888;
    position: relative;
    cursor: pointer;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
`;
export const DropdownOptions = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: absolute;
    background-color: #fff;
    min-width: 120px;
    padding: 8px;
`;
export const DropdownOption = styled.div`
    cursor: pointer;
    margin: 4px 0;
`;


