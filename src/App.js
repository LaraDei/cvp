import "./App.css";
import { CssBaseline, ThemeProvider, Box } from "@material-ui/core";
import Theme from "./Components/Theme";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavigationAlt from "./Components/NavigationAlt";
import CalculatorPage from "./Pages/CalculatorPage";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import VolunteerPage from "./Pages/VolunteerPage";
import Footer from "./Components/Footer";
import WhyVacatePage from "./Pages/WhyVacatePage";
// import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <CssBaseline />
          <NavigationAlt />
          {/* <Navigation /> */}
          <Switch>
            <Route path="/404">
              <ErrorPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/calculator/:pageId">
              <CalculatorPage />
            </Route>
            <Route exact path="/calculator">
              <Redirect to="/calculator/landing-0" />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
            <Route exact path="/volunteer">
              <VolunteerPage />
            </Route>
            <Route path="/why-vacate">
              <WhyVacatePage />
            </Route>
          </Switch>
          <Footer />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
