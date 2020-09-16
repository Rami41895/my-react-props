import React from "react";
import PropTypes from 'prop-types'


//import './App.css';

function profile(props,{name, LastName, adresse ,handleName}) {
  return (
    <>
    <div>
        {props.children};
            </div>
      <div>
        <h2 style={{color:'blue',backgroundColor: "lightblue"}}> Name : {props.name} </h2>
      </div>
      <div>
        <h2 style={{color:'blue',backgroundColor: "lightblue"}}> LastName : {props.LastName} </h2>
      </div>
      <div>
        <h2 style={{color:'blue',backgroundColor: "lightblue"}}> adresse : {props.adresse} </h2>
      </div>
      <div>
  <button type="button" className="btn btn-primary" onClick={()=>props.handleName('hello Rami')}>click me ! </button>{' '}
      </div>
    </>
  );
}

export default profile;


profile.defaultProps ={
  name : "Rami" ,
  LastName : "ben salem" ,
  adresse : "gabes-tunisia"
}

profile.propTypes = {
  name: PropTypes.string,
  LastName: PropTypes.string,
  adresse : PropTypes.string
};