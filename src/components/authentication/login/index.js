import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../store/actions/auth.js';
import Alert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, Button, Grid, Paper, InputLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
    Typography,
} from "@material-ui/core";
export default () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    // const email = useSelector(state => state.user.email);
    const error = useSelector(state => state.auth.error);
    const errorMessage = useSelector(state => state.auth.errorMessage);
    const redirectPath = useSelector(state => state.auth.authRedirectPath);
    const handleLogin = () => {
        const signInData = {
            email: email,
            password: password
        }
        dispatch(loginUser(signInData));
    }

    if (redirectPath) {
        return <Redirect to={redirectPath} />;
    }
    const index = props => {
        const { history } = props;
    }
    //const classes = useStyles();
    return (
        <div >
        <Card style={{ boxShadow: 'none',
                    width: "25rem",
                    marginTop: "8rem"
                    , marginLeft: "29rem" }}
                       >
                              <CardContent>
            <CssBaseline />
                <Grid
                    container
                    spacing={2}
                    direction="column"
                >
                    <Grid item xs={12}>
                        {error ? <Alert severity="error">{errorMessage}</Alert> : null}

                    </Grid>
                    <Grid container direction="column">
                     <Typography
                     variant="h5" gutterBottom
                     >
                         Log In to Your Account
                         
                         </Typography>   
                          <TextField
                            id="outlined-password-input"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            variant="outlined"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                        style={{marginTop:"1rem"}}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={e => setPassword(e.target.value)}
                        />

                        <Button
                          style={{marginTop:"1rem"}}
                           variant="contained"
                            color="primary"
                            width={1}
                            onClick={handleLogin}
                        //className={classes.button}
                        >Login</Button>
                    </Grid>
                    <Typography
                    style={{marginLeft:"16rem",marginTop:"2rem"}}
                     component={Link} to='/resetPassword' color='primary'>
               Forgot Password
              </Typography>

                </Grid>

                </CardContent>
        </Card>
                </div>
    )

}