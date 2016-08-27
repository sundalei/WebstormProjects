/**
 * Created by sun_d on 2016/8/27.
 */

var checkForm = function() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(request.readyState === 4) {
            if(request.status === 200) {
                console.log('success');
            } else {
                console.log('fail');
            }
        } else {
            console.log('HTTP request is continuing');
        }
    }

    request.open('GET', '/api/categories');
    request.send();

    console.log('request has been sent, please waits for response...');
};

