import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import './styles/app.css';
import RegisterPage from './pages/RegisterPage';
import { UserProvider, TokenProvider } from './context/Context';
import { getUserLoginData, login } from './utils/network-data';
import { SideNavbar, TopNavbar } from './components/Components';

function App() {
  /**Mock login */
  login();
  const { token, id } = getUserLoginData();
  const [currentToken, setCurrentToken] = useState(token);

  /** TODO
   * Get detail user with fetch function that get from network-data.js
   * Pass it with argument currentToken and id, if error setCurrentToken('')
   */

  const userValue = React.useMemo(
    () => ({
      id: '671bab75-9832-4f09-956c-b3d891d0f0fc',
      role_id: 1,
      name: 'testing4',
      username: 'testing4',
      email: 'testing4@t.co',
      phone: '085523131215',
      created_at: '2022-11-01T18:09:43.885866+07:00',
      updated_at: '2022-11-01T18:09:43.885866+07:00',
      grade_id: 1,
      grade_name: 'basic',
      role_name: 'user',
      balance_value: 0
    }),
    []
  );

  if (token) {
    return (
      <TokenProvider value={currentToken}>
        <UserProvider value={userValue}>
          <TopNavbar />
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
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
