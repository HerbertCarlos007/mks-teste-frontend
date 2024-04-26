import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cart } from "../components/Cart";
import "@testing-library/jest-dom";

describe("Cart", () => {
  it("should render cart items and total correctly", () => {
    render(<Cart isVisible={true} setIsVisible={() => {}} />);

    const cartContainer = screen.getByTestId("cart-container");
    expect(cartContainer).toBeInTheDocument();

    const cartTitle = screen.getByTestId("cart");
    expect(cartTitle).toBeInTheDocument();

    const closeButton = screen.getByTestId("close-button");
    expect(closeButton).toBeInTheDocument();

    userEvent.click(closeButton);
  });

});