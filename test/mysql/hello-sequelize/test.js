'use strict';

async function sleep(timeout) {  
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      reject('hello world');
    }, timeout);
  }).then(function (mes) {
      console.log(mes);
  }).catch(function (mes) {
      return 'reject: ' + mes;
  });
}

(async function() {
  console.log('Do some thing, ' + Date.now());
  var mes = await sleep(3000);
  console.log(mes);
  console.log('Do other things, ' + Date.now());
})();