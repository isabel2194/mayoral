import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import style from "./Searcher.module.css";

type Props = {
  search: (search: string) => void;
};

const Searcher = ({search}: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    search(event.target.value);
  };

  return (
    <FormControl className={style.container} variant="outlined">
      <TextField
        id="search-element"
        type="text"
        InputProps={{startAdornment:<InputAdornment position="start"><SearchIcon /></InputAdornment>,
        style:{fontSize: 15 }}}
        placeholder="Buscar"
        size="small"
        onChange={handleChange}
        data-testid="searcher"
      />
    </FormControl>
  )
}

export default Searcher
