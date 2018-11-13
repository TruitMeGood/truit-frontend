import axios from 'axios'

const api = axios.create({
  baseURL: 'https://peaceful-ocean-64701.herokuapp.com'
})

export default api