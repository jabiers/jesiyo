'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Sellerboard = new Module('sellerboard');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Sellerboard.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Sellerboard.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Sellerboard.menus.add({
    title: 'Sellerboard',
    // link: 'sellerboard example page',
    link: 'sellerboard',
    roles: ['authenticated'],
    menu: 'main'
  });
  Sellerboard.menus.add({
    title: 'Sellerboard create',
    // link: 'sellerboard example page',
    link: 'sellerboard create',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Sellerboard.aggregateAsset('css', 'sellerboard.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Sellerboard.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Sellerboard.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Sellerboard.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Sellerboard;
});
