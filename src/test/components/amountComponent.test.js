import React from 'react';
import { render, cleanup, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import AmountComponent from "../../components/amountComponent/AmountComponent"

describe('amount component', () => {
    afterEach(cleanup);
    it('render the amount with a plus sign for positive numbers', () => {
        render(<AmountComponent amount={2000} />);
        expect(screen.getByTestId('amount').textContent).toBe('+ 2000');
    });
    it('render the amount if the amount is negative', () => {
        render(<AmountComponent amount={-2000} />);
        expect(screen.getByTestId('amount').textContent).toBe('-2000');
    });
    it('render the a text if the amount is negative', () => {
        render(<AmountComponent amount={0} />);
        expect(screen.getByTestId('amount').textContent).toBe('رایگان');


    })
})