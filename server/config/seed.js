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
      video: 'https://www.youtube.com/embed/tKGRKW_MUos?autoplay=1&start=7',
    }, {
      name: 'Seoul',
      country: 'Korea',
      video: 'https://www.youtube.com/embed/uYldEpKCmYA?autoplay=1'
    }, {
      name: 'Chiplun',
      country: 'India',
      video: 'https://www.youtube.com/embed/2ZXVcG6QHQo?autoplay=1&start=7'
    }, {
      name: 'n/a',
      country: 'South Africa',
      video: 'https://www.youtube.com/embed/TMroLPxzkNA?autoplay=1'
    }, {
      name: 'Cairo',
      country: 'Egypt',
      video: 'https://www.youtube.com/embed/AaIk-4LDzFQ?autoplay=1'
    }, {
      name: 'Stanley',
      country: 'Falkland Islands',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Casablanca',
      country: 'Morocco',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Rio De Janeiro',
      country: 'Brazil',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Lima',
      country: 'Peru',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Bogota',
      country: 'Colombia',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Buenos Aires',
      country: 'Argentina',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Caracas',
      country: 'Venezuela',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Whakatane',
      country: 'New Zealand',
      video: 'https://www.youtube.com/embed/V-XdF8bnQz8?autoplay=1&start=7'
    }, {
      name: 'Sydney',
      country: 'Australia',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Reykjavik',
      country: 'Iceland',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Dublin',
      country: 'Ireland',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    },{
      name: 'Amsterdam',
      country: 'Netherlands',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Mexico City',
      country: 'Mexico',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Havana',
      country: 'Cuba',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Bern',
      country: 'Switzerland',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Santiago',
      country: 'Chile',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'San Jose',
      country: 'Costa Rica',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    },{
      name: 'Madrid',
      country: 'Spain',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Frankfurt',
      country: 'Germany',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Paris',
      country: 'France',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Brussels',
      country: 'Belgium',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Copenhagen',
      country: 'Denmark',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Moscow',
      country: 'Russia',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    },{
      name: 'Stockholm',
      country: 'Sweden',
      video: 'https://www.youtube.com/embed/-pCHgeKCxU8?autoplay=1'
    }, {
      name: 'Vienna',
      country: 'Austria',
      video: 'https://www.youtube.com/embed/?autoplay=1'
    }, {
      name: 'Rome',
      country: 'Italy',
      video: 'https://www.youtube.com/embed/CqfkRW6cgRI?autoplay=1'
    }, {
      name: 'Athens',
      country: 'Greece',
      video: 'https://www.youtube.com/embed/FuJo5kFotWU?autoplay=1'
    }, {
      name: 'Nairobi',
      country: 'Kenya',
      video: 'https://www.youtube.com/embed/geMhuI672jo?autoplay=1'
    }, {
      name: 'Taipei',
      country: 'Taiwan',
      video: 'https://www.youtube.com/embed/_vTPHEGYZEM?autoplay=1'
    }, {
      name: 'Shanghai',
      country: 'China',
      video: 'https://www.youtube.com/embed/oqwzlY-3V64?autoplay=1'
    }, {
      name: 'Hong Kong',
      country: 'China',
      video: 'https://www.youtube.com/embed/tKGRKW_MUos?autoplay=1'
    }, {
      name: 'Bangkok',
      country: 'Thailand',
      video: 'https://www.youtube.com/embed/xxHTGOObW40?autoplay=1'
    }, {
      name: 'Jerusalem',
      country: 'Israel',
      video: 'https://www.youtube.com/embed/T6LL6KfHyE8?autoplay=1&start=25'
    }, {
      name: 'Labrador Nature Reserve',
      country: 'Singapore',
      video: 'https://www.youtube.com/embed/4k6koKBl7h8?autoplay=1'
    });
  });

