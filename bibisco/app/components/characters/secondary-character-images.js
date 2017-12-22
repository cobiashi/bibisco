/*
 * Copyright (C) 2014-2017 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.gnu.org/licenses/gpl-2.0.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */
angular.
  module('bibiscoApp').
  component('secondarycharacterimages', {
    templateUrl: 'components/characters/secondary-character-images.html',
    controller: SecondaryCharacterImagesController
  });

function SecondaryCharacterImagesController($location, $rootScope, $routeParams,
  SecondaryCharacterService) {

  var self = this;

  self.$onInit = function() {
    
    let secondaryCharacter = SecondaryCharacterService.getSecondaryCharacter($routeParams.id);

    self.breadcrumbitems = [];
    self.breadcrumbitems.push({
      label: 'common_characters'
    });
    self.breadcrumbitems.push({
      label: secondaryCharacter.name
    });
    self.breadcrumbitems.push({
      label: 'common_characters_images'
    });

    self.images = secondaryCharacter.images;
    self.lastsave = secondaryCharacter.lastsave;
    self.pageheadertitle = secondaryCharacter.name;
  };

  self.delete = function(filename) {
    let secondaryCharacter = SecondaryCharacterService.deleteImage($routeParams.id, filename);
    self.images = secondaryCharacter.images;
  };

  self.insert = function() {
    $location.path('/secondarycharacters/' + $routeParams.id + '/images/new');
  };

  self.back = function() {
    $location.path('/secondarycharacters/' + $routeParams.id);
  };
}
