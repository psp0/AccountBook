import { render, screen } from "@testing-library/react";
import ViewContainer from "./ViewContainer";

test("renders 달력", () => {
  render(<ViewContainer />);
  const textElement = screen.getByText(/달력위치/i);
  expect(textElement).toBeInTheDocument();
});
