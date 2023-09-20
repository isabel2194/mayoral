import { render, screen } from "@testing-library/react";
import EmptyImage from "./EmptyImage";

describe("EmptyImage", () => {
  it("is render", () => {
    render(<EmptyImage />);
    expect(screen.getByTestId("empty-image")).toBeInTheDocument();
  });
});
