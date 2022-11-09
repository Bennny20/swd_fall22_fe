import React from "react";
import "./css.css";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
// import FormControl from "@material-ui/core/FormControl";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  // const [specialitySelect, setSpecialitySelect] = React.useState("1");
  // const handleSpeciality = (event) => {
  //   setSpecialitySelect(event.target.value);
  // };
  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer justify="center">
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h1 className={classes.title}>Add new project item</h1>
          <form>
            <GridContainer>
              <GridItem md={20} sm={20}>
                <label>Apply num: </label>
                <input
                  className="CustomInput"
                  id="standard-basic"
                  // onChange={handleChangeValue}
                  name="nameProject"
                  // value={nameProject}
                  label="Name project"
                  variant="staDescriptionndard"
                />
                <label>Min price: </label>
                <input
                  className="CustomInput"
                  id="standard-basic"
                  // onChange={handleChangeValue}
                  name="nameProject"
                  // value={nameProject}
                  label="Name project"
                  variant="staDescriptionndard"
                />
                <label>Max price: </label>
                <input
                  className="CustomInput"
                  id="standard-basic"
                  // onChange={handleChangeValue}
                  name="nameProject"
                  // value={nameProject}
                  label="Name project"
                  variant="staDescriptionndard"
                />
                <label>Requiment: </label>
                <input
                  className="CustomInput"
                  id="standard-basic"
                  // onChange={handleChangeValue}
                  name="nameProject"
                  // value={nameProject}
                  label="Name project"
                  variant="staDescriptionndard"
                />
                {/* <FormControl
                  fullWidth
                  className={
                    classes.selectFormControl +
                    " " +
                    classes.selectUnderlineRoot
                  }
                >
                  <Select
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={specialitySelect}
                    onChange={handleSpeciality}
                    inputProps={{
                      name: "specialitySelect",
                      id: "speciality-select",
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem,
                      }}
                    >
                      Type
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="1"
                    >
                      I{"'"}m a Designer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="2"
                    >
                      I{"'"}m a Developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="3"
                    >
                      I{"'"}m a Hero
                    </MenuItem>
                  </Select>
                </FormControl> */}
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
                <Button color="primary" round>
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
