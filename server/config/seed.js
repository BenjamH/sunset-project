/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import City from '../api/city/city.model';

City.find({}).remove()
  .then(() => {
    City.create({
      name: 'Tokyo',
      country: 'Japan',
      video: 'https://www.youtube.com/watch?v=iWktQQeCCkU',
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

