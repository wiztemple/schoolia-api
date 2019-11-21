"use strict";

var schools = require('../seedData/schools.data');

module.exports = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('Schools', schools, {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Schools', null, {});
  }
};