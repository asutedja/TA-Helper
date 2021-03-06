var gulp     	= require('gulp');
var fs 			= require('fs');
// var exec 		= require('gulp-exec');
var settings = require('./settings.js');
var exec = require('child_process').exec;
 





// Settings
var site = "https://github.com/";

// The naming should be standardized
    // "quickDemoApp";
    // "Basic-Portfolio";
    // "/repair-hub";
    var reponames = settings.reponames;
// 
    var studentList = settings.studentList;

  var options = {
    continueOnError: false, // default = false, true means don't emit error event 
    pipeStdout: false, // default = false, true means stdout is written to file.contents 
    customTemplatingThing: "test" // content passed to gutil.template() 
  };
  var reportOptions = {
    err: false, // default = true, false means don't write err 
    stderr: true, // default = true, false means don't write stderr 
    stdout: true // default = true, false means don't write stdout 
  }

// 1. Clone repos
// Create a task that loops through a list of users and clone each repo in a "build folder"
// - - - - - - - - - - - - - - 
    
    var urlList = [];
    urlList.concat(['', 'asdasdad'])
    reponames.forEach(function(reponame) {

      var list = studentList.map(function(student) {
          return 'mkdir Students/' + student + reponame + ' || true && git clone ' + site + student + reponame + ' Students/' + student +  reponame + '|| true';  
      })
      urlList = urlList.concat(list);
    })


  

    //Use below to make student folders
    //return 'mkdir Students/'+ student + ' || true';
    //return 'mkdir Students/' + student + reponame + ' || true && git clone ' + site + student + reponame + ' Students/' + student +  reponame + '|| true';  

    var command = urlList.join(' && ');

    // console.log(command);

    // gulp.task('default', function() {
    //   return gulp.src('./**/**').pipe(exec(command,options)).pipe(exec.reporter(reportOptions));
    // })

    gulp.task('default', function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
  });
})
// 2. Lint the student files
// Create a task that loops through each student repo, lints the students html, css and js and exports a report
// - - - - - - - - - - - - - - -




// 3. Server
// Create a task to open up each students project in a new tab
// - - - - - - - - - - - - - - -

    // Starts a test server, which you can view at http://localhost:8079
//     gulp.task('server', ['build'], function() {
//         // for (var i = 0; i < username.length; i++)
//         gulp.src('./build')
//         .pipe($.webserver({
//             port: 8079,
//             host: 'localhost',
//             fallback: 'index.html',
//             livereload: true,
//             open: true
//         }))
//         ;
//         // }
//     });



// // Default task: builds your app, starts a server, and recompiles assets when they change
// gulp.task('default', ['server'], function () {
  
//   // gulp.watch(['./client/**/*.*', '!./client/templates/**/*.*', '!./client/assets/{scss,js}/**/*.*'], ['copy']);

// });


