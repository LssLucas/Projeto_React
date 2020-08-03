import config from '../config';

function getAllWithVideos() {
  console.log(config.URL_BACKEND);

  return config.URL_BACKEND;
}

export default {
  getAllWithVideos,
}
