'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.city = [];
    this. time;
  }

  $onInit() {
    this.$http.get('/api/cities/currentSunsets').then(response => {
      this.city = response.data[0];
      this.time = new Date().toDateString();
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/city', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/city/' + thing._id);
  }
}

angular.module('sunsetProjectApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
