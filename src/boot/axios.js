export default async ({ Vue,axios }) => {
  Vue.prototype.$axios = axios;
}