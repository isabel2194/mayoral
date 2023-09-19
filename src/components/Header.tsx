import { ELEMENTS_BY_ROW } from "utils/utils";
import Searcher from "./Searcher";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import style from "./Header.module.css";

type Props = {
  handleSearch: (search: string) => void;
  changeView: (elements: number) => void;
  elements: number;
};

const Header = ({handleSearch,changeView,elements}: Props) => {
  return (
    <div className={style.container}>
      <Searcher search={handleSearch} />
      <div className={style.header_button_actions}>
        <IconButton aria-label="ver menos productos por fila" onClick={() => changeView(elements - 1)} disabled={elements=== ELEMENTS_BY_ROW.ROW_SMALL}>
          <RemoveIcon />
        </IconButton>
        <IconButton aria-label="ver más productos por fila" onClick={() => changeView(elements + 1)} disabled={elements === ELEMENTS_BY_ROW.ROW_NORMAL}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
