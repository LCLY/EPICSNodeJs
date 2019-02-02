console.log("1. Start app");

const fs = require("fs"); //this will tell node that we want to fetch
//store in fs and it can be reusable
const os = require("os"); //access os
const _ = require("lodash");
const yargs = require("yargs");
//var user = os.userInfo(); //get user info from OS
//all of the content in fs module and store them in fs variable

const argv = yargs.argv;
//fs.appendFileSync("test.txt", `Hello ${user.username}!`); //its equivalent to "Hello " + user.username + "!"
const notes = require("./notes.js");
console.log("Yargs: ", argv);
// var command = process.argv[2]; //print out the arguments
var command = argv._[0];

// console.log("the command is:" + command); //printing the third argument
console.log("Process: ", process.argv);
if (command == "add") {
	var note = notes.addNote(argv.title, argv.body); //passing the modules
	//note supposed to be an object that is returned from addNote
	if (note) {
		console.log("Note is created");
		console.log("--");
		console.log(`title: ${note.title}`);
		console.log(`body: ${note.body}`);
	} else {
		console.log("Note is taken ");
	}
} else if (command == "list") {
	notes.getAll();
	console.log("list notes");
} else if (command == "Read") {
	console.log("Read note");
	notes.getNote(argv.title);
} else if (command == "Remove") {
	console.log("Remove note");
	notes.removeNote(argv.title);
} else {
	console.log("error: not recognized");
}
