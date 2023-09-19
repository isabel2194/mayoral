import { useEffect, useState } from "react";
import { NextPage } from "next";
import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";
import Layout from "components/Layout";
import Grid from "components/Grid";
import Product from "components/Product";
import EmptyMessage from "components/EmptyMessage";
import Searcher from "components/Searcher";
import { ELEMENTS_BY_ROW } from "utils/utils";

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomePage: NextPage = () => {

  const { data, error } = useSWR('/api/products', fetcher);

  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>(data?.products);
  const [elementsRow, setElementsRow] = useState<number>(ELEMENTS_BY_ROW.ROW_NORMAL);

  useEffect(() => {
    setFilteredProducts(data?.products);
  }, [data]);

  const handleSearch = (search: string): void => {
    setFilteredProducts(data.products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())));
  };

  const changeView = (elements: number): void => {
    if (elements < ELEMENTS_BY_ROW.ROW_SMALL || elements > ELEMENTS_BY_ROW.ROW_NORMAL) return;
    switch (elements) {
      case ELEMENTS_BY_ROW.ROW_SMALL:
        setElementsRow(ELEMENTS_BY_ROW.ROW_SMALL);
        break;
      case ELEMENTS_BY_ROW.ROW_MEDIUM:
        setElementsRow(ELEMENTS_BY_ROW.ROW_MEDIUM);
        break;
      default:
        setElementsRow(ELEMENTS_BY_ROW.ROW_NORMAL);
        break;
    };
  };

  if (error) return <div>Failed to load</div>;

  if (!data) return <CircularProgress />;

  return <Layout>
    <div className="header">
      <Searcher search={handleSearch} />
      <div className="header-button-actions">
        <IconButton aria-label="ver menos productos por fila" onClick={() => changeView(elementsRow - 1)} disabled={elementsRow === ELEMENTS_BY_ROW.ROW_SMALL}>
          <RemoveIcon />
        </IconButton>
        <IconButton aria-label="ver más productos por fila" onClick={() => changeView(elementsRow + 1)} disabled={elementsRow === ELEMENTS_BY_ROW.ROW_NORMAL}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
    {filteredProducts?.length > 0 ?
      <Grid elementsByRow={elementsRow}>
        {filteredProducts?.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </Grid> :
      <EmptyMessage />
    }
  </Layout>;
};

export default HomePage;
