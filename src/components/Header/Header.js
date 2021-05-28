import React from 'react'
import {NavLink , Link} from 'react-router-dom';


function Header(props) {
    return (
      //starting point
      <div class = "Header">
        <div class = "left_area">
          <h3><span>React </span> JSX</h3>
          <h2>{props.children}</h2>


        </div>
        < div class ="right_area">
            <button onClick={props.click}>Logout</button> 
        </div>
          
      </div>
      
    );
}
//onClick ={buttonClick}

export default  Header;