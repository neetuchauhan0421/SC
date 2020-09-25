import React, { Component } from 'react'
import {
    Button,
    Typography,
    Box,
    Grid,
    TextField
} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { registerUser } from '../../../../src/store/actions/user';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import LockIcon from '@material-ui/icons/Lock';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
class index extends Component {
    state = {
        name: "",
        companyName: "",
        phone: "",
        password: ""
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.props.user)

        const signUpData = {
            userId: this.props.user.userId,
            name: this.state.name,
            companyName: this.state.companyName,
            phone: this.state.phone,
            password: this.state.password,
        };
        this.props.registerUser(signUpData, this.props.history);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        this.setState({
          [name]: value,
          errors: {},
        });
      };
      handlePhoneChange = (e) => {
        console.log(e.target)
        this.setState({
    phone:e.target.value    });
      };

    render() {
        return (

            <Grid container justify="center">
                <Box style={{ marginTop: "8rem" }} >
                    <Card style={{ padding: "4rem 6rem 6rem 6rem",marginTop:"-4rem" }}>
                        <Typography variant="h5" style={{
                            textAlign: "center",marginBottom:"2rem"
                        }}>
                            Create your Free Account
                           </Typography>

                            <TextField

                                style={{ width: "19rem",
                             }}
                                
                                label="Full Name"
                                id="standard-required"
                                margin="dense"
                                name='name'
                                onChange={this.handleChange}
                                variant="outlined"


                            />  
                          <PersonIcon 
                         color="disabled"
                          style={{marginLeft:"-2rem"
                          ,marginTop:"1rem"}}
                          />


                        <PhoneInput

                            country={'us'}
                             onChange={phone => this.setState({ phone })}
                            label="Contact Number"
                            id="standard-required"
                            margin="dense"
                            name='phone'
                           variant= "outlined"


                        />
                        {/* <PhoneIcon
                        color="disabled"
                        style={{marginLeft:"-1rem",
                         marginTop:"1rem"}}
                        /> */}
                        <TextField
                            style={{ width: "19rem" }}
                            label="Company Name"
                            id="standard-required"
                            margin="dense"
                            onChange={this.handleChange}
                            name='companyName'
                            variant="outlined"

                        />
                        <BusinessIcon
                       color="disabled"
                       style={{marginLeft:"-2rem",
                       marginTop:"1rem"}}

                        />
                        <br />
                        <TextField
                            style={{ width: "19rem" }}
                            label="Password"
                            id="standard-required"
                            margin="dense"
                            onChange={this.handleChange}
                            name='password'
                            variant="outlined"

                        />
                        <LockIcon
                        color="disabled"
                       style={{marginLeft:"-2rem",
                       marginTop:"1rem"}}

                        />
                        <br />
                        <Button variant="contained"
                        color="primary"
                            style={{ 
                            backgroundColor:"#30364c",   
                            marginBottom: "-5rem", 
                            marginLeft: "0rem",
                            width:"19rem" }}
                            onClick={this.onSubmit}

                        >
                            Create an Account
                    </Button>
                    </Card>
                </Box>
            </Grid>


        )
    }
}
index.propTypes = {
    history: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps,
    { registerUser })(withRouter(index));