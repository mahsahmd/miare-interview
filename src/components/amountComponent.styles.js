import styled from "styled-components";

export const AmountWrapper = styled.p`
    direction: initial;
    color:${props => props.positive ? 'green' : 'red'}
`