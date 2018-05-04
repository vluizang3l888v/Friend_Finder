//Your htmlRoutes.js file should include two routes:



//A GET Route to /survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page.



//dependancies
//including the path package to get the correct file for our htmlRoutes
var path = require("path");

//routing

module.exports = function(app) {
  //get requests
  //this code handles when users "visit"
  //in each case below, the user is shown an HTML page of content

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));

  });
//if no matching route is found then this will route to home.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

}

