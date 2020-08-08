import axios from 'axios';

export default axios.create({
  baseURL:'http://newsapi.org/v2',
  headers: {
    Authorization: 'apiKey 1b69088a9006492aa4e88a8085641f05'
  }
})