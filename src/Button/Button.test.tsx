import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant classes", () => {
    const { container } = render(<Button variant="secondary">Button</Button>);
    expect(container.firstChild).toHaveClass("button--secondary");
  });

  it("applies size classes", () => {
    const { container } = render(<Button size="large">Button</Button>);
    expect(container.firstChild).toHaveClass("button--large");
  });

  it("handles disabled state", () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    expect(container.firstChild).toBeDisabled();
    expect(container.firstChild).toHaveClass("button--disabled");
  });

  it("renders icon correctly", () => {
    const { container } = render(<Button icon="🚀">With Icon</Button>);
    expect(container.firstChild).toHaveClass("button");
    expect(container.querySelector(".button__icon")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Button>Save</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
