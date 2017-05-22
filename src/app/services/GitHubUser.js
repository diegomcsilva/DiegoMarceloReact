var axios = require('axios');

var GitHubUser = {
    getUserName: function(username) {
        return axios.get('https://api.github.com/users' + username);
    },
    getReposByUsername: function(username) {
        return axios.get('https://api.github.com/users' + username + '/repos');
    }
};

modelu.exports = GitHubUser;