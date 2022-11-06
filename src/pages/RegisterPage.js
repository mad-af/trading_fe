import {Button, Link, TextField} from '@mui/material';
import React from 'react';
import useInput from '../hooks/useInput';

const RegisterPage = ({onRegister}) => {
  const [name, onNameChange] = useInput('');
  const [username, onUsernameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [phone, onPhoneChange] = useInput('');
  const [pass, onPassChange] = useInput('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onRegister({name, email, password: pass, username, phone});
      }}
      className='form-page'
    >
      <h2>Sign up to get started</h2>
      <p>
        Have an account? <Link href='/'>Sign in</Link>
      </p>
      <TextField
        onInput={onNameChange}
        sx={{marginTop: '10px'}}
        required
        label='Name'
        placeholder='Your Name'
        value={name}
      />
      <TextField
        onInput={onUsernameChange}
        sx={{marginTop: '10px'}}
        required
        label='Username'
        placeholder='username'
        value={username}
      />
      <TextField
        type='email'
        onInput={onEmailChange}
        required
        label='Email'
        placeholder='abc@gmail.com'
        value={email}
      />
      <TextField
        type='number'
        onInput={onPhoneChange}
        required
        label='Phone'
        placeholder='08123456789'
        value={phone}
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
        Register
      </Button>
    </form>
  );
};

export default RegisterPage;
