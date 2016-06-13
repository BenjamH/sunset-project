'use strict';

var app = require('../..');
import request from 'supertest';

var newCity;

describe('city API:', function() {

  describe('GET /api/cities', function() {
    var cities;

    beforeEach(function(done) {
      request(app)
        .get('/api/cities')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          cities = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(citiess).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/cities', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cities')
        .send({
          name: 'New city',
          info: 'This is the brand new city!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newcity = res.body;
          done();
        });
    });

    it('should respond with the newly created city', function() {
      expect(newcity.name).to.equal('New city');
      expect(newcity.info).to.equal('This is the brand new city!!!');
    });

  });

  describe('GET /api/citys/:id', function() {
    var city;

    beforeEach(function(done) {
      request(app)
        .get('/api/city/' + newcity._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          city = res.body;
          done();
        });
    });

    afterEach(function() {
      city = {};
    });

    it('should respond with the requested city', function() {
      expect(city.name).to.equal('New city');
      expect(city.info).to.equal('This is the brand new city!!!');
    });

  });

  describe('PUT /api/city/:id', function() {
    var updatedcity;

    beforeEach(function(done) {
      request(app)
        .put('/api/city/' + newcity._id)
        .send({
          name: 'Updated city',
          info: 'This is the updated city!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedcity = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedcity = {};
    });

    it('should respond with the updated city', function() {
      expect(updatedcity.name).to.equal('Updated city');
      expect(updatedcity.info).to.equal('This is the updated city!!!');
    });

  });

  describe('DELETE /api/city/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/citys/' + newcity._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when city does not exist', function(done) {
      request(app)
        .delete('/api/city/' + newcity._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
