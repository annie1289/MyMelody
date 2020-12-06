import React from 'react'
import {useState, useEffect} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import MainContainer from './maincontainer/MainContainer';
import Registration from './screens/Registration';
import Login from './screens/login/Login';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Header from './components/header/Header';
import MainLanding from './screens/mainlanding/MainLanding';
import Footer from './components/footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/login')
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/login');
  }
  return (
    <div className = "App">
    <Header
      currentUser={currentUser}
      handleLogout={handleLogout}
    />
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route path='/registration'>
          <Registration handleRegister={handleRegister} />
        </Route>
        <Route path='/home'>
          <MainLanding />
          <Footer/>
        </Route>
        <Route path='/'>
          <MainContainer currentUser={currentUser}/>
        </Route>
      </Switch>
      </div>
  );
}

export default App;
