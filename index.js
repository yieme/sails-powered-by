/** Change or disable X-Powered-By in Sails.JS
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     sails-powered-by
 *  @param      {Object} req - The request object
 *  @param      {Object} res - The response object
 *  @param      {Function} next - Call the next middleware
 */ 'use strict';
function sailsPoweredBy(req, res, next) {
  next()
}


module.exports = sailsPoweredBy
