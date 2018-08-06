var Fontmin = require('fontmin');

var fontmin = new Fontmin()
    .src('font/*.ttf')
    .dest('build');

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }

    console.log(files[0]);
    // => { contents: <Buffer 00 01 00 ...> }
});

