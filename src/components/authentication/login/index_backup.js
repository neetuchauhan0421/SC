import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  email: {
    background: '#48a026',
    color: 'white',
  },
  gmail: {
    background: '#4385f5',
  },

});


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: '',
      password: '',
      message: '',
    };
  }


  // to show the visibility icon
  handleClickPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };


  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let isError = this.validate();
  //   if (!isError) {
  //     trackEvent('Login', 'Sign in clicked', null);
  //     this.setState({ disableLoginButton: true });
  //     const signInData = {
  //       email: this.state.email,
  //       password: this.state.password,
  //     };
  //     this.props.loginUser(signInData, this.props.history);
  //   }
  // };


  render() {
   
    return (
      <Grid item xs={12} sm={12} md={5}
        style={{ marginLeft: "23rem", marginTop: "5rem" }}>
        <Card style={{ boxShadow: 'none' }}>
          <CardContent>
            <CssBaseline />

            <Typography
              variant='h6'
              style={{
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: '1rem',
                marginTop: '1rem',
              }}
            >
              Sign in with email
            </Typography>
            <Divider />

            <Typography
              variant='body1'
              style={{
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: '1rem',
                marginTop: '1rem',
              }}
            >
              To continue,first verify it's you
            </Typography>

            <Grid container justify='center'>
            </Grid>
            <Grid container justify='center'>
              <Grid item xs={12} sm={10} md={9}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  size='small'
                  name='password'
                  label='Enter your password'


                  style={{ marginBottom: '1rem' }}

                />
              </Grid>
            </Grid>

            <Grid>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                style={{ marginLeft: "22rem" }}
                onClick={
                  () => this.props.history.push({ pathname: `/` })}
              >
                Next


</Button>

            </Grid>

          </CardContent>
        </Card>

      </Grid>

    );
  }
}

index.propTypes = {
  history: PropTypes.object.isRequired,
};



// export default withStyles(styles)(index);
export default withStyles(styles)(index);


