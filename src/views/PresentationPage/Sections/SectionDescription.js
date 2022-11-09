// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";
// import CardBody from "components/Card/CardBody.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Search from "@material-ui/icons/Search";
// import Mail from "@material-ui/icons/Mail";
// @material-ui icons
// import Apps from "@material-ui/icons/Apps";
// import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";
import React from "react";
// import { TextField } from "@material-ui/core";
// import projectApi from "api/projectApi";
import { useEffect, useState } from "react";
import projectApi from "api/projectApi";
const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const [projectList, setProjectList] = useState([]);
  // const [filterSearch, setFilterSearch] = useState([]);
  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const params = { userID: 4, page: 1, size: 10 };
        const response = await projectApi.getByUserID(params);
        setProjectList(response);
      } catch (error) {
        console.log("Failed to fetch project list: ", error);
      }
    };

    fetchProjectList();
  }, []);

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
          {/* <form>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={8}>
                <TextField
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
                  onChange={(e) => setFilterSearch(e.target.value)}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <Button
                  color="primary"
                  block
                  className={classes.subscribeButton}
                  onClick={(e) => setFilterSearch(e.target.value)}
                >
                  <Search className={classes.searchIcon} />
                </Button>
              </GridItem>
            </GridContainer>
          </form> */}
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
                  {/* <h5 className={classes.description}>{sp.description}</h5>
                  <h5 className={classes.description}>{projectType.name}</h5> */}
                  <Link to={`/update-project/${sp.id}`}>
                    <Button
                      color="rose"
                      target="_blank"
                      className={classes.navButton}
                      round
                    >
                      Update
                    </Button>
                  </Link>
                  <Link to={`/project-item/${sp.id}`}>
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
