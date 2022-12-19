'use strict';

/**
 * list-guest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-guest.list-guest');
