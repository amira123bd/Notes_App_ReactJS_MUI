import {AppBar,IconButton, makeStyles, Typography,Toolbar,Avatar} from '@material-ui/core';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import Moment from 'moment';



import React from 'react';


const useStyle=makeStyles({
    
   butn:{
    backgroundColor:'#ff0055',
     margin:'1px'},
     date:{
        marginLeft:'20px'
     },
     toolbar:{
        display:'flex',
        justifyContent:'space-between'
     }
})

export default function Appbar({handleopen}){

    const formatDate = Moment().format("MMM Do YY");




    const classes=useStyle();
    return (
        <AppBar elevation={0} style={{position:'relative'}}>
        <Toolbar className={classes.toolbar}>
                    <IconButton onClick={handleopen} className={classes.butn} >
                        <FormatIndentIncreaseIcon/>
                    </IconButton>
                  <Typography className={classes.date}>Today is  {formatDate } </Typography> 
                  <Avatar src='/log2.jpg'></Avatar>
        </Toolbar>           

        </AppBar>
    )
}