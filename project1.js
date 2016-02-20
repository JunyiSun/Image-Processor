var express = require("express"),
    app = express(),
    formidable = require('formidable'),
    util = require('util'),
    fs   = require('fs-extra'),
    qt   = require('quickthumb');


// Use quickthumb
app.use(qt.static(__dirname + '/'));

app.set('views','./');  //views files
app.set('view engine','jade');//set templete

app.post('/upload', function (req, res){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    res.render('uploadpage',{
      pic: true,
      name: fields.title,
      source: files.upload.name
    }
  )
  });

  form.on('end', function(fields, files) {
    /* Temporary location of our uploaded file */
    var temp_path = this.openedFiles[0].path;
    /* The file name of the uploaded file */
    var file_name = this.openedFiles[0].name;
    /* Location where we want to copy the uploaded file */
    var new_location = 'uploads/';

    fs.copy(temp_path, new_location + file_name, function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log("success!")
      }
    });
  });
});


// Show the upload form
app.get('/', function (req, res){
  res.render('uploadpage',{
    pic: false
  })
});
app.listen(8080);
console.log("Server is running on port 8080.");
