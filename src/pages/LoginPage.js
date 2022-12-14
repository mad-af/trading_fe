import {Button, Link, TextField} from '@mui/material';
import React from 'react';
import useInput from '../hooks/useInput';
import '../styles/form-page.css';

const LoginPage = ({onLogin}) => {
  const [username, onUsernameChange] = useInput('');
  const [pass, onPassChange] = useInput('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin({username, password: pass});
      }}
      className='form-page'
    >
      <h2>Sign in to App</h2>
      <p>
        Dont have an account? <Link href='/register'>Get started</Link>
      </p>
      <TextField
        onInput={onUsernameChange}
        sx={{marginTop: '10px'}}
        required
        label='Username'
        placeholder='username'
        value={username}
      />
      <TextField
        type='password'
        onInput={onPassChange}
        sx={{marginBottom: '20px'}}
        required
        label='Password'
        placeholder='Password'
        value={pass}
      />
      <Button type='submit' variant='contained'>
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
