'use strict';

// ajax函数将返回Promise对象:
function ajax(method, url, data) {
  var request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          // console.log('200 OK');
          resolve(request.responseText);
        } else {
          reject(request.status);
        }
      }
    }
    request.open(method, url);
    request.send(data);
  });
}

function perform() {
  var log = document.getElementById('test-promise-ajax-result');
  var p = ajax('GET', '/api/categories');
  
  p.then(function (text) { //如果AJAX成功，获得响应内容
    log.innerText = text;
  }).catch(function (status) { //如果AJAX失败，获得响应代码
    log.innerText = 'ERROR: ' + status;
  });
  
}
