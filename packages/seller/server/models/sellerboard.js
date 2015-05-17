'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var SellerboardSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  product: {
    type: String,
    required: true,
    trim: true
  },
  option: {
    type: String,
    required: true,
    trim: true
  },
  seller: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  updated: {
    type: Array
  }
});

/**
 * Validations
 */
SellerboardSchema.path('product').validate(function(product) {
  return !!product;
}, 'Title cannot be blank');

SellerboardSchema.path('option').validate(function(option) {
  return !!option;
}, 'Content cannot be blank');



/**
 * Statics
 */

 //이건 뭐하는거지.. 일단.. 
 /*
SellerboardSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};
*/
mongoose.model('Sellerboard', SellerboardSchema);

/* db테스트용 임시 

{"seller":"I'm seller"  ,"product":"product A"  ,"option":"option B","created":new Date()}
*/
