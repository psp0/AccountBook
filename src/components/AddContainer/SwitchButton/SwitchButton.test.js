import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SwitchButton from "./SwitchButton";

test("수입지출 토글 클릭", () => {
  const mockSetAmount = jest.fn();
  const mockSetIsExpenditure = jest.fn();

  render(
    <SwitchButton
      isExpenditure={true}
      setIsExpenditure={mockSetIsExpenditure}
      amount={0}
      setAmount={mockSetAmount}
    />
  );
  fireEvent.click(screen.getByText("-지출"));
  let incomeText = screen.getByText("+수입");
  expect(incomeText).toBeInTheDocument();

  fireEvent.click(screen.getByText("+수입"));
  let expenditureText = screen.getByText("-지출");
  expect(expenditureText).toBeInTheDocument();
});
