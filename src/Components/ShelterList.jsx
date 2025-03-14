import {
  List,
  ListItem,
  Grid,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { HomeWorkOutlined } from "@material-ui/icons";
import { Call } from "@material-ui/icons";
import { useResourcesStyles } from "../Styles/useResourcesStyles";
import { ListItemLink } from "../ui-kit/ListItemLink";

const ShelterList = ({ shelters }) => {
  const classes = useResourcesStyles();
  return (
    <List>
      {shelters.map((shelter, idx) => (
        <ListItem key={idx} style={{ display: "block" }} divider>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography>{shelter.name} </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItemLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${shelter.name}+${shelter.address}+${shelter.city}`}
                >
                  <ListItemIcon>
                    <HomeWorkOutlined className={classes.shelterIcon} />
                  </ListItemIcon>
                  <ListItemText
                    primary={shelter.address + " " + shelter.city}
                  />
                </ListItemLink>
                <ListItemLink
                  href={`tel:+${shelter.phone}`}
                  data-rel="external"
                >
                  <ListItemIcon>
                    <Call className={classes.shelterIcon} />
                  </ListItemIcon>
                  <ListItemText primary={shelter.phone} />
                </ListItemLink>
              </List>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default ShelterList;
