import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Stack from '@mui/material/Stack';
import style from "./EmptyMessage.module.css"; 

const EmptyMessage = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" className={style.container} data-testid="empty-message">
      <SentimentDissatisfiedIcon/>
      <p className={style.message}> No hay productos disponibles.</p>
    </Stack>
  )
}

export default EmptyMessage
