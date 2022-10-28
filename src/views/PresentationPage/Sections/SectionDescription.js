import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";
// import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
// import Mail from "@material-ui/icons/Mail";
// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              This is a website that connects software engineering and graphic
              design students from FPT University.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={8}>
                <CustomInput
                  id="emailPreFooter"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.cardForm,
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                    placeholder: "Find project...",
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <Button
                  color="primary"
                  block
                  className={classes.subscribeButton}
                >
                  <Search className={classes.searchIcon} />
                </Button>
              </GridItem>
            </GridContainer>
          </form>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Name project"
                description="Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour."
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
              <Link to={"/sections"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  Project Item
                </Button>
              </Link>
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Name project"
                description="Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour."
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
              <Link to={"/sections"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  Project Item
                </Button>
              </Link>
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Name project"
                description="Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour."
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
              <Link to={"/sections"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  Project Item
                </Button>
              </Link>
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Name project"
                description="Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour."
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
              <Link to={"/sections"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  Project Item
                </Button>
              </Link>
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Multi-Purpose Sections"
                description="Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages."
                icon={ViewDay}
                iconColor="primary"
                vertical={true}
              />
              <Link to={"/sections"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  Project Item
                </Button>
              </Link>
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Example Pages"
                description="If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages."
                icon={ViewCarousel}
                iconColor="success"
                vertical={true}
              />
              <Link to={"/sections"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  Project Item
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
