import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https//snoanime.com/ns/api/new'
})
export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
