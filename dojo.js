///// Part 1 /////

// module.exports = {
// 	say: function(what) {
// 		console.log(what);
// 	}
// }

// exports.say = function(what) {
// 	console.log(what);
// }

// module.exports.say = function(what) {
// 	console.log(what);
// }

// exports.say = (function(what){
// 	console.log(what);
// });

// module.exports = function() {
// 	return {
// 		say: function(what) {
// 			console.log(what);
// 		}
// 	}
// }();

// (function() {
// 	module.exports.say = function(what) {
// 		console.log(what);
// 	}
// }());

// (function() {
// 	module.exports = {
// 		say: function(what) {
// 			console.log(what);
// 		}
// 	}
// }());

//////// Part 2 /////////
function Dojo(name) {
	this.name = name;
	this.say = function(what) {
		console.log(what);
	}
}
module.exports = function(city){
	console.log(city);
	return new Dojo(city);
}
