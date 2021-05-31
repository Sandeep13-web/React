import React from 'react'


function Header({logOut}) {
    return (
      //starting point
      <div className="Header">
        <div className="left_area">
          <h3><span>React </span> JSX</h3>


        </div>
        < div className="right_area">
          <button onClick={logOut}>Logout</button>
             
        </div>
          
      </div>
      
    );
}


export default  Header;