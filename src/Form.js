import React,{useState} from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FaHeart } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#30CBE8',
      height: '500px',
      left:'12px',
      justifyContent:'center',
      
    },
    paper: {
      height: 340,
      width: 300,
      top:'150px'
    },
    control: {
      padding: theme.spacing(10),
    },

    mid_Text:{
      color: '#fff',
      fontFamily: 'arial',
      textAlign: 'center',
      fontSize: '55px',
      marginTop:'3%',
      padding:'20px 10px',
      marginLeft:'0',
    },
    heartIcon:{
      fontSize: '45px',
      padding:'0 30px'
    },
    mid_button:{
      backgroundColor:'#FF4430',
      color:'#fff',
      fontSize: '20px',
      border:'none',
      borderRadius:'15px',
      marginLeft:'35%',
      maxWidth:'21%',
      maxHeight:'12%',
    },
    mid_p:{
      color: '#fff',
      fontFamily: 'arial',
      textAlign: 'center',
      fontSize: '20px',
      marginLeft:'-5%',
    },

    mid_Part:{
      marginLeft:'5%',
      marginBottom:'5%',
    },
  }));


function Form() {
    const [spacing, setSpacing] = useState(8);
    const classes = useStyles();
  
    
    return (
      <div className="FormGrid">
      <Grid container className={classes.root} spacing={16} >
        
        <div className={classes.mid_Part}>
        <div className={classes.mid_Text} justify="center" spacing={12}> I <FaHeart className={classes.heartIcon} /> Color</div>
        
        <p className={classes.mid_p} spacing={12}>Color really isn't difficult to get right, if you know where to start.<br />Learn by doing and you'll be a master in no time. </p>
        
        <button className={classes.mid_button} spacing={12}>Over to you</button>
        </div>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
            
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>

            ))}
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
export default Form
