'use strict';

//임시로 갖다쓰자..
var sellerboard = require('../controllers/sellerboard');


// The Package is past automatically as first parameter
module.exports = function(Sellerboard, app, auth, database) {

  app.route('/api/sellerboard/articles')
    .get(sellerboard.all)
    .post(auth.requiresLogin, sellerboard.create);
  
  
  
};
