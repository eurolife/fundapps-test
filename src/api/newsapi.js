import axios from 'axios';

export default axios.create({
  baseURL:'http://cors-anywhere.herokuapp.com/http://newsapi.org/v2',
  headers: {
    Authorization: '1b69088a9006492aa4e88a8085641f05'
  },

})