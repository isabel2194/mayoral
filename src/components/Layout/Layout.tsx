import style from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <div className={style.container} data-testid="layout">{children}</div>
  )
}

export default Layout
