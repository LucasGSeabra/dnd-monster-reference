import axios from 'axios'

const api = axios.create({ baseURL: 'https://api.open5e.com/monsters' })

export default api