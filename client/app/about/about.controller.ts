'use strict';

(function() {

class AboutController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];
  }

  $onInit() {
    this.$http.get('/api/cities').then(response => {
      this.cities = response.data;
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
  .component('about', {
    templateUrl: 'app/about/about.html',
    controller: AboutController
  });

})();
