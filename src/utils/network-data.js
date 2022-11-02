function setUserLoginData(token) {
  return localStorage.setItem('token', token);
}

function getUserLoginData() {
  return JSON.parse(localStorage.getItem('token'));
}

function login() {
  /** Mock response */
  const response = {
    token: '671bab75-9832-4f09-956c-b3d891d0f0fc',
    id: '671bab75-9832-4f09-956c'
  };
  setUserLoginData(JSON.stringify(response));
  return response;
}

function getDetailUser() {}

export { setUserLoginData, getUserLoginData, login, getDetailUser };
