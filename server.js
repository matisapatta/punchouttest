/*
Dependencias
 */
/*const express = require('express');

const app = express();

const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log("Server running on port", port)
})

app.get('/api/punchoutget', function (req, res) {
    console.log("punchout get")
    console.log(req)
    res.send("punchout get");
  });
  
  app.post('/api/punchoutpost', function (req, res) {
    console.log("punchout post")
    console.log(req)
    res.send("punchout post");
  });*/

  var request = require('request');
  var xml2js = require('xml2js');
  
  var sendJsonResponse = function(res, status, content) {
      res.status(status);
      res.json(content);
  };
  
  /* GET XML Content*/
  module.exports.dsRequest = function(req, res) {
  
      var parser = new xml2js.Parser();
  
      request('/api/punchoutpost', function(error, response, body) {
          parser.parseString(body, function(err, result) {
              sendJsonResponse(res, 200, result);
          });
  
      });
  
  };

  