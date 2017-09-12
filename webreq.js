import * as WebRequest from 'web-request';
(async function () {
    var result = await WebRequest.get('http://www.google.com/');
    console.log(result.content);
})();