'use strict'

var http = require('http')

http.createServer(function (req, res) { 
  res.write('Hello Jenkins!')
  res.end()
}).listen(3002)
