'use strict';

class NavbarController {
  //start-non-standard
  menu = [
          {
            'title': 'Home',
            'state': 'main',
          },
          {
            'title': 'About',
            'state': 'about'
          }
        ];

  isCollapsed = true;
  //end-non-standard


}

angular.module('sunsetProjectApp')
  .controller('NavbarController', NavbarController);
