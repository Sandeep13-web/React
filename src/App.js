// import logo from './logo.svg';
import './App.css';     
import Login from './components/login/login';
import './components/login/login.css';
import Routes from './routes'
import {Route ,Switch} from 'react-router-dom';
import { useState ,useEffect } from 'react';


function App() {

  const [isAuth, setisAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token")){
      setisAuth(true);
    }
  }, [])

  const authenticate = () =>{
    setisAuth(true);
    localStorage.setItem("token" , "12asd5as4dasdas3da2sd65we4sad");
  }

  const logOut= () => {
      setisAuth(false);
      localStorage.removeItem("token");
  }
  
  return (
        <Switch>
          
          <Route path="/login" exact>
            <Login authenticate = {authenticate} isAuth={isAuth}  />
          </Route>
          
          <Route component={Routes}>
            <Routes logOut={logOut} isAuth={isAuth} />
          </Route>
          
        </Switch>
      
  );
}

export default App;
