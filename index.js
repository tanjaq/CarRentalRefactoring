const http = require('http')
const qs = require('querystring')
const rental = require('./rentalPrice')

const server = http.createServer(function(request, response) {
    console.dir(request.param)

    if (request.method == 'POST') {
        console.log('POST')
        var body = ''
        request.on('data', function(data) {
            body += data
        })

        request.on('end', function() {
            const post = qs.parse(body)
            console.log(post);
            const result = rental.price(Number(post.driverAge),
            Number(post.licenceAge),
            Number(post.carClass),
            parseBool(post.causedAccident),
            parseBool(post.sufferedAccident),
            parseBool(post.isHighSeason))
            console.log(result);
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end('Result: ' + result)
        })
    } else {
        var html = `
            <html>
                <body>
                    <form id="calcForm" method="post" action="http://localhost:3000">Driver: <br>
                        <input type="number" name="driverAge"/>
                        <label for="html">Your age?</label><br>
                        <input type="number" name="licenceAge" />
                        <label for="html">How long have you had your licence?</label><br>
                        <input type="number" name="carClass" />
                        <label for="html">Class of the car (1 to 5)</label><br>
                        <input type=checkbox name="causedAccident" />
                        <label for="html">Have you caused accidents?</label><br>
                        <input type=checkbox name="sufferedAccident" />
                        <label for="html">Have you participated in any accidents?</label><br>
                        <input type=checkbox name="isHighSeason" />
                        <label for="html">Is it high season?</label><br>
                        <input type="submit" value="Add" />
                    </form>
                </body>
            </html>`
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(html)
    }

    function parseBool(value) {
        let updatedValue = false;
        if (value == 'on') {
            updatedValue = true;
        }
        return updatedValue;
    }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
