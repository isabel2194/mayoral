import { render, screen } from "@testing-library/react";
import Product from "./Product";
import productMock from "../../pages/api/__mocks__/products.json";

const getFirstProduct = () => productMock.products[0];
const getProductWithEmptyImage = () => productMock.products[1];

describe("Product", () => {
  it("is render", () => {
    render(<Product {...getFirstProduct()}/>);
    expect(screen.getByTestId("product")).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).toBeInTheDocument();
    expect(screen.getByTestId("product-name")).toBeInTheDocument();
    expect(screen.getByTestId("product-price")).toBeInTheDocument();
    expect(screen.getByTestId("product-offered-price")).toBeInTheDocument();
    expect(screen.getByTestId("product-variants")).toBeInTheDocument();
  });
  it("load product with default image", () => {
    render(<Product {...getProductWithEmptyImage()}/>);
    expect(screen.getByTestId("empty-image")).toBeInTheDocument();
  });
});
