import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import Body from './components/Body/Body';
import './components/Body/body.css';
import RightNav from './components/LeftNav/LeftNav';
import './components/LeftNav/LeftNav.css';

function App() {
  return (
    <div>
        <Header />
        <Body />
        <RightNav />
    </div>
    
  );
}

export default App;
