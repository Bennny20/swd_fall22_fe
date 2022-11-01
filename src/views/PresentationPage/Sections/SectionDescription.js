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
// import Apps from "@material-ui/icons/Apps";
// import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles(descriptionStyle);

SectionDescription.propTypes = {
  projectList: PropTypes.node.isRequired,
};
export default function SectionDescription({ projectList }) {
  // const { projectList } = projectList;
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
            {projectList.map((sp) => {
              console.log(sp);
              return (
                <GridItem key={sp.id} md={4} sm={4}>
                  <InfoArea
                    title={sp.name}
                    description={sp.description}
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
              );
            })}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
