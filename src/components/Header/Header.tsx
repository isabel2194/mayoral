import { useState, useEffect } from "react";
import { ELEMENTS_BY_ROW } from "../../utils/utils";
import Searcher from "../Searcher/Searcher";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import style from "./Header.module.css";

type Props = {
  handleSearch: (search: string) => void;
};

const Header = ({handleSearch}: Props) => {

  const [numColumns, setNumColumns] = useState<number>(5);

  useEffect(() => {
    setNumColumns(Number(getComputedStyle(document.documentElement).getPropertyValue("--num-of-columns")));
  }, []);


  const changeView = (elements: number): void => {
    if (elements < ELEMENTS_BY_ROW.ROW_SMALL || elements > ELEMENTS_BY_ROW.ROW_NORMAL) return;
    document.documentElement.style.setProperty("--num-of-columns", String(elements));
    setNumColumns(elements);
  };

  return (
    <div className={style.container} data-testid="header">
      <Searcher search={handleSearch} />
      <div className={style.header_button_actions}>
        <IconButton
          aria-label="ver menos productos por fila"
          onClick={() => changeView(numColumns - 1)}
          disabled={numColumns <= ELEMENTS_BY_ROW.ROW_SMALL}
          data-testid="header-reduce-view">
          <RemoveIcon />
        </IconButton>
        <IconButton
          aria-label="ver más productos por fila"
          onClick={() => changeView(numColumns + 1)}
          disabled={numColumns === ELEMENTS_BY_ROW.ROW_NORMAL}
          data-testid="header-increase-view">
          <AddIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
