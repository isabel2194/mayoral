import { ELEMENTS_BY_ROW } from "utils/utils";
import style from "./Grid.module.css";

type Props = {
  children: React.ReactNode;
  elementsByRow: number;
};

const Grid = ({children, elementsByRow}: Props) => {
  return (
    <div className={`${style.container} ${elementsByRow === ELEMENTS_BY_ROW.ROW_MEDIUM ? style.medium_grid : ""} ${elementsByRow === ELEMENTS_BY_ROW.ROW_SMALL ? style.small_grid : ""}`}>
        {children}
    </div>
  )
}

export default Grid
