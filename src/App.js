import React, {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import './styles/app.css';
import RegisterPage from './pages/RegisterPage';
import {UserProvider, TokenProvider} from './context/Context';
import {getUserLogged, getUserLoginData, login, logout, register} from './utils/network-data';
import {SideNavbar, TopNavbar} from './components';

function App() {
  const {token, id} = getUserLoginData();
  const [currentToken, setCurrentToken] = useState(token);
  const [user, setUser] = useState('{}');
  const navigate = useNavigate();

  const userLoggedIn = async (id) => {
    const getUserResponse = await getUserLogged(id);
    setUser(JSON.stringify(getUserResponse.data));
  };
  currentToken && userLoggedIn(id);

  const onLogin = async ({username, password}) => {
    const loginData = await login({username, password});
    setCurrentToken(loginData.data.token);
  };

  const onRegister = async (data) => {
    const registerData = await register(data);
    registerData.error === false && navigate('./');
  };

  const onLogout = () => {
    logout();
    window.location.reload();
  };

  console.log(user);

  if (currentToken) {
    return (
      <TokenProvider value={currentToken}>
        <UserProvider value={JSON.parse(user)}>
          <TopNavbar onLogout={onLogout} />
          <SideNavbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </UserProvider>
      </TokenProvider>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<LoginPage onLogin={onLogin} />} />
      <Route path='/register' element={<RegisterPage onRegister={onRegister} />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
