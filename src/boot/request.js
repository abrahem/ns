import request from 'request'

export default async ({ Vue }) => {
  Vue.prototype.$request = request
}
