import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


const top100Films = [{ title: 'The Shawshank Redemption', year: 1994 },
{ title: 'The Godfather', year: 1972 },
{ title: 'The Godfather: Part II', year: 1974 },
{ title: 'The Dark Knight', year: 2008 },
{ title: 'hdjaldsahdssalakhsd', year:2025}]



export default function ComboBox() {
  return (
    <>
    <Autocomplete
    disablePortal
    options={top100Films}
    getOptionLabel={(option) => option.title}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Movie" />}
    />      
    </>
  )
}
