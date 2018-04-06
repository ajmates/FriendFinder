var friends = require("../data/friends"); 

module.exports = function(app) {
	app.get("/api/friends", function(req, res){
		res.json(friends); 
	});

	app.post("/api/friends", function(req, res){
		var match = {
			name: "",
			photo: "", 
			friendDifference: Infinity
		};
		var userData = req.body; 
		var userScore = userData['scores[]'];
		var totalDifference;
	for (var i=0; i<friends.length; i++){
		var currentFriend = friends[i];
		totalDifference = 0; 

		console.log(currentFriend.name);

	for (var j=0; j<currentFriend.scores.length; j++) {
		var currentFriendScore = currentFriend.scores[j];
		var currentUserScore = userScores[j];
		totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore)); 
	}
	if (totalDifference <= match.friendDifference){
		match.name = currentFriend.name;
		match.photo = currentFriend.photo;
		match.friendDifference = totalDifference;
	}
	}

	friends.push(userData);
	res.json(match);
	});
};