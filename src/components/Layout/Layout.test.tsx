import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("is render", () => {
    render(<Layout>{"test"}</Layout>);
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });
});
