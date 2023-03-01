/* const http = require('http')
const qs = require('querystring')
//const rental = require('./rentalPrice')
const rental = require('./rentalPriceTesting')

const server = http.createServer(function (request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function (data) {
      body += data
    })

    request.on('end', function () {
      const post = qs.parse(body)
      console.log(post);
      const result = rental.calculateRentalPrice(Number(post.age), Number(post.licence), Number(post.clazz), parseBool(post.hasCausedAccidents), parseBool(post.hasParticipatedInAccidents), parseBool(post.isHighSeason))
      console.log(result);
      response.writeHead(200, { 'Content-Type': 'text/html' })
      if (result.success) {
        response.end(`
          <html>
            <body>
              <h1>Rental price calculation result:</h1>
              <p>Age: ${post.age}</p>
              <p>Licence duration: ${post.licence}</p>
              <p>Class of the car: ${post.clazz}</p>
              <p>Have you caused accidents? ${post.hasCausedAccidents ? 'Yes' : 'No'}</p>
              <p>Have you participated in accidents? ${post.hasParticipatedInAccidents ? 'Yes' : 'No'}</p>
              <p>Is it high season? ${post.isHighSeason ? 'Yes' : 'No'}</p>
              <h2>Rental price: $${result.result}</h2>
            </body>
          </html>
        `)
      } else {
        response.end(`
                <html>
                  <body>
                    <h1>Rental price calculation error:</h1>
                    <p>${result.message}</p>
                  </body>
                </html>
          `)
      }
    })
  } else {
    var html = `
      <html>
          <body>
              <form id="calcForm" method="post" action="http://localhost:3001">
                  Driver: <br>
                  <input type="number" name="age"/>
                  <label for="html">Your age?</label><br>
                  <input type="number" name="licence" />
                  <label for="html">How long have you had your licence?</label><br>
                  <input type="number" name="clazz" />
                  <label for="html">Class of the car (1 to 5)</label><br>
                  <input type=checkbox name="hasCausedAccidents" />
                  <label for="html">Have you caused accidents?</label><br>
                  <input type=checkbox name="hasParticipatedInAccidents" />
                  <label for="html">Have you participated in any accidents?</label><br>
                  <input type=checkbox name="isHighSeason" />
                  <label for="html">Is it high season?</label><br>
                  <input type="submit" value="Add" />
              </form>
          </body>
      </html>`
    response.writeHead(200, { 'Content-Type': 'text/html' })
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

const port = 3001
const host = 'localhost'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
//return; */

// Separate calculaterentalPrice(post) and respondWithResult
const http = require('http')
const qs = require('querystring')
const rental = require('./rentalPriceTesting')

const server = http.createServer(function (request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function (data) {
      body += data
    })

    request.on('end', function () {
      const post = qs.parse(body)
      console.log(post);
      const rentalPrice = rental.calcPriceForRent(post)
      respondWithResult(response, post, rentalPrice)
    })
  } else {
    const html = `
      <html>
        <body>
          <form id="calcForm" method="post" action="http://localhost:3001">
            Driver: <br>
            <input type="number" name="age"/>
            <label for="html">Your age?</label><br>
            <input type="number" name="licence" />
            <label for="html">How long have you had your licence?</label><br>
            <input type="number" name="clazz" />
            <label for="html">Class of the car (1 to 5)</label><br>
            <input type=checkbox name="hasCausedAccidents" />
            <label for="html">Have you caused accidents?</label><br>
            <input type=checkbox name="hasParticipatedInAccidents" />
            <label for="html">Have you participated in any accidents?</label><br>
            <input type=checkbox name="isHighSeason" />
            <label for="html">Is it high season?</label><br>
            <input type="submit" value="Add" />
          </form>
        </body>
      </html>`
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(html)
  }

  function parseBool(val) {
    return val === 'on'
  }

  function calcPriceForRent(post) 
  {
    return rental.calcPriceForRent(
      Number(post.age),
      Number(post.licence),
      Number(post.clazz),
      parseBool(post.hasCausedAccidents),
      parseBool(post.hasParticipatedInAccidents),
      parseBool(post.isHighSeason)
    )
  }

  function respondWithResult(response, post, rentalPrice) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    if (rentalPrice.success) {
      response.end(`
        <html>
          <body>
            <h1>Rental price calculation result:</h1>
            <p>Age: ${post.age}</p>
            <p>Licence duration: ${post.licence}</p>
            <p>Class of the car: ${post.clazz}</p>
            <p>Have you caused accidents? ${post.hasCausedAccidents ? 'Yes' : 'No'}</p>
            <p>Have you participated in accidents? ${post.hasParticipatedInAccidents ? 'Yes' : 'No'}</p>
            <p>Is it high season? ${post.isHighSeason ? 'Yes' : 'No'}</p>
            <h2>Rental price: $${rentalPrice.result}</h2>
          </body>
        </html>
      `)
    } else {
      response.end(`
        <html>
          <body>
            <h1> Error calculating rental price</h1>
            <p>Something went wrong while trying to calculate the rental price. Please try again later.</p>
            </body>
            </html>
            `)
    }
  }
})

server.listen(3001)

console.log('Server running at http://localhost:3001/')