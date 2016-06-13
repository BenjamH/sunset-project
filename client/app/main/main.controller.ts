'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.city = [];
  }

  $onInit() {
    this.$http.get('/api/cities/575e18845f6d4de9504fff92').then(response => {
      this.city = response.data;
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
