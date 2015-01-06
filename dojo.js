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
// }())

(function() {
	module.exports = {
		say: function(what) {
			console.log(what);
		}
	}
}())