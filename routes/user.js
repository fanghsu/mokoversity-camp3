
/*
 * GET users listing. 
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.save = function(req, res){
  console.log("Your Scores:"+ req.url);   //p.43
};