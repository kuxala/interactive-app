import './App.css';
import React, { useState } from "react";
import Finish from "./components/Finish";
import Container from "./components/Container"


function App() {

  const [showFinish, setShowFinish] = useState(false);

  const nextPage = ()=>{
    setShowFinish(true);
  }
  
  const [clicked, setClicked] = useState(0);


  
    
  return (<>{showFinish ? <Finish clicked={clicked}/> : <Container nextPage={nextPage} setClicked={setClicked} clicked={clicked}/>}</>)
  
    
};




  export default App;