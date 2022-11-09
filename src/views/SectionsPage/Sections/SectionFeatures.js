import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormatPaint from "@material-ui/icons/FormatPaint";
import { Redirect } from "react-router-dom";
import "./css.css";
// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// import GroupWork from "@material-ui/icons/GroupWork";
// import Airplay from "@material-ui/icons/Airplay";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Extension from "@material-ui/icons/Extension";
// import ChildFriendly from "@material-ui/icons/ChildFriendly";
// import WatchLater from "@material-ui/icons/WatchLater";
// import Code from "@material-ui/icons/Code";
// import Dashboard from "@material-ui/icons/Dashboard";
// import ViewCarousel from "@material-ui/icons/ViewCarousel";
// import AccessTime from "@material-ui/icons/AccessTime";
// import AttachMoney from "@material-ui/icons/AttachMoney";
// import iphone from "assets/img/sections/iphone.png";
// import iphone2 from "assets/img/sections/iphone2.png";
// import bg9 from "assets/img/bg9.jpg";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
import projectApi from "api/projectApi.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  // load project by id
  const [project, setProject] = useState([]);
  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const response = await projectApi.getProjectByID(rest.idd);
        console.log("Fetch projects successfully: ", response);
        setProject(response);
      } catch (error) {
        console.log("Failed to fetch project list: ", error);
      }
    };
    fetchProjectList();
  }, []);

  // load list project item by id
  const [projectItemList, setProjectItemList] = useState([]);
  useEffect(() => {
    const fetchProjecItemList = async () => {
      try {
        const params = { projectID: rest.idd, page: 1, size: 10 };
        const response = await projectApi.getProjectItemByID(params);
        console.log("Fetch projects item successfully: ", response);
        setProjectItemList(response);
      } catch (error) {
        console.log("Failed to fetch project item list: ", error);
      }
    };
    fetchProjecItemList();
  }, []);

  const [projectType, setProjectType] = useState([]);
  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const response = await projectApi.getProjecTypeByID(
          project.projectTypeID
        );
        console.log("Fetch project type successfully: ", response);
        setProjectType(response);
      } catch (error) {
        console.log("Failed to fetch project type: ", error);
      }
    };
    fetchProjectList();
  }, []);

  const handleDeleteProject = () => {
    try {
      projectApi.deleteProject(project.id);
      return Redirect("/home");
    } catch (error) {
      console.log("Failed to fetch project type: ", error);
    }
  };

  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>{project.name}</h2>
              <h5 className={classes.description}>{project.description}</h5>
              <h5 className={classes.description}>{projectType.name}</h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            {projectItemList.map((sp) => {
              console.log(sp);
              return (
                <GridItem key={sp.id} xs={12} sm={4} md={4}>
                  <InfoArea
                    vertical
                    icon={FormatPaint}
                    title={sp.requirement}
                    description=""
                    iconColor="danger"
                  />
                  <h5 className={classes.description}>
                    Max price{sp.maxPrice} <br />
                    Min price{sp.minPrice} <br />
                  </h5>
                  <Link to={`/update-project-item/${sp.id}`}>
                    <Button
                      color="rose"
                      target="_blank"
                      className={classes.navButton}
                      round
                    >
                      Update
                    </Button>
                  </Link>
                  <Link to={`/project-item-detail/${sp.id}`}>
                    <Button
                      color="rose"
                      target="_blank"
                      className={classes.navButton}
                      round
                    >
                      View detail
                    </Button>
                  </Link>
                </GridItem>
              );
            })}
            <button className="button_delete" onClick={handleDeleteProject}>
              Delete project <b>{project.name}</b>
            </button>
          </GridContainer>
        </div>
        {/* Feature 1 END */}
        {/* Feature 2 START */}
        {/* <div className={classes.features2}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Why our product is the best</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={GroupWork}
                title="Collaborate"
                description={
                  <span>
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={Airplay}
                title="Airplay"
                description={
                  <span>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={LocationOn}
                title="Location Integrated"
                description={
                  <span>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
        </div> */}
        {/* Feature 2 END */}
        {/* Feature 3 START */}
        {/* <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer}>
                <img src={iphone} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>Your life will be much easier</h2>
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="Hundreds of Components"
                description="The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title="Easy to Use"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={WatchLater}
                title="Fast Prototyping"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div> */}
        {/* Feature 3 END */}
        {/* Feature 4 START */}
        {/* <div className={classes.features4}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Your life will be much easier</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
              <InfoArea
                icon={Code}
                title="For Developers"
                description="The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                iconColor="info"
              />
              <InfoArea
                icon={FormatPaint}
                title="For Designers"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={4}>
              <div className={classes.phoneContainer}>
                <img src={iphone2} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
              <InfoArea
                icon={Dashboard}
                title="Material-UI Grid"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="primary"
              />
              <InfoArea
                icon={ViewCarousel}
                title="Example Pages Included"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
        </div> */}
        {/* Feature 4 END */}
      </div>
      {/* Feature 5 START */}
      {/* <div
        className={classes.features5}
        style={{ backgroundImage: `url(${bg9})` }}
      >
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>Your life will be much easier</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Code}
                  title="For Developers"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={FormatPaint}
                  title="For Designers"
                  description={
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Dashboard}
                  title="Material-UI Grid"
                  description={
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Example Pages Included"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="Save Time"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Save Money"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div> */}
      {/* Feature 5 END */}
    </div>
  );
}
