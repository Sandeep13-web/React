import React from 'react'
// import{Route , Switch} from 'react-router-dom'
// import Home from 'src/components/home/home';
// import 'src/components/home/home.css';
// import AllCards from 'src/components/allCards/allCards';
// import 'src/components/allCards/allCards.css';
// import SinglePost from "src/components/singlePost/singlePost";
// import 'src/components/singlePost/singlePost.css';
import {NavLink} from 'react-router-dom';


export default function RightNav() {
    return (
        // start here
        <div className = "LeftNav">
            <center>
                <h4>Welcome😀</h4>
            </center>
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/cards">AllCards</NavLink>
            <NavLink to ="**">Card Profile</NavLink>
            <a href ="#">Coming Soon...</a>
            {/* <Switch>
                <Route path="/" component ={Home} exact/>
                <Route path="/posts" component ={AllCards} exact/>
                <Route path="/posts/:id" component ={SinglePost} exact/>
                <Route path ="**" render ={()=> {<h4>Page not found</h4>}} exact/>
            </Switch> */}
        </div>
    )
}
