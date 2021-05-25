import React from 'react'

function Header() {
    return (
      //   <nav class="navbar navbar-inverse">
      //   <div class="container">
      //     <div class="navbar-header">
      //       <a class="navbar-brand" href="#">React</a>
      //     </div>
      //     <ul class="nav navbar-nav">
      //       <li class="active"><a href="#">Docs</a></li>
      //       <li><a href="#">Tutorial</a></li>
      //       <li><a href="#">Blog</a></li>
      //       <li><a href="#">Community</a></li>

      //     </ul>
      //     <ul class="nav navbar-nav navbar-right">
      //       <li><a href="#">v17.02</a></li>
      //       <li><a class="css-1upvlu3" href="/languages"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg> <span class="css-1rsw1pf">Languages</span></a></li>
      //       <li><a href="#"> Git Hub</a></li>
      //     </ul>
      //   </div>
      // </nav>


      //starting point
      <div class = "Header">
        <div class = "left_area">
          <h3><span>React </span> JSX</h3>
        </div>
        < div class ="right_area">
          <a href= "#" class = "logout_btn">Logout</a>
        </div>
      </div>
    
    );
}

export default  Header;