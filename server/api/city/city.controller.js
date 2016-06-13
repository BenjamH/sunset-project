/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cities            ->  index
 * POST    /api/city              ->  create
 * GET     /api/city/:id          ->  show
 * PUT     /api/city/:id          ->  update
 * DELETE  /api/city/:id          ->  destroy
 * GET     /api/currentsunsets     ->  showSunset
 */

'use strict';

import _ from 'lodash';
import City from './city.model';
import moment from 'moment';
import tz from 'moment-timezone';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Cities
export function index(req, res) {
  return City.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single City from the DB
export function show(req, res) {
  return City.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function showSunsets(req, res) {
  var time = moment().format('ha'),
      city,
      country;

  switch (time) {
      case '3am':
          city = "Tokyo";
          country = 'Japan';
          break;
      case '4am':
          city = "Seoul";
          country = 'Korea';
          break;
      case '5am':
          city = "Labrador Nature Reserve";
          country = 'India';
          break;
      case '6am':
          city = "Bangkok";
          country = 'Thailand';
          break;
      case '8am':
          contry = 'South Africa';
          break;
      case '7am':
          city = 'Hong Kong';
          country = 'China';
      case '9am':
          city = "Jerusalem";
          country = 'Israel';
          break;
      case '10am':
          city = "Cairo";
          country = 'Egypt';
          break;
      case '11am':
          city = 'Stanley'
          country = 'Falkland'
          break;
      case '12pm':
          city = 'Casabalanca';
          country = 'Morocco'
          break;
      case '1pm':
          city = "Rio De Janeiro";
          country = 'Brazil';
          break;
      case '2pm':
          city = 'Glasgow';
          country = 'Scotland';
          break;
      case '3pm':
          city = 'Lima';
          country = 'Peru';
          break;
      case '4pm':
          city = 'Bogota';
          country = 'Colombia';
          break;
      case '5pm':
          city = 'Buenos Aires';
          country = 'Argentina';
          break;
      case '6pm':
          city = 'Caracas';
          country = 'Venezuela';
          break;
      case '7pm':
          city = 'Reykjavik';
          country = 'Iceland';
          break;
      case '8pm':
          city = 'Dublin';
          country = 'Ireland';
          break;
      case '9pm':
          city = 'Whakatane';
          country = 'New Zealand';
          break;
      case '10pm':
          city = 'Amsterdam';
          country = 'Netherlands';
          break;
      case '11pm':
          city = 'Sydney';
          country = 'Australia';
  }

   return City.find({ name: city })
    .then(respondWithResult(res))
    .catch(handleError(res));
  // return City.findById(req.params.id).exec()
  //   .then(handleEntityNotFound(res))
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));
}

// Creates a new City in the DB
export function create(req, res) {
  return City.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing City in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return City.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a City from the DB
export function destroy(req, res) {
  return City.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
