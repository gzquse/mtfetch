# use case
var mtFetch = require("mtfetch")
mtFetch.get('http://jsonplaceholder.typicode.com/users').then(users => {
console.log(users);
});