import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("is render", () => {
    render(<Header handleSearch={jest.fn()}/>);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("searcher")).toBeInTheDocument();
    expect(screen.getByTestId("header-reduce-view")).toBeInTheDocument();
    expect(screen.getByTestId("header-increase-view")).toBeInTheDocument();
  });
});
