/**
 * Created by sun_d on 2016/8/27.
 */

var checkForm = function() {

    function success(text) {
        var textarea = document.getElementById('test-response-text');
        textarea.value = text;
    }

    function fail(code) {
        var textarea = document.getElementById('test-response-text');
        textarea.value = 'Error code: ' + code;
    }

    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }

    request.onreadystatechange = function () {
        if(request.readyState === 4) {
            if(request.status === 200) {
                return success(request.responseText);
            } else {
                return fail(request.status);
            }
        } else {
            console.log('HTTP request is continuing');
        }
    }

    request.open('GET', '/api/categories');
    request.send();

    console.log('request has been sent, please waits for response...');
};

