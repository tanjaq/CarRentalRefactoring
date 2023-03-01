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
            const result = rental.price(Number(post.driverAge), Number(post.licenceRetention), Number(post.clazz), parseBool(post.hasAccident), parseBool(post.hasParticipatedInAccident), parseBool(post.isHighSeason))
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
                        <label for="html">Your driverAge?</label><br>
                        <input type="number" name="licenceRetention" />
                        <label for="html">How long have you had your licenceRetention?</label><br>
                        <input type="number" name="clazz" />
                        <label for="html">Class of the car (1 to 5)</label><br>
                        <input type=checkbox name="hasAccident" />
                        <label for="html">Have you caused accidents?</label><br>
                        <input type=checkbox name="hasParticipatedInAccident" />
                        <label for="html">Have you participated in any accidents?</label><br>
                        <input type=checkbox name="isHighSeason" />
                        <label for="html">Is it high isHighSeason?</label><br>
                        <input type="submit" value="Add" />
                    </form>
                </body>
            </html>`
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(html)
    }

    function parseBool(val) {
        let updatedVal = false;
        if (val == 'on') {
            updatedVal = true;
        }
        return updatedVal;
    }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
