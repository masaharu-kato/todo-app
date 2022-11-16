import axios from 'axios'

const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT

console.log('env=', API_ENDPOINT)

export const apiClient = axios.create({
  baseURL: API_ENDPOINT,
  // headers: {
  //     Authorization: options.token ? `Bearer ${options.token}` : '',
  // }
})
