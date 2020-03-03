/*
Dependencias
 */
const express = require('express');

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
    res.status(200);
  });

  