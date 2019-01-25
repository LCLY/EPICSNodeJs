console.log("Start app");

const fs = require("fs"); //this will tell node that we want to fetch
//store in fs and it can be reusable
const os = require("os"); //access os

var user = os.userInfo(); //get user info from OS
console.log(user);
//all of the content in fs module and store them in fs variable

fs.appendFileSync("test.txt", `Hello ${user.username}!`); //its equivalent to "Hello " + user.username + "!"
