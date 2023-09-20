import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searcher from "./Searcher";

describe("Searcher", () => {
  it("is render", () => {
    render(<Searcher search={jest.fn()}/>);
    expect(screen.getByTestId("searcher")).toBeInTheDocument();
  });
  it("write text to search", () => {
    const textToSearch = "test";
    render(<Searcher search={jest.fn()}/>);
    userEvent.type(screen.getByTestId("searcher"), textToSearch);
  });
});
