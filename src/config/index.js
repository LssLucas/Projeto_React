const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://projetoreact.herokuapp.com';

export default {
  URL_BACKEND,
};
