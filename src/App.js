import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import Body from './components/Body/Body';
import './components/Body/body.css';
import RightNav from './components/LeftNav/LeftNav';
import './components/LeftNav/LeftNav.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [name , setName] = useState("Sandeep");

  const [data, setData] = useState([]);
  const [days , setDay] = useState("3")
        const buttonClick=() =>{  
          setName("John");
          setDay("7")
        }
  
  const changeNameHandler =(e)=>{
    setName(e.target.value);
  }

  const getData = async()=>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response);
      setData(response.data);

    }catch(err){
      console.log(err);
    }
    
  }

  useEffect(() => {
      getData();
  }, [])
  
  return (
    <div>
        <Header click = {buttonClick} />

        <>
          <Body name={name} days = {days}  click ={buttonClick} onChange={changeNameHandler} />
          <div className="list">
              <div class="row w-100">
              {data.splice(0,2).map((d)=>
                  <div class="col-md-6">
                    <div class="card" >
                      {/* <img src="..." class="card-img-top" alt="..." /> */}
                      <div class="card-body">
                        <h5 class="card-title">{d.title}</h5>
                        <p class="card-text">{d.body}</p>
                        <a href="#" class="btn btn-primary">{d.id}</a>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
          
        </>
        <RightNav />
    </div>
    
  );
}

export default App;
