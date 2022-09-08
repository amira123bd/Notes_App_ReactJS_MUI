import React,{useEffect,useState} from "react";
import {Grid,Paper,Container,Card, CardHeader, Avatar,CardContent, CardActions, Button, IconButton, Typography,makeStyles} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import {useNavigate} from "react-router-dom"

const useStyle=makeStyles({
work :{
    border: "2px #000 solid"

},
other:{
    border: "2px #fefe21 solid"
},
study:{
    border: "2px #cd5c5c solid"
},
ToDo:{
    border: "2px #20b2aa solid"
},
work2 :{
    backgroundColor:'#000 '

},
other2:{
    backgroundColor:" #fefe21 "
},
study2:{
    backgroundColor:"#cd5c5c "
},
ToDo2:{
    backgroundColor:"#20b2aa "
}

})


const Notes=()=>{
    
const classes=useStyle()
const history = useNavigate()  ;  

const [data,setData]=useState('');
const [Delete,setDelete]=useState(false);

useEffect(()=>{
    fetch('http://localhost:8000/notes')
    .then(res=>res.json())
    .then(jsonData=>setData(jsonData))
},[])
const Data = Array.from(data);

const DeleteData = (id)=>{
 fetch(`http://localhost:8000/notes/` + id ,
    {
        method :'DELETE',
       
    }).then(()=>history('/'))

const newData=Data.filter(data=>data.id!==id)
setData(newData)

}
const PutClass=(category)=>{
    if(category=='Work')
    {return classes.work}
  else
    if(category=='Study')
    {return classes.study}
else
    if(category=="To Do's")
    {return classes.ToDo}

    else if (category=='Other')
    {return classes.other}

}


const PutClassavatar=(category)=>{
    if(category=='Work')
    {return classes.work2}
  else
    if(category=='Study')
    {return classes.study2}
else
    if(category=="To Do's")
    {return classes.ToDo2}

    else if (category=='Other')
    {return classes.other2}

}

return(
<Container>


        <Grid container spacing={4}  >
                    {Data.map(element=>
                    <Grid item xs={12} sm={6} md={3} key={element.id}>
                    <Card variant='outlined' color="secondary" className={PutClass(element.category)}  >


                                    
                                    <CardHeader 
                                    avatar={
                                       <Avatar  className={PutClassavatar(element.category)}>
                                        {element.category[0].toUpperCase()}
                                       </Avatar>
                                    }
                                    
                                    
                                    action={<IconButton onClick={()=>{DeleteData(element.id)}}>
                                                        <DeleteIcon />
                                                        </IconButton>}
                                    title={element.title}
                                     subheader={element.category}   
                                    />



                                    <CardContent>
                                        <Typography variant="body2" >
                                        {element.details}
                                        </Typography>
                                    </CardContent>
                                    
                    </Card>
                    </Grid>)
                    }

        </Grid>

</Container>

  )
}



export default Notes;