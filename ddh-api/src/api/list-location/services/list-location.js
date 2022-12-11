'use strict';

/**
 * list-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-location.list-location');
