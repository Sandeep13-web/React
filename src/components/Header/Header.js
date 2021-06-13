import React from 'react'


function Header({logOut}) {



    const name = "John Doe";
    const printName = <h1>{name}</h1>

    return (
      //starting point
      <div className="Header">
        <div className="left_area">
          <h3><span>My </span> Website</h3>

          {printName}
        </div>
        < div className="right_area">
          <button onClick={logOut}>Logout</button>
             
        </div>
          
      </div>
      
    );
}


export default  Header;