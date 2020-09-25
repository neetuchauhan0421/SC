import React from "react";
import { Card, Button } from "@material-ui/core";
import resources from "../../../resources/google/google.png";


function LoginComp() {

  // const handleGoogleLogin = useCallback(async () => {

   
    
  //   try {
  //     const response = await fetch(`https://9b4a111649e9.ngrok.io/auth/google`, { mode: 'no-cors'});
  //     const url = await response.text();
  //     console.log(url)
  //     window.location.assign(url);
  //   } catch (e) {
  //     console.error(e);
  //   }
    
  // }, []);

  return (
    <Card>
      <Button  style={{width:"30rem",backgroundColor:"#4385f5"}}
      variant="contained" color="primary" href={`https://d3cc76006f33.ngrok.io/auth/google`}>
           <img src={resources}  style={{width:"1.5rem",marginLeft:"0rem"}}/>
        Continue with Google
      </Button>
    </Card>
  );
};

export default LoginComp;