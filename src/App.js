import React from 'react';
import Profile from './Profile/Profile'
import './App.css';

function App() {
  
  const handleName =(name)=>alert(name)
  
  return (

    <div className="App">
      <h1 style={{color:'red' ,backgroundColor: "lightblue"}} >My Profile</h1>
      <Profile name="Rami" LastName="ben salem" adresse="gabes-tunisia" handleName={handleName}><img src="./profilphoto.jpg" alt="Logo" /></Profile>
    </div>
  );
}

export default App;
