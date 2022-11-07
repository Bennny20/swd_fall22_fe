import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import projectApi from "api/projectApi";
import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  const [projectTypeList, setProjectTypeList] = useState([]);
  useEffect(() => {
    const fetchProjectTypeList = async () => {
      try {
        const params = { page: 1, size: 10 };
        const response = await projectApi.getAllProjectType(params);
        console.log("Fetch projects successfully: ", response);
        setProjectTypeList(response);
      } catch (error) {
        console.log("Failed to fetch project list: ", error);
      }
    };
    fetchProjectTypeList();
  }, []);

  const [specialitySelect, setSpecialitySelect] = React.useState("1");
  const handleSpeciality = (event) => {
    setSpecialitySelect(event.target.value);
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
                <CustomInput
                  labelText="Name project"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Time"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Description"
                  id="description"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                  }}
                />
                <FormControl
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
                    {projectTypeList.map((sp) => {
                      console.log(sp);
                      return (
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          key={sp.id}
                          value={sp.name}
                        >
                          {sp.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
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
