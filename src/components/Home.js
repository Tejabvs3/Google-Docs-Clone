//import './App.css';
import { useNavigate } from 'react-router-dom';
import TextArea from './TextArea';
import React from 'react';

function App(props) {
    let navigate = useNavigate();
    React.useEffect(() => {
      if(props.profile.length===0){
        navigate("/");
      }
      
      // eslint-disable-next-line  
    }, [])

    
   


  return (
   <TextArea profile={props.profile}/>
);
}

export default App;
