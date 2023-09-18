import { NextPage } from "next";
import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress";
import Layout from "components/Layout";
import Grid from "components/Grid";
import Product from "components/Product";
import EmptyMessage from "components/EmptyMessage";

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomePage: NextPage = () => {

  const { data, error } = useSWR('/api/products', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <CircularProgress />; 

  return <Layout>
    {data.products?.length > 0 ? 
      <Grid>
        {data.products?.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </Grid>:
      <EmptyMessage/>
    }
  </Layout>;
};

export default HomePage;
