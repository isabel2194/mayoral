import HideImageIcon from "@mui/icons-material/HideImage";
import style from "./EmptyImage.module.css"; 

const EmptyImage = () => {
  return (
    <div className={style.container} data-testid="empty-image">
      <HideImageIcon className={style.icon} color="action"/>
    </div>
  )
}

export default EmptyImage
