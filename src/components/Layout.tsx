import style from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <div className={style.container}>{children}</div>
  )
}

export default Layout
