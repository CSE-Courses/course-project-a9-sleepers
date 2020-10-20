// import axios from 'axios';
import React, { useState , useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import RegisterPage from '../registerPage/registerPage';
import { useHistory } from 'react-router'
import axios from 'axios';
import {Link} from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        nnnvuuu.github.io
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  signIn: {
    margin: theme.spacing(3, 0, 2),
  },
 
}));

export default function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


    const usernameHandler = (e) =>{
      e.preventDefault();
      console.log(e.target.value);
      setUsername(e.target.value);
   }

   const pwdHandler = (e) =>{
    setPassword(e.target.value);
 }

//  const {_id} = this.props.location.state;
//  axios.get("http://localhost:5000/articles/"+_id)
//  .then(res => {
//      this.setState({
//        articles:res.data
//      })
//      console.log("The User Click on this Post of ID =  " + res.data._id);
//  })
//    .catch((error)=>{
//      console.log(error); 
//    })

 const onSubmitHandler = (e) =>{
  axios.get("http://localhost:4000/user/get/"+username+password)
   .then(res => {
       console.log( res.data.username,res.data.password);
   })
     .catch((error)=>{
       console.log(error); 
     })
}


  const classes = useStyles();
  const { push } = useHistory();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Username"
            label="Username"
            // name="Username"
            onClick={ usernameHandler}
            autoComplete="Username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // name="password"
            onClick={ pwdHandler}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.signIn}
            onClick={ onSubmitHandler}
          >
            Sign In
          </Button>
          <h4 className="text-center mt-5 sp"
          style={{letterSpacing:'0.15rem',fontStyle:'oblique'}}
          >No account? Not a problem. Join Today!!
          </h4>
      
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={()=> push("/register")}
          >
            Sign up
          </Button>

        </form>
      </div>
     
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}