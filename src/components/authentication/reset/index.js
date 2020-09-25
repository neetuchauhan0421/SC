import React, { useState } from 'react'
import useStyles, {theme} from './indexStyle.js';
import Alert from '@material-ui/lab/Alert';
import {TextField, Button, Grid, Paper, InputLabel} from '@material-ui/core';
import {resetPassword} from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';


export default () => 
{
    const [email, setEmail] = useState("");
    const [validationError, setValidationError] = useState(null);
    const dispatch = useDispatch();
    const handleEmail = (val) => {
        if(validationError){
            setValidationError(null);
        }
        setEmail(val);
        return;
    }

    function validateEmailFormat(emailText){
        if (emailText == '') {
            setValidationError("Please enter your email address");
            return false;
        }    
        
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(emailText)) {
            setValidationError("Please enter valid email address");
            return false;
        }
      }
    
    
    const sendRecoveryLink=(event)=>{
                    console.log(email);
             dispatch(resetPassword(email));

        setValidationError(null);
        if (validateEmailFormat(email)){

         

        }
    }


    // function sendRecoveryLink(){
    //     event.preventDefault();
    //     if (isValidEmail(email) === true) {
    //       dispatch(resetPassword({ email }));
    //       setDisableResetLink(true);
    //     } else {
    //       setErrors({ email: 'Please enter valid email address' });
    //     }
    //   };
    




    const classes = useStyles(theme);
    return (
        <div className={classes.root}> 
            <Paper elevation={2} className={classes.paper}>
                <Grid 
                    container 
                    spacing={2} 
                    direction="column" 
                    className={classes.formgrid}
                >
                    <h4 className={classes.heading}>Can't log in?</h4>
                    <Grid item xs={12}>
                        {validationError ? <Alert severity="error">{validationError}</Alert> : null}
                        {/* {validationError ? <InputLabel error>{validationError}</InputLabel> : null} */}
                    </Grid>
                    <Grid container direction="column" xs={12}>
                        <InputLabel 
                            color="primary" 
                            shrink
                            className={classes.label}
                        >We'll send a recovery link to</InputLabel>
                        <TextField id="outlined-basic" 
                                label="Email" 
                                variant="outlined" 
                                value={email}
                                width={1}
                                // onChange= {e => setEmail(e.target.value)}
                                onChange= {e => handleEmail(e.target.value)}
                        />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            width={1}
                            onClick={sendRecoveryLink}
                            className={classes.button}
                        >Send Recovery Link</Button>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}

//export default index;