import { Box, Typography, Container, makeStyles } from "@material-ui/core";
import SecondaryButton from "../../ui-kit/SecondaryButton";

const useStyles = makeStyles((theme) => ({
  mainText: {
    minWidth: 150,
    fontFamily: ["Roboto", "sans-serif"],
    fontSize: 22,
  },
  backgroundSecondary: {
    minHeight: 250,
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    align: "center",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 300,
    },
  },
  buttonBoxStyles: {
    marginTop: theme.spacing(5),
    justifyContent: "center",
    display: "flex",
  },
}));

export const TextWithCTAButton = (props) => {
  const { text, buttonText, buttonLinkTo } = props;
  const classes = useStyles();
  return (
    <>
      <Box className={classes.backgroundSecondary}>
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            className={classes.mainText}
            align="center"
          >
            {text}
          </Typography>
          <Box className={classes.buttonBoxStyles}>
            <SecondaryButton linkTo={buttonLinkTo} text={buttonText} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
