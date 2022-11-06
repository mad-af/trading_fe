import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

function loginDataErrorResponse() {
  return {token: '', id: ''};
}

function setUserLoginData({token, id}) {
  return localStorage.setItem('token', JSON.stringify({token, id}));
}

function getUserLoginData() {
  return JSON.parse(localStorage.getItem('token')) || loginDataErrorResponse();
}

async function login({username, password}) {
  const headers = new Headers();
  headers.append('Authorization', 'Basic ' + btoa(`trading_be:trading_be`));
  headers.append('Content-Type', 'application/json');
  const response = await fetch(API_ENDPOINT.LOGIN, {
    method: 'POST',
    redirect: 'follow',
    headers: headers,
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.error === true) {
    setUserLoginData(loginDataErrorResponse());
    if (responseJson.code === 401) {
      alert(responseJson.message);
    }
    return {error: true, data: loginDataErrorResponse()};
  }

  setUserLoginData(responseJson.data);
  return responseJson;

  /*   const response = {
    token: '671bab75-9832-4f09-956c-b3d891d0f0fc',
    id: '671bab75-9832-4f09-956c'
  };
  return response; */
}

async function getUserList() {
  const USER_LIST_ENDPOINT = CONFIG.REGISTER;
}

async function logout() {
  setUserLoginData(loginDataErrorResponse());
}

async function register({name, email, password, username, phone}) {
  const headers = new Headers();
  headers.append('Authorization', 'Basic ' + btoa('trading_be:trading_be'));
  headers.append('Content-Type', 'application/json');
  const response = await fetch(API_ENDPOINT.REGISTER, {
    method: 'POST',
    redirect: 'follow',
    headers: headers,
    body: JSON.stringify({name, email, password, username, phone, role_id: 2}),
  });
  console.log(JSON.stringify({name, email, password, username, phone, role_id: 2}));
  const responseJson = await response.json();
  if (responseJson.error === true) {
    alert(responseJson.message);
    return {error: true};
  }
  alert('Registration successful');
  return {error: false};
}

async function getUserLogged(id) {
  const response = await fetch(API_ENDPOINT.USER_DETAIL(id), {
    headers: {
      Authorization: `Bearer ${getUserLoginData().token}`,
    },
  });
  const responseJson = await response.json();

  if (responseJson.error === true) {
    setUserLoginData(loginDataErrorResponse());
    alert(responseJson.message);
    window.location.reload();
  }

  return responseJson;
}

export {setUserLoginData, getUserLoginData, login, getUserLogged, register, logout};
