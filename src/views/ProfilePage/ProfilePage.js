/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import christian from "assets/img/faces/christian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import projectApi from "api/projectApi.js";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  const id = 4;
  console.log("User id: " + id);

  //get app mảjor
  // const [majorList, setMajorList] = useState([]);
  // useEffect(() => {
  //   const fetchProjectList = async () => {
  //     try {
  //       const params = { page: 1, size: 10 };
  //       const response = await projectApi.getAllMajor(params);
  //       console.log("Fetch major successfully: ", response);
  //       setMajorList(response);
  //     } catch (error) {
  //       console.log("Failed to fetch major list: ", error);
  //     }
  //   };
  //   fetchProjectList();
  // }, []);

  // get user by id
  const [user, setUser] = useState([]);
  const [roleDes, setroleDes] = useState("");
  const [malorDes, setmalorDes] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await projectApi.getUserByID(id);
        console.log("Fetch user successfully: ", response);
        setUser(response);
        setroleDes(response.role.description);
        setmalorDes(response.major.description);
      } catch (error) {
        console.log("Failed to fetch user ", error);
      }
    };
    fetchUser();
  }, []);

  const [projectList, setProjectList] = useState([]);
  const [typeID, setTypeID] = useState([]);
  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const params = { userID: id, page: 1, size: 10 };
        const response = await projectApi.getByUserID(params);
        console.log("Fetch projects successfully: ", response);
        setProjectList(response);
      } catch (error) {
        console.log("Failed to fetch type list: ", error);
      }
    };
    fetchProjectList();
  }, []);

  const [projectType, setProjectType] = useState([]);
  useEffect(() => {
    const fetchProjectType = async () => {
      try {
        const params = { page: 1, size: 10 };
        const response = await projectApi.getAllProjectType(params);
        console.log("Fetch project type successfully: ", response);
        setProjectType(response);
      } catch (error) {
        console.log("Failed to fetch tpe item: ", error);
      }
    };
    fetchProjectType();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Header
        color="transparent"
        brand="Happy Connection"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/examples/city.jpg").default}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={christian} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{user.fullname}</h3>
                  <h4>Major: {malorDes}</h4>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <h5>Email: {user.email}</h5>
            <h5>Phone: {user.phone}</h5>
            <h5>Role: {roleDes}</h5>
            <h5>Day of birth: {user.dob}</h5>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "History",
                  tabIcon: Camera,
                  tabContent: (
                    <div>
                      <table className="" style={{ width: "100%" }}>
                        <thead>
                          <tr className="thead_tr">
                            <th style={{ padding: "20px 0px" }}></th>
                            <th style={{ padding: "20px 0px" }}>Name</th>
                            <th style={{ padding: "20px 0px" }}>Description</th>
                            <th style={{ padding: "20px 0px" }}>Type</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {projectList.map((sp) => {
                            console.log(sp);
                            return (
                              <tr>
                                <td></td>
                                <td style={{ padding: "5px 0px" }}>
                                  {sp.name}
                                </td>
                                <td style={{ padding: "5px 0px" }}>
                                  {sp.description}
                                </td>
                                <td style={{ padding: "5px 0px" }}>
                                  {sp.projectTypeID}
                                </td>
                                <td></td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      {/* <GridContainer justify="center">
                        {projectList.map((sp) => {
                          console.log(sp);
                          return (
                            <GridItem
                              xs={12}
                              sm={12}
                              md={5}
                              className={classes.gridItem}
                            >
                              <Card profile plain className={classes.card}>
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={7}>
                                    <CardBody plain>
                                      <h4 className={classes.cardTitle}>
                                        {sp.name}
                                      </h4>
                                      <Muted>
                                        <h6>
                                          {" "}
                                          Type: {projectType.projectTypeID}
                                        </h6>
                                      </Muted>
                                      <p className={classes.description}>
                                        Description: {sp.description}
                                      </p>
                                      <p className={classes.description}>
                                        Status: {sp.status}
                                      </p>
                                    </CardBody>
                                  </GridItem>
                                </GridContainer>
                              </Card>
                            </GridItem>
                          );
                        })}
                      </GridContainer> */}
                    </div>
                  ),
                },
                {
                  tabButton: "Order",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={mariyaGeorgieva}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={clemOnojegaw}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={clemOnojeghuo}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={oluEletu}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={cynthiaDelRio}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  ),
                },
              ]}
            />
          </div>
          <Clearfix />
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
