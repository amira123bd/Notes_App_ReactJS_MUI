import React, { useState } from "react";
import { Typography,Button,Container,makeStyles,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio  } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useNavigate} from "react-router-dom"



const useStyle=makeStyles({
    btn:{
        backgroundColor:'rgb(205,222,0)',
       ' &:hover':{
        backgroundColor:'#000'
       }
    },
    filed:{
        marginBottom:20
    }
})

const Create=()=>{
    const history=useNavigate()
    const classes=useStyle();
    const [title,setTitle]=useState('')
    const [details,setDetails]=useState('')
    const [category,setCategory]=useState("To Do's")
    

const changeTitle=(e)=>{
setTitle(e.target.value)

}

const changDetails=(e)=>{
    setDetails(e.target.value)
    

}


const handleSubmit=(e)=>{
    e.preventDefault()

    fetch('http://localhost:8000/notes',
    {
        method :"POST",
        headers :{"Content-type":"application/json"},
        body :JSON.stringify({title,details,category})
    }).then(()=>history('/'))


}

return(<Container>
  <Typography 
              color="primary"
              variant="h6"
              gutterBottom
 >Create a new Note</Typography>



 <form onSubmit={handleSubmit}>
 <TextField className={classes.filed} label="Title" variant="outlined" color="secondary" fullWidth required
   onChange={changeTitle}
   >

 </TextField>


 <TextField className={classes.filed} label="Details" variant="outlined" color="secondary" fullWidth  multiline
  minRows={5} required onChange={changDetails}
>

 </TextField>


 <FormControl>
  <FormLabel >Choose the category</FormLabel>
  <RadioGroup
    defaultValue={category} onClick={(e)=>{setCategory(e.target.value)}}
  >
    <FormControlLabel value="To Do's" control={<Radio />} label="To Do's" />
    <FormControlLabel value="Study" control={<Radio />} label="Study" />
    <FormControlLabel value="Work" control={<Radio />} label="Work" />
    <FormControlLabel value="Other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>



<br/>


 <Button type="submit" color="secondary" variant="contained"
 endIcon={<ArrowForwardIosIcon/> } >submit</Button>
 
</form>



   
</Container>)
}


export default Create;