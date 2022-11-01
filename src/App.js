import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import './styles/app.css';
import RegisterPage from './pages/RegisterPage';
import { useState } from 'react';
import { UserProvider } from './context/UserContext';

function App() {
  const [user] = useState('Susanto');

  return (
    <UserProvider value={user}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
