'use strict';

/**
 * list-bedroom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-bedroom.list-bedroom');
