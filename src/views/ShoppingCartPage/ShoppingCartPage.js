/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks3.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import projectApi from "api/projectApi.js";

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";

import face1 from "assets/img/faces/camp.jpg";

const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {
  //get project item by id
  const [projectItem, setProjectItem] = useState([]);
  useEffect(() => {
    const fetchProjectItem = async () => {
      try {
        const response = await projectApi.getProjecItemtByID(1);
        console.log("Fetch project item successfully: ", response);
        setProjectItem(response);
      } catch (error) {
        console.log("Failed to fetch project item: ", error);
      }
    };
    fetchProjectItem();
  }, []);

  // load project by id
  const [project, setProject] = useState([]);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await projectApi.getProjectByID(1);
        console.log("Fetch projects successfully: ", response);
        setProject(response);
      } catch (error) {
        console.log("Failed to fetch project: ", error);
      }
    };
    fetchProject();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Happy connection"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/bg4.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h2 className={classes.title}>{project.name}</h2>
              <h3 className={classes.title}>{project.description}</h3>
              {/* <h5 className={classes.title}> 
                 INFOMATION <br/>
                {projectItem.requirement} <br/>
                Max price: {projectItem.maxPrice} <br />
                Min price: {projectItem.minPrice} <br />
              </h5> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <br></br>
              <br></br>
              <h2 style={{color:"black"}} className={classes.title}> PROJECT ITEM</h2>
              <h3 style={{color:"black"}} className={classes.title}> {projectItem.requirement}</h3>
              <h5 style={{color:"black"}} className={classes.title}> 
                Max price: {projectItem.maxPrice} <br />
                Min price: {projectItem.minPrice} <br />
              </h5>
            </GridItem>
          </GridContainer>

          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>List apply</h3>
              <Table
                tableHead={["", "Name", "Requirement", "Time", "PRICE", ""]}
                tableData={[
                  [
                    // Image
                    <div className={classes.imgContainer} key={1}>
                      <img src={face1} alt="..." className={classes.img} />
                    </div>,
                    // Name
                    <span key={1}>
                      <a href="/profile-page" className={classes.tdNameAnchor}>
                        Name
                      </a>
                      <br />
                    </span>,
                    "Red",
                    "M",
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 549
                    </span>,
                    <Tooltip
                      key={1}
                      id="close1"
                      title=""
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="reddit" round>
                        Applied
                      </Button>
                    </Tooltip>,
                     <Tooltip
                     key={1}
                     id="close1"
                     title=""
                     placement="left"
                     classes={{ tooltip: classes.tooltip }}
                   >
                     <Button color="info" round>
                       Payment
                     </Button>
                   </Tooltip>,
                  ],
                  [
                    // Image
                    <div className={classes.imgContainer} key={1}>
                      <img src={face1} alt="..." className={classes.img} />
                    </div>,
                    // Name
                    <span key={1}>
                      <a href="/profile-page" className={classes.tdNameAnchor}>
                        Name
                      </a>
                      <br />
                    </span>,
                    "Red",
                    "M",
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 549
                    </span>,
                    <Tooltip
                      key={1}
                      id="close1"
                      title=""
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="warning" round>
                        Cancel
                      </Button>
                    </Tooltip>,
                     <Tooltip
                     key={1}
                     id="close1"
                     title=""
                     placement="left"
                     classes={{ tooltip: classes.tooltip }}
                   >
                     <Button color="info" round>
                       Payment
                     </Button>
                   </Tooltip>,
                  ],
                  [
                    // Image
                    <div className={classes.imgContainer} key={1}>
                      <img src={face1} alt="..." className={classes.img} />
                    </div>,
                    // Name
                    <span key={1}>
                      <a href="/profile-page" className={classes.tdNameAnchor}>
                        Name
                      </a>
                      <br />
                    </span>,
                    "Red",
                    "M",
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 549
                    </span>,
                    <Tooltip
                      key={1}
                      id="close1"
                      title=""
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="info" round>
                        Apply
                      </Button>
                    </Tooltip>,
                    <Tooltip
                    key={1}
                    id="close1"
                    title=""
                    placement="left"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="info" round>
                      Payment
                    </Button>
                  </Tooltip>,
                  ],
                  // {
                  //   purchase: true,
                  //   colspan: "3",
                  //   amount: (
                  //     <span>
                  //       <small>€</small>2,346
                  //     </span>
                  //   ),
                  //   col: {
                  //     colspan: 3,
                  //     text: (
                  //       <Button color="info" round>
                  //         Complete Purchase <KeyboardArrowRight />
                  //       </Button>
                  //     ),
                  //   },
                  // },
                ]}
                tableShopping
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.description,
                  classes.description,
                  classes.textRight,
                  classes.textRight,
                  classes.textRight,
                ]}
                customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                customCellClasses={[
                  classes.tdName,
                  classes.customFont,
                  classes.customFont,
                  classes.tdNumber,
                  classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                  classes.tdNumber + " " + classes.textCenter,
                ]}
                customClassesForCells={[1, 2, 3, 4, 5, 6]}
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer
        className={classes.footer}
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-login"
                    target="_blank"
                    className={classes.block}
                  >
                    Happy connection
                  </a>
                </ListItem>
                {/* <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-login"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="//blog.creative-tim.com/"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-login"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem> */}
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-login"
                target="_blank"
              >
                SWD GROUP
              </a>{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}
