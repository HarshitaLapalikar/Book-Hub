import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../authAction';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', 
        marginLeft: theme.spacing.unit * 50,
        marginRight: theme.spacing.unit * 50,
    },
   
    form: {
        width: '100%', 
        marginTop: theme.spacing.unit,
      },
      paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '300px',
        padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`,
      },
})

class Login extends Component {
        state = {
            phone_number : "",
            password : ""
        }
        handleSignIn = (e) => {
            e.preventDefault();
             const values ={
                phone_number: this.state.phone_number,
                password : this.state.password
             }
             this.props.auth(this.state, values);
        }
       handlePnumber = (e) => {
           this.setState({phone_number: e.target.value});
       }
       handlePassword = (e) => {
           this.setState({password: e.target.value});
       }

       render(){
           const { classes } = this.props;
           return(
               <main className={classes.main}>
              <div>
                  
              <Paper className={classes.paper}> 
                  <Grid alignItems="center" justify="space-evenly" direction="column">
                  
                  <Typography component="h1" variant="h5"> Login here</Typography>
                
                <Grid container wrap="nowrap"  >         
                <FormControl margin="normal" required center>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl> 
                </Grid>
                <Grid container wrap="nowrap"  >
                <FormControl margin="normal" required center>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password"/>
                </FormControl>
                </Grid>
               <Grid container wrap="nowrap" >
                <Button type="submit" color="primary" variant="contained"
                onClick={(e)=> this.handleSignIn(e)}>Sign-In</Button>
                </Grid>
                   
                 </Grid>
                 </Paper> 
                
                </div>
                </main>
           );
       }

}
   const mapDispatchToProps = dispatch => {
    return{
       auth : (values) => dispatch(auth(values)) 
    };
};
   

export default compose(withStyles(styles), connect (null, mapDispatchToProps)) (Login);




 {/* <label >Phone Number:</label>
                                <input  type="text" 
                                        placeholder='Phone Number'
                                        onChange = {(e) => this.handlePnumber(e)} />
                                </div>
                                <div>
                                         <label >Password:</label>
                                        <input  type="password" 
                                            placeholder = ' Password'
                                            onChange = {(e) => this.handlePassword(e)}  /> */}  