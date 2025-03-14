import { Container } from "@material-ui/core";
import { Route } from "react-router-dom";
import HeroPanel from "../Components/HeroPanel";
import NavCardGroup from "../Components/NavCardGroup";
import WhyVacateAssistance from "./WhyVacateAssistance";
import WhyVacateEducation from "./WhyVacateEducation";
import WhyVacateEmployment from "./WhyVacateEmployment";
import WhyVacateHousing from "./WhyVacateHousing";

const pages = [
  {
    name: "Housing",
    link: "/why-vacate/housing",
  },
  {
    name: "Employment",
    link: "/why-vacate/employment",
  },
  {
    name: "Education",
    link: "/why-vacate/education",
  },
  {
    name: "Government assistance",
    link: "/why-vacate/government-assistance",
  },
];
const WhyVacatePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <HeroPanel
          title={"Why vacate"}
          subtitle={
            "A conviction vacation seals the offense from your record and will give you more chance to access:"
          }
        />
        <NavCardGroup subPages={pages} xs={12} sm={12} md={3} />
      </Container>
      <Route exact path="/why-vacate/housing">
        <WhyVacateHousing />
      </Route>
      <Route exact path="/why-vacate/employment">
        <WhyVacateEmployment />
      </Route>
      <Route exact path="/why-vacate/education">
        <WhyVacateEducation />
      </Route>
      <Route exact path="/why-vacate/government-assistance">
        <WhyVacateAssistance />
      </Route>
    </>
  );
};

export default WhyVacatePage;
