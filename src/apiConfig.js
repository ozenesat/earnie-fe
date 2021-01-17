let apiUrl
const apiUrls = {
  production: 'https://mysterious-escarpment-32571.herokuapp.com',
  development: 'https://mysterious-escarpment-32571.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
