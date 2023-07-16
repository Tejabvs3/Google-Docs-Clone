import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Login(props) {
    const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => {setUser(codeResponse)},
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    let prof = localStorage.getItem('profile')
    setProfile(JSON.parse(prof))
    props.profile(JSON.parse(prof))
    console.log(JSON.parse(prof),"sb")
  }, [])
  

  //window. onbeforeunload = function() { localStorage. removeItem('profile'); return ''; };
  let navigate = useNavigate();
  
  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                      props.profile(res.data)
                      localStorage.setItem('profile',JSON.stringify(res.data));
                      //localStorage.removeItem('profile');
                      
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );
  
  
 
  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile([]);
  };
  
   /* React.useEffect(() => {
      logOut();
    }, [])
   */
   
 
  
  return (
    
    <div>
        
    {profile!=null && profile.length!==0 ? ( 
        <div >
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            {console.log(profile.name)}
            {navigate(`/home/${profile.id}`)}
            {/*<button onClick={logOut}>Log out</button>*/}
        </div>
    ) : (
    <>
      <div style={{marginLeft:"31vw",marginTop:"15vh"}}>
        <img src="https://logos-world.net/wp-content/uploads/2022/05/Google-Docs-Symbol.png" alt="" height="250px"/>
       
        <div style={{marginTop:"5vh",marginLeft:"10vw",width:"15vw",fontSize:"15px",cursor:"pointer",fontFamily:"Open Sans,sans-serif",fontWeight:"bold",alignSelf:"center",color:"#1377eb",padding:"8px 8px",borderRadius:"25px",justifyContent:"center",display:"flex",backgroundColor:"#c2e7ff"}} onClick={() => login()}> 
        Sign in with Google 
                </div>
        
        </div>
        </>)}
</div>
  )
}
