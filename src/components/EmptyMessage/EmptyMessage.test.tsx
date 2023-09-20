import { render, screen } from "@testing-library/react";
import EmptyMessage from "./EmptyMessage";

describe("EmptyMessage", () => {
  it("is render", () => {
    render(<EmptyMessage />);
    expect(screen.getByTestId("empty-message")).toBeInTheDocument();
  });
});
