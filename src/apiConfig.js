let apiUrl
const apiUrls = {
  production: 'https://earnie-yt.herokuapp.com/api',
  development: 'https://earnie-yt.herokuapp.com/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
