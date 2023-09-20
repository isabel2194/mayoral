import React from "react";
import { render, screen, waitForElementToBeRemoved, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import HomePage from "../../pages/index";
import productsMock from "../../pages/api/__mocks__/products.json";


const server = setupServer(
  rest.get("api/products", (req, res, ctx) => {
    return res(ctx.json(productsMock));
  })
);
describe("HomePage", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
  it("is render", async() => {
    render(<HomePage />);
    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
    await waitFor(()=>expect(screen.getByTestId("grid")).toBeInTheDocument());
    expect(screen.getByTestId("layout")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("searcher")).toBeInTheDocument();
    expect(screen.getByTestId("grid")).toBeInTheDocument();
  });
  it("when the user search 'test' and not exist results", async() => {
    render(<HomePage />);
    await waitFor(()=>expect(screen.getByTestId("grid")).toBeInTheDocument());
    userEvent.type(screen.getByTestId("searcher").querySelector("input"), "test");
    await waitFor(()=>expect(screen.getByTestId("empty-message")).toBeInTheDocument());
  });
  it("when the user search 'banda' and return 4 results", async() => {
    render(<HomePage />);
    await waitFor(()=>expect(screen.getByTestId("grid")).toBeInTheDocument());
    userEvent.type(screen.getByTestId("searcher").querySelector("input"), "banda");
    await waitFor(()=>expect(screen.queryByTestId("empty-message")).not.toBeInTheDocument());
    await waitFor(()=>expect(screen.getAllByTestId("product")).toHaveLength(4));
  });
});

