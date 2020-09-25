import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
export const theme = createMuiTheme({
    spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  });

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent:'center',
      margin:theme.spacing(20, 'auto','auto','auto'),
    },
    paper: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      height:'50vh',
      padding: theme.spacing(5),
    },
    heading:{
        fontWeight:'700',
        color:'#5E6C84',
        textAlign:'center',
    },
    formgrid:{
        margin:theme.spacing(1),
    },
    label:{
        marginBottom:theme.spacing(1),
    },
    button: {
        backgroundColor:'#5AAC44',
        marginTop:theme.spacing(1),
        "&:hover": {
            backgroundColor:fade('#5AAC44', 0.75),
        }
      },
    
  }));

  export default useStyles;