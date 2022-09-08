import React, { useState } from "react"
import {Drawer,makeStyles ,Typography,Box, IconButton} from "@material-ui/core"
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import AddBoxIcon  from '@material-ui/icons/AddBox';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Link } from "react-router-dom";
import Appbar from './Appbar'

const usestyle=makeStyles((theme)=>{
return(
   { drawer:{
          width:'240',
          position : "relative"
    },
   btn:{
     backgroundColor:'#ff0055'
    
   },
   titles:{
      marginTop:"100px"
   }

})

})

const Sidebar =()=>{
    const classes=usestyle();
    const [isOpen,setOpen]=useState(false)

    const handleopen=()=>{
        setOpen(true);
    }
    const handleclose=()=>{
        setOpen(false);
    }
return(
    <div>
    <Appbar handleopen={handleopen} />
 <Drawer anchor='left' variant="persistent" open={isOpen} className={classes.drawer} >
   
    <Box width='200px' textAlign='center'>
      <Typography style={{marginTop:"60px"}}>
          your daily notes
          <IconButton edge='start'onClick={handleclose} >
            <FormatIndentIncreaseIcon/>
        </IconButton>
      </Typography>

      <Typography className={classes.titles}>
      <Link to='/create'   >
      <IconButton className={classes.btn} onClick={handleclose}>
            <AddBoxIcon/>
        </IconButton>
    </Link>
        <div>
       CREATE NOTES
       </div>
      </Typography>
      <Typography className={classes.titles}>
      <Link to='/'>
      <IconButton className={classes.btn} onClick={handleclose}>
            <FormatListBulletedIcon/>
        </IconButton>
        </Link>
        <div>
        VIEW MY NOTES
       </div>
      </Typography>
    </Box>
  </Drawer>
    
  </div>
);
}

export default Sidebar;