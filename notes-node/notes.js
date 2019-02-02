console.log("2. Starting notes.js");

// module.exports.addNote = () => {
// 	console.log("addNote");
// 	return "New note";
// };
const fs = require("fs");

var fetchNotes = () => {
	try {
		var noteString = fs.readFileSync("notes-data.json");
		return JSON.parse(noteString); //getting the arra
	} catch (e) {
		return [];
	}
};

var saveNotes = notes => {
	fs.writeFileSync("notes-data.json", JSON.stringify(notes)); //write the string to the json
};

var addNote = (title, body) => {
	console.log("Adding note ", title, body);
	var notes = fetchNotes; //get method

	//object containing title and body
	var note = {
		title,
		body,
	};
	try {
		var noteString = fs.readFileSync("notes-data.json"); //reading data from json
		notes = JSON.parse(noteString); //parse JSON to become string and add to the array
	} catch (e) {
		console.log("File is missing or invalid syntax");
	}

	//Check if theres duplicate title
	var duplicateNotes = notes.filter(note => note.title === title); //note.title is from the array, title is from the app
	if (duplicateNotes.length === 0) {
		notes.push(note); //push the note into the array
		saveNotes(notes); //setFunction, notes here is a json string
		return note; //json data
	} else {
		console.log("DUPLICATE TITLE!");
	}
};
//adding 2 arguments into addNote

var getAll = () => {};

var getNote = title => {
	console.log("Adding the note:", title);
};

var removeNote = title => {
	console.log("Removing the note:", title);
};

//adding the modules into the export
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
};
