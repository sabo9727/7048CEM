const axios = require('axios');

async function getDetail() {
  const response = await axios.get('http://www.omdbapi.com/?apikey=f96941dc&t=inception');
  return response.data.Response;
}

async function getTitle() {
    const title = await axios.get('http://www.omdbapi.com/?apikey=f96941dc&s=inception')
    return title.data.Response;
}
module.exports = getTitle;
module.exports = getDetail;