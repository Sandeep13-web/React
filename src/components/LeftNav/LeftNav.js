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
        <div className="LeftNav">
            <center>
                <h4>Welcome😀</h4>
            </center>
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/cards">AllCards</NavLink>
            {/* <NavLink to ="**">Card Profile</NavLink> */}
            <NavLink to ="/forms">Form Section</NavLink>
            <NavLink to ="/fillCards">Fill Cards</NavLink>
            <NavLink to ="/user">User</NavLink>
        </div>
    )
}
