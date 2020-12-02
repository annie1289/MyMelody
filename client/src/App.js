import React from 'react'
import {useState, useEffect} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import MainContainer from './containers/MainContainer';
import Registration from './screens/Registration';
import Login from './screens/Login';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
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
    history.push('/');
  }
  return (
    <div className="App"
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <h1>My Melody</h1>
      {/* <Header/> */}
      <Switch>
        <Route exact path='/login'>
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route exact path='/registration'>
        <Registration handleRegister={handleRegister} />
        </Route>
        <Route path='/'>
        <MainContainer currentUser={currentUser} />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
