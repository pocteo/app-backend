'use strict'
const chai = require('chai')
const expect = chai.expect
var http = require('http');
/*describe('Unit Test app.js', function() {
  it('should return true', () => {
    expect(true).to.be.true
  })
})*/
http.createServer(function (req, res) {
  res.write('Hello Jenkins!'); 
  res.end();
}).listen(3002);
