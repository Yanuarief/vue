var baseurl = `http://${document.location.hostname}:3000/`
var token = localStorage.getItem('token')

var rest = {
    loginsu: baseurl + "loginsu",
    logoutsu: baseurl + "logoutsu",
    checking: baseurl + "checking",
}

export default rest