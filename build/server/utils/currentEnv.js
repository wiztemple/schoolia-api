"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrl = exports.getCurrentEnv = void 0;

/**
 * Gets the current environment.
 * @returns {string} environment
 */
var getCurrentEnv = function getCurrentEnv() {
  return process.env.NODE_ENV || 'development';
};
/**
 * Gets the app url based on the current environment
 */


exports.getCurrentEnv = getCurrentEnv;
var getUrl = getCurrentEnv() === 'production' ? 'https://haven-ah-backend.herokuapp.com/api/v1' : 'http://localhost:7000/api/v1';
exports.getUrl = getUrl;