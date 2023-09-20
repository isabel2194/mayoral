import { useEffect, useState } from "react";
import { NextPage } from "next";
import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Grid from "../components/Grid/Grid";
import Product from "../components/Product/Product";
import EmptyMessage from "../components/EmptyMessage/EmptyMessage";
import { APISEOResponse, Product as ProductData } from "@types";

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomePage: NextPage = () => {

  const { data, error }: { data: APISEOResponse; error: string;} = useSWR("/api/products", fetcher);

  const [filteredProducts, setFilteredProducts] = useState<Array<ProductData>>(data?.products);

  useEffect(() => {
    setFilteredProducts(data?.products);
  }, [data]);

  const handleSearch = (search: string): void => {
    setFilteredProducts(data.products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())));
  };

  if (error) return <div>Failed to load</div>;

  if (!data) return <CircularProgress data-testid="loading"/>;

  return <Layout>
    <Header handleSearch={handleSearch}/>
    {filteredProducts?.length > 0 ?
      <Grid>
        {filteredProducts?.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </Grid> :
      <EmptyMessage />
    }
  </Layout>;
};

export default HomePage;
