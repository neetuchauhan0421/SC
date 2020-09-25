
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";
import LoginComp from "./logincall";
import { userEmail } from '../../../store/actions/user';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import { TextField, Button, Grid } from '@material-ui/core';




const styles = theme => ({
  email: {
    background: '#48a026',
    color: 'white',
  },
  gmail: {
    background: '#4385f5',
  },

});




class Home extends Component {
  state = {
    email: "",
    validationError: null,
  }
  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
    console.log(e.target.value)
  };
  handleEmail = (val) => {
    this.setState({
      validationError: null,
    });

    console.log(this.state.email)
    console.log(this.validateEmailFormat(this.state.email))
    if (this.validateEmailFormat(this.state.email)) {
      this.props.userEmail(this.state.email, this.props.history);
      console.log(this.state.email);
    }
    return;
  }

  validateEmailFormat = (emailText) => {
    console.log(emailText)
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   //const re=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    var pattern = new RegExp(re)
    if (emailText == '') {
      this.setState({
        validationError: "Please enter your email address",
      });
      return false;
    }
    else if (!pattern.test(emailText)) {
      this.setState({
        validationError: "Please enter your valid email address",
      });
      return false;
    }
    console.log(pattern.test(emailText))
    return true;
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={12} md={5}
        style={{ marginLeft: "23rem", marginTop: "7.5rem" }}>
        <Card style={{ boxShadow: 'none' }}>
          <CardContent>
            <CssBaseline />

            <Typography
              variant='h4'
              style={{
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: '1rem',
                marginTop: '1rem',
              }}
            >
              Get your free account
            </Typography>


            <Grid container justify='center'>
              <LoginComp />

            </Grid>
            <Divider style={{ marginTop: "2.5rem" }} />
            <Grid item xs={12}>
              {this.state.validationError ? <Alert severity="error">{this.state.validationError}</Alert> : null}
            </Grid>
            <Grid container direction="column" xs={12}>

              <TextField

                variant='outlined'
                margin='normal'
                fullWidth
                size='small'
                name='email'
                label='Enter with Email'
                value={this.state.email}

                id='email'
                style={{ marginTop: '3rem' }}
                autoComplete='email'
                onChange={this.handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#48a026' }}
                width={1}
                onClick={e => this.handleEmail(e.target.value)}
                className={classes.button}
              >Continue With Email</Button>
            </Grid>
            {/* <Typography
              variant="subtitle2"
              display="block"
              style={{ marginTop: "1rem" }}
              gutterBottom>
              Google Privacy Policy and terms of Service apply.
            </Typography> */}


          </CardContent>
        </Card>

      </Grid>

    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({});

export default withStyles(styles)(connect(mapStateToProps,
  { userEmail })(withRouter(Home))
);