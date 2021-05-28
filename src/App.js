// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import Body from './components/Body/Body';
import './components/Body/body.css';
import RightNav from './components/LeftNav/LeftNav';
import './components/LeftNav/LeftNav.css';
import AllCards from './components/allCards/allCards';
import './components/allCards/allCards.css';
import SingleCard from "./components/singleCard/singleCard";
import './components/singleCard/singleCard.css';
import {Route ,Switch} from 'react-router-dom';

function App() {

  // const [name , setName] = useState("Sandeep");
 
  // const [days , setDay] = useState("3")
  //       const buttonClick=() =>{  
  //         setName("John");
  //         setDay("7")
  //       }
  
  // const changeNameHandler =(e)=>{
  //   setName(e.target.value);
  // }
  
  return (
    <div>
        {/* <Header click = {buttonClick}/> */}
        <Header />
        <>
          {/* <Body name={name} days = {days}  click ={buttonClick} onChange={changeNameHandler} /> */}
        </>
       

        <Switch>
          <Route path="/" component ={Body} exact/>
          <Route path="/cards" component ={AllCards} exact/>
          <Route path="/cards/:id" component ={SingleCard} exact/>
          <Route path ="**" render ={()=> {<h4>Page not found</h4>}} exact/>

        </Switch>
        
        <RightNav />

        
    </div>
    
  );
}

export default App;
