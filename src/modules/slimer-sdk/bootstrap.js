
if (slimer.hasFeature('coffeescript')) {
    // load the coffee-script module so it can register .coffee extensions
    require('@coffee-script/register');
}

var fs = require('fs');

fs.readFileSync = function(path, encoding) {
    return fs.read(path);
}
