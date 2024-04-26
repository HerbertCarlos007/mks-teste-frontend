import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "../components/Header";

describe("Header", () => {
  it("should render cart button with quantity", () => {
    const setIsVisible = jest.fn();
    render(<Header setIsVisible={setIsVisible} />);

    const cartButton = screen.getByTestId("cart-button");
    expect(cartButton).toBeInTheDocument();

    expect(cartButton).toHaveTextContent("0");

    userEvent.click(cartButton);

    setTimeout(() => {
      expect(cartButton).toHaveTextContent("1");
    }, 0);
  });
});
