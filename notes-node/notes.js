console.log("2. Starting notes.js");

// module.exports.addNote = () => {
// 	console.log("addNote");
// 	return "New note";
// };

var addNote = (title, body) => {
	console.log("Adding note ", title, body);
};
//adding 2 arguments into addNote

module.exports = {
	addNote,
};
