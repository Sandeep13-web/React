import React from 'react'
import {Route ,Switch , Redirect} from 'react-router-dom';
import Body from './components/Body/Body';
import './components/Body/body.css';
import AllCards from './components/allCards/allCards';
import './components/allCards/allCards.css';
import SingleCard from "./components/singleCard/singleCard";
import './components/singleCard/singleCard.css';
import Form from './components/form/form';
import './components/form/form.css';
import FillCards from './components/fillCards/fillCards';
import './components/fillCards/fillCards.css';
import RightNav from './components/LeftNav/LeftNav';
import './components/LeftNav/LeftNav.css';
import Header from './components/Header/Header';
import './components/Header/Header.css';

function Routes({isAuth , logOut}) {
    
    if(!isAuth){
        return <Redirect to="/login" />
    }

    return (
        <>
        <Header logOut={logOut} />
            <Switch>
                <Route path="/" component ={Body} exact/>
                <Route path="/cards" component ={AllCards} exact/>
                <Route path="/cards/:id" component ={SingleCard} exact/>
                <Route path = "/forms" component ={Form} exact />
                <Route path = "/fillCards" component= {FillCards} exact />
            </Switch>

            <RightNav />
        </>
    )
}

export default Routes
