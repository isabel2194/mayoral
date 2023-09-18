import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Stack from '@mui/material/Stack';
import styles from "./EmptyMessage.module.css"; 

const EmptyMessage = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" className={styles.container}>
      <SentimentDissatisfiedIcon/>
      <p className={styles.message}> There are no products.</p>
    </Stack>
  )
}

export default EmptyMessage
