
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Sidebar from "./pages/drawer"
import {createTheme,ThemeProvider,makeStyles,Box,Drawer,Typography} from '@material-ui/core'


const usestyle=makeStyles({
  content:{
    backgroundColor:'#e6e6fa',
    width : '100%',
    height:'100vh',
    marginTop: '1px'
    
    
  }

})




const theme=createTheme({
  palette:{
    primary:{
      main:"rgb(0,0,110)"
    }
  },
  typography:{
    fontFamily:'Oswald',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 700
  }
})



function App() {



  const classes=usestyle();
  return(
    <ThemeProvider theme={theme}>
    <Router>


    
         
           <Sidebar/>
           <div className={classes.content}>   
                  <Routes>
                    <Route path="/" element={<Notes/>}/>
                    <Route path="/create" element={<Create/>}/>
                  </Routes> 
              </div>
   

    </Router>


    </ThemeProvider>
  )
    
}

export default App;
