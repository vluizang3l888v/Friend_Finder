//Your apiRoutes.js file should contain two routes:


//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// BELOW THIS LINE CODE WILL START. 

//put is update. 
//get is get info from webpage. 
//post is change the webpage. 
//Load data. 

var friends = require("../data/friends");

//routing. 

module.exports = function (app) {
//the api will get request. 
//code down here will handle when user visit page. 
//in each of the below cases when a user visits a link
app.get("/api/friends", function (req, res) {
    res.json(friends);
});






//API post request. 
app.post("/api/friends", function(req, res) {
    var bestMatch = {
        name: "",
        photo:"",
        friendDifference: Infinity 
    };
//Take the results of the survey POST and parse it. 
var userData = req.body;
var userScores = userData.scores;
//var will calculate the difference between the user's score and the userScores. 
//of other users in the database. 
var totalDifference;
//loop through all the amigo possibilities.
for(var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;
    console.log(currentFriend.name);
    // we then loop through all the scores to find the scores of each friend. 
    for (var j=0; j<currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];
        totalDifference+= Math.abs(parseInt(currentUserScore)- parseInt(currentFriendScore));
      }
      if (totalDifference <= bestMatch.friendDifference){
        //Reset the best match
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    //Push the user's data into the database(this has to happen after the check)
    friends.push(userData);
    //return a JSON with the user's best match. This will be used by the html in the next Page
    res.json(bestMatch);

  });
};

