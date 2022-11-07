import CONFIG from './config';

const API_ENDPOINT = {
  LOGIN: `${CONFIG.BASE_URL}apps/v1/user/login`,
  REGISTER: `${CONFIG.BASE_URL}apps/v1/user`,
  USER_DETAIL: (id) => `${CONFIG.BASE_URL}apps/v1/user/${id}`,
  TRANSACTION: `${CONFIG.BASE_URL}apps/v1/transaction`,
};

export default API_ENDPOINT;
