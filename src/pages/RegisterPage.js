import { Button, Link, TextField } from '@mui/material';
import React from 'react';
import useInput from '../hooks/useInput';

const RegisterPage = () => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [pass, onPassChange] = useInput('');

  return (
    <div className='form-page'>
      <h2>Sign up to get started</h2>
      <p>
        Have an account? <Link href='/login'>Sign in</Link>
      </p>
      <TextField onInput={onNameChange} sx={{ marginTop: '10px' }} required label='Name' placeholder='abc@gmail.com' value={name} />
      <TextField onInput={onEmailChange} required label='Email' placeholder='abc@gmail.com' value={email} />
      <TextField onInput={onPassChange} sx={{ marginBottom: '20px' }} required label='Password' placeholder='Password' value={pass} />
      <Button variant='contained'>Register</Button>
    </div>
  );
};

export default RegisterPage;
