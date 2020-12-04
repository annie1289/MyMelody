import React from 'react'
import {useState, useEffect} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import MainContainer from './containers/MainContainer';
import Registration from './screens/Registration';
import Login from './screens/Login';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Layout from './layouts/Layout';
import MainLanding from './screens/MainLanding';

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
    history.push('/artists');
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
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route path='/registration'>
          <Registration handleRegister={handleRegister} />
        </Route>
        <Route path='/home'>
          <MainLanding/>
        </Route>
        <Route path='/'>
          <MainContainer currentUser={currentUser}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
