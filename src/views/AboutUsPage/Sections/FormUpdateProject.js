import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Box } from "@material-ui/core";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";
import projectApi from "api/projectApi";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(contactStyle);
FormUpdateProject.propTypes = {
  id: PropTypes.string.isRequired,
};

export default function FormUpdateProject({ id }) {
  const [name, setName] = useState();
  const [des, setDes] = useState();
  const history = useHistory();
  console.log(id);
  const handleUpdate = async () => {
    const res = await projectApi.putProjectByID(id, {
      name: name,
      description: des,
    });
    console.log(res);
    history.push("/home");
  };
  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer justify="center">
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h4 className={classNames(classes.title, classes.textCenter)}></h4>
          {/* <h4 className={classNames(classes.description, classes.textCenter)}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will get back to you in a couple of hours.
          </h4> */}
          <form>
            <GridContainer>
              <GridItem md={20} sm={20}>
                <Box width={500}>
                  <TextField
                    fullWidth
                    placeholder="Name Project"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box width={500}>
                  <TextField
                    fullWidth
                    placeholder="Description"
                    id="description"
                    multiline
                    rowsMax={5}
                    onChange={(e) => setDes(e.target.value)}
                  />
                </Box>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem
                md={4}
                sm={4}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
                <Button color="primary" round onClick={handleUpdate}>
                  Save
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
