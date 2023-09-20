import { render, screen } from "@testing-library/react";
import Grid from "./Grid";

describe("Grid", () => {
  it("is render", () => {
    render(<Grid>{"test"}</Grid>);
    expect(screen.getByTestId("grid")).toBeInTheDocument();
  });
});
