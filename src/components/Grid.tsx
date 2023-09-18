import style from "./Grid.module.css";

const Grid = ({children}) => {
  return (
    <div className={style.container}>
        {children}
    </div>
  )
}

export default Grid
