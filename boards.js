var http = require('http');
var schedule = require('node-schedule');
//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'pinn.g8.webconsultingcr.com',
  path: '/get.php?action=getGames&sid=3&r=1'
};

var options2 = {
  host: 'pinn.g8.webconsultingcr.com',
  path: '/get.php?action=getGames&sid=29&r=1'
};

var options3 = {
  host: 'pinn.g8.webconsultingcr.com',
  path: '/get.php?action=getGames&sid=4&r=1'
};


var options4 = {
  host: 'pinn.g8.webconsultingcr.com',
  path: '/get.php?action=getGames&sid=15&r=1'
};

var options5 = {
  host: 'pinn.g8.webconsultingcr.com',
  path: '/getGames.php'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str + 'web request made succesfuly');
  });
}




var j = schedule.scheduleJob('33 * * * *', function(){

  console.log('This job will run each hour at :30 minutes...')

  http.request(options, callback).end();
  
  http.request(options2, callback).end();
  
  http.request(options3, callback).end();
  
  http.request(options5, callback).end();

  http.request(options4, callback).end();

  

 
});

var k = schedule.scheduleJob('03 * * * *', function(){
  
    console.log('This job will run each hour at :00 minutes...')
  
    http.request(options, callback).end();
    
    http.request(options2, callback).end();
    
    http.request(options3, callback).end();
    
    http.request(options5, callback).end();
  
    http.request(options4, callback).end();
  
    
  
   
  });

