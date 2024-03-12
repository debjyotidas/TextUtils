// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React ,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type,
        
      })
      setTimeout(()=>{
          setAlert(null);
      },1500)
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
      document.title="TextUtils Light Mode";
      setInterval(()=>{
        document.title = "Install TextUtils Now"
      },2000)
    }

    else{
      setMode('dark');
      document.body.style.backgroundColor='rgb(15 33 52)';
      showAlert("Dark Mode Enabled","success");
      document.title="TextUtils Dark Mode";
      setInterval(()=>{
        document.title = "Install TextUtils Now"
      },2000);
      setInterval(()=>{
        document.title = "TextUtils is Amazing"
      },2000)
    }
  }
  return (
    <>
    <Navbar title="MyNav" mode={mode} toggleMode={toggleMode}aboutText="About Nav"></Navbar>
    <Alert alerrt={alert}/>
    <div className='container'>
      <Textform heading="My Text Here" mode={mode} showAlerrt={showAlert}/>
    </div>
    <About/>
    
    </>
  );
}

export default App;
