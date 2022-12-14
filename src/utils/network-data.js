import jwtDecode from 'jwt-decode';
import API_ENDPOINT from '../global/api-endpoint';

const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

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
}

async function getUserList(page = 1, quantity = 10) {
  const USER_LIST_ENDPOINT = `${API_ENDPOINT.REGISTER}?page=${page}&quantity=${quantity}`;
  const response = await fetch(USER_LIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${getUserLoginData().token}`,
    },
  });
  const responseJson = await response.json();
  if (responseJson.error === true) {
    alert(responseJson.message);
    return {data: {}, error: true};
  }
  return responseJson;
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

async function getUserLogged() {
  const {token} = getUserLoginData();
  const decoded = jwtDecode(token);

  if (decoded.role_id === 2) {
    return;
  }
  await logout();
  window.location.reload();
  alert('Please login again');
}

async function getTransactionList(page = 1) {
  const USER_LIST_ENDPOINT = `${API_ENDPOINT.TRANSACTION}?page=${page}&quantity=10`;
  const response = await fetch(USER_LIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${getUserLoginData().token}`,
    },
  });
  const responseJson = await response.json();
  if (responseJson.error === true) {
    alert(responseJson.message);
    return {data: {}, error: true};
  }
  return responseJson;
}

async function getTransactionDetail(id) {
  const USER_LIST_ENDPOINT = `${API_ENDPOINT.TRANSACTION}/${id}`;
  const response = await fetch(USER_LIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${getUserLoginData().token}`,
    },
  });
  const responseJson = await response.json();
  if (responseJson.error === true) {
    alert(responseJson.message);
    return {data: {}, error: true};
  }
  return responseJson;
}

export {
  setUserLoginData,
  getUserLoginData,
  login,
  getUserLogged,
  register,
  logout,
  getUserList,
  getTransactionList,
  getTransactionDetail,
  formatter,
};
