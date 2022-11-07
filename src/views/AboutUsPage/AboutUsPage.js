/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.js";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.js";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.js";
import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.js";
import SectionContact from "views/AboutUsPage/Sections/SectionContact.js";
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
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
        image={require("assets/img/bg9.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Add new project</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <SectionDescription />
          <SectionTeam />
          <SectionServices />
          <SectionOffice /> */}
          <SectionContact />
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
