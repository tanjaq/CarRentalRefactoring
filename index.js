const http = require('http');
const qs = require('querystring');
const { calculateRentalPrice }  = require('./rentalPrice');

const server = http.createServer(function(request, response) {
  console.dir(request.param);

  if (request.method == 'POST') {
    console.log('POST');
    var body = '';
    request.on('data', function(data) {
      body += data;
    });

    request.on('end', function() {
      const post = qs.parse(body);
      console.log(post);
      const result = calculateRentalPrice(Number(post.driverAge), Number(post.driverLicenseYears), Number(post.carClass), post.recentAccidents === 'true', post.isHighSeason === 'true');
      console.log(result);
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end('Result: ' + result);
    });
  } else {
    var html = `
      <html>
        <body>
          <form id="calcForm" method="post" action="http://localhost:3000">Driver: <br>
            <input type="number" name="driverAge"/>
            <label for="html">Your age?</label><br>
            <input type="number" name="driverLicenseYears" />
            <label for="html">How long have you had your licence?</label><br>
            <input type="number" name="carClass" />
            <label for="html">Class of the car (1 to 5)</label><br>
            <input type=checkbox name="recentAccidents" />
            <label for="html">Have you caused accidents?</label><br>
            <input type=checkbox name="isHighSeason" />
            <label for="html">Is it high season?</label><br>
            <input type="submit" value="Add" />
          </form>
        </body>
      </html>`;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
  }
});

const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);