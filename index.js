var express = require('express')
// BIG CHANGE 1: We "forgot" to actually initialize the app.
// var app = express() 

// This will now throw a ReferenceError because 'app' is undefined.
app.set('port', (process.env.PORT || 'INVALID_PORT_NUMBER'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  // BIG CHANGE 2: A logic bomb. 
  // If the server somehow starts, it will kill itself the moment someone visits.
  process.exit(1)
})

// BIG CHANGE 3: Syntax Nightmare.
// I "accidentally" removed the closing brackets and parentheses.
app.listen(app.get('port'), function() {
  console.log("You will never see this message.")
