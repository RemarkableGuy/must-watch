import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Avatar,
} from "@mui/material";
import Results from "../types/search-results";

type ResultsListProps = {
  results?: Results;
};

export default function ResultsList({ results }: ResultsListProps) {
  return (
    <List>
      {results?.movies.length ? (
        <ListSubheader>Movies</ListSubheader>
      ) : undefined}
      {results?.movies.map((movie) => (
        <ListItem key={movie.url} disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={movie.name} src={movie.image} />
            </ListItemAvatar>
            <ListItemText primary={movie.name} />
          </ListItemButton>
        </ListItem>
      ))}

      {results?.tvSeries.length ? (
        <ListSubheader>Series</ListSubheader>
      ) : undefined}
      {results?.tvSeries.map((tvSeries) => (
        <ListItem key={tvSeries.url} disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={tvSeries.title} src={tvSeries.image} />
            </ListItemAvatar>
            <ListItemText primary={tvSeries.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
