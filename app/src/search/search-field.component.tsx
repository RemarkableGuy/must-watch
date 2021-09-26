import { ChangeEventHandler } from "react";
import TextField from "@mui/material/TextField";

type SearchFieldProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
};

export default function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <TextField
      value={value}
      fullWidth
      onChange={onChange}
      label="Search movies and series"
      variant="outlined"
    />
  );
}
