// import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import './components/login/login.css';
import Routes from './routes'
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [isAuth, setisAuth] = useState(false);

  const getToken = async (username, password) => {
    const data = { username: username, password: password }
    const response = await axios.post('https://photot-explorer.herokuapp.com/auth', data);
    setisAuth(true);
    localStorage.setItem("token", response.data.token);
    console.log(response);
  }

  // const authenticate = (e) =>{
  //   e.preventDefault();
  //   getToken(username,password)
  //   setisAuth(true);
  //   localStorage.setItem("token" , response.data.token);
  // }

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setisAuth(true);
  //   }
  // }, [])

  const logOut = () => {
    setisAuth(false);
    localStorage.removeItem("token");
  }

  return (
    <Switch>
      <Route path="/login" exact>
        {/* <Login authenticate = {authenticate} isAuth={isAuth}  /> */}
        <Login authenticate={getToken} isAuth = {isAuth} />

      </Route>
      <Route component={Routes}>
        <Routes logOut={logOut} isAuth={isAuth} />
      </Route>

    </Switch>





  );
}

export default App;
