const express = require('express');
const app = express();
const fs = require('fs');
var busboy = require('connect-busboy');
app.use(busboy());

app.post('/upload', function (req, res) {
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
    console.log('Uploading: ' + filename);
    fstream = fs.createWriteStream(__dirname + '/' + filename);
    file.pipe(fstream);
    fstream.on('close', function () {
        console.log('Upload Finished of ' + filename);
        res.json(200, 'Uploaded');
    });
  });
});

app.listen(3111, function () {
  console.log('Example app listening on port 3000!')
});
