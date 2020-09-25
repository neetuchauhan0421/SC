import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import ScalenutBody from "../../../resources/scalenutBody/2x/group-215@2x.png";
// import CordaLogo from "../../../resources/images/corda-logo.png";
// import bgImage from "../../../resources/images/bg-SignIn.png";

const styles = theme => ({
  grid1: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    minHeight: "100vh",
      // background: `url(${bgImage}) no-repeat fixed`,
    backgroundSize: "100% 100%"
  },
  sideDiv: {
    margin: "7% 10%"
  },
  logo: {
    // width: "70%"
    width: "320px",
    height: "325px",
    // object-fit: "contain"
  },

  cordaLogo: {
    width: "55%",
    marginLeft: "-1.5rem",
    marginTop: "-1.5rem"
  }
});

const AsideBody = props => {
  const { classes } = props;
  return (
    <Grid item md={4} className={classes.grid1}>
      <div className={classes.sideDiv}>
        <img src={ScalenutBody} alt="Logo" className={classes.logo} />
       
        {/* <img src={CordaLogo} alt="corda-logo" className={classes.cordaLogo} /> */}
        {/* <Typography
          variant="h6"
          style={{
            color: "#ffffff"
          }}>
          Corda
        </Typography> */}
      </div>
    </Grid>
  );
};

AsideBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AsideBody);
