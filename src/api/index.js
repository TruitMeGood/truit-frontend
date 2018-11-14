import axios from 'axios'

//const Instagram = require('instagram-web-api')
//const insta = new Instagram({ username: 'mailbucks2', password: 'Pikachu1!' })
const insta = 2

const api = axios.create({
  baseURL: 'https://peaceful-ocean-64701.herokuapp.com'
})

export {api, insta}