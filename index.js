const http = require('http')
const qs = require('querystring')
const rental = require('./rentalPrice.js')

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
            const result = rental.calculateRentalPrice(Number(post.driversAge), Number(post.yearsOfExperience), Number(post.carType), parseBool(post.causedAnAccident), parseBool(post.isSeason))
            console.log(result);
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end('Result: ' + result)
        })
    } else {
        var html = `
            <html>
                <body>
                    <form id="calcForm" method="post" action="http://localhost:3000">Driver: <br>
                        <input type="number" name="driversAge"/>
                        <label for="html">Your driversAge?</label><br>
                        <input type="number" name="yearsOfExperience" />
                        <label for="html">How long have you had your yearsOfExperience?</label><br>
                        <input type="number" name="carType" />
                        <label for="html">Class of the car (1 to 5)</label><br>
                        <input type=checkbox name="causedAnAccident" />
                        <label for="html">Have you caused accidents?</label><br>
                        
                        <input type=checkbox name="isSeason" />
                        <label for="html">Is it high isSeason?</label><br>
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
