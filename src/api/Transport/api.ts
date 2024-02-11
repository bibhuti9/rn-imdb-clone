import axios from 'axios';

const api = axios.create({
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});
export default api;
