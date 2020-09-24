var baseurl = `http://${document.location.hostname}:3000/`
var token = localStorage.getItem('token')

export { baseurl, token }