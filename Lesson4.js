//задание 1    
function debounce(func, delay) {
    var timerId;
     function obertka() {
         var arg = arguments;

    if (timerId) {
      clearTimeout(timerId);
        }
     timerId = setTimeout(function () {
            func.apply(null, args);
         }, delay);
     }
     return obertka;
}

function log() {
    console.log(arguments);
}
var debounced = debounce(log, 500);
debounced('1');
debounced('2');

//задание 2    
function timerPromise(delay) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve('Привет');
            }, delay);
    });
}
promise1 = new timerPromise(2000);
promise1.then(function(value) {
    console.log(value);
        });


//задание 3           
function XHR_Promise(method, url, body) {
    return new Promise(function (resolve, reject) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();

      xhr.open(method, url, true);
      xhr.onload = function () {
        if(this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.send(body);
    });
  }

  make1 = new XHR_Promise('POST', 'http://httpbin.org/post', 'POST');
  make1.then(function (datums) {
    console.log("Работает. " + datums);
       })
      .catch(function (err) {
    console.error('Ошибка!', err.statusText);
       });


//задание 4      
 function request(url) {
     return new Promise((res) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;
         setTimeout(() => res(url), delayTime);
    });
}
 function urlsPromise(urls) {
    return new Promise(function (resolve, reject) {
    var promisesArray = urls.map(request);
    var resultArray = [];

      for (var i = 0; i < promisesArray.length; i++) {
        promisesArray[i]
            .then(function (res) {
                resultArray.push(" " + res);
                  if (resultArray.length === promisesArray.length){
                    resolve(resultArray);
                  }
              })
            .catch(function (error) {
                reject(error);
            });
    }
     })
}

res1 = new urlsPromise(['http://yandex.by', 'http://httpbin.org', 'http://example.com']);
res1.then(function (datums) {
      console.log("Работает:" + datums);
    })
    .catch(function (error) {
      console.error('Ошибка!', error);
  });