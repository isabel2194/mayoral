import style from "./Grid.module.css";

type Props = {
  children: React.ReactNode;
};

const Grid = ({children}: Props) => {
  return (
    <div className={`${style.container}`} data-testid="grid">
        {children}
    </div>
  )
}

export default Grid;
