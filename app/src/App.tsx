import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ChangeEvent, useMemo, useState, useEffect } from "react";
import ResultsList from "./search/results.component";
import Search from "./search/search";
import SearchField from "./search/search-field.component";
import Results from "./types/search-results";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Results | undefined>();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      Search.getResults(searchQuery).then((results) =>
        setSearchResults(results)
      );
    } else {
      setSearchResults(undefined);
    }
  }, [searchQuery]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Must Watch
        </Typography>

        <SearchField value={searchQuery} onChange={handleChange} />
        <ResultsList results={searchResults} />
      </Container>
    </ThemeProvider>
  );
}
