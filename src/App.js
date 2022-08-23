import { useState } from "react";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enable","success");
    }
  }

  
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
}
 

  return (
   <>
   <Router>
   <Navbar title="textData" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert} />
   <div className="container my=8">
   <Routes>
          <Route exact path='/about' element={<About mode={mode}/>} />
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="enter your text here" mode={mode}/>} />
          {/* <TextForm showAlert={showAlert} heading="enter your text here" mode={mode} /> */}
          
        
   </Routes>
  
   </div>
   </Router>
   </>
  );
}

export default App;
