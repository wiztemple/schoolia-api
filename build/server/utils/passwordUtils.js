"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = exports.hash = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

/**
 * This function hashes the password
 * @param { string } inputPassword
 * @returns {string } hashed password using bcrypt hashing.
 * @example hash('password123')
 */
var hash = function hash(inputPassword) {
  return _bcryptjs["default"].hashSync(inputPassword, 8);
};
/**
 * This function compares a hashed password and normal
 * @param { string } inputPassword
 * @param { string } databasePassword
 * @returns { boolean } true if passwords match, false if otherwise.
 */


exports.hash = hash;

var compare = function compare(inputPassword, databasePassword) {
  return _bcryptjs["default"].compareSync(inputPassword, databasePassword);
};

exports.compare = compare;