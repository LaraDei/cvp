import { Container } from "@material-ui/core";
import { Route } from "react-router-dom";
import HeroPanel from "../Components/HeroPanel";
import NavCardGroup from "../Components/NavCardGroup";
import DonatePage from "./DonatePage";
import PartnerPage from "./PartnerPage";
import VolunteerPage from "./VolunteerPage";

const subPages = [
  {
    name: "Volunteer",
    link: "/get-involved/volunteer",
    desc: "Join our dedicated volunteer team and help us bring the resources to those who need them.",
  },
  {
    name: "Donate",
    link: "/get-involved/donate",
    desc: "Your gift makes it possible to continue helping our community. ",
  },
  {
    name: "Partner with us",
    link: "/get-involved/partner-with-us",
    desc: "Create change by sharing our story and reaching out to your peers.",
  },
];

const GetInvolvedPage = () => {
  return (
    <Container>
      <HeroPanel
        title={"Get involved"}
        subtitle={
          "There are many ways to participate with the CVP team, and we appreciate all of them!"
        }
      />
      <NavCardGroup subPages={subPages} xs={12} sm={12} md={4} />

      <Route exact path="/get-involved/volunteer">
        <VolunteerPage />
      </Route>
      <Route exact path="/get-involved/donate">
        <DonatePage />
      </Route>
      <Route exact path="/get-involved/partner-with-us">
        <PartnerPage />
      </Route>
    </Container>
  );
};

export default GetInvolvedPage;
