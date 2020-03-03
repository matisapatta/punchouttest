/*
Dependencias
 */
const express = require('express');

const app = express();

var xml = require('xml');

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
    res.type('application/xml');

    res.send("<?xml version=\"1.0?\"\>"
    +"<!DOCTYPE cXML SYSTEM \"http://xml.cxml.org/schemas/cXML/1.2.014/cXML.dtd\"\>"
    +"<cXML xml:lang=\"en-US\" payloadID=\"933694607739 \" timestamp=\"2017-03-14T12:59:09-07:00\"\>"
      +"<Response\>"
      +"<Status code=\"200\" text=\"success\"\></Status\>"
        +"<PunchOutSetupResponse\>"
         + "<StartPage\>"
            +"<URL>https://punchout.workchairs.com/Servlet/sessionid=7006</URL\>"
          +"</StartPage\>"
        +"</PunchOutSetupResponse\>"
      +"</Response\>"
    +"</cXML\>"
    );
  });

  