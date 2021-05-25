import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import Body from './components/Body/Body';
import './components/Body/body.css';
import RightNav from './components/LeftNav/LeftNav';
import './components/LeftNav/LeftNav.css';
import {useState} from 'react';

function App() {

  const [name , setName] = useState("Sandeep");
  const [days , setDay] = useState("3")
        const buttonClick=() =>{  
          setName("John");
          setDay("7")
        }
  return (
    <div>
        <Header click = {buttonClick}>
          <div>
            This is use of props
          </div>

        </Header>

        <Body name={name} days = {days}  click ={buttonClick}/>
        <RightNav />
    </div>
    
  );
}

export default App;
