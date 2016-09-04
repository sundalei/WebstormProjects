'use strict';

try {
    var fs = require('fs');

    var data = fs.readFileSync('/home/sundalei/study/learnJS/jquery/ajaxTest.html', 'utf8');

    console.log(data);

} catch(err) {
    console.log(err);
}
