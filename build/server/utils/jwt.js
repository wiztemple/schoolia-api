"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../src/config/config"));

var _currentEnv = require("./currentEnv");

var env = (0, _currentEnv.getCurrentEnv)();
/**
 * Generates token for user authentiation and authorization
 * @param {id} id User Id
 * @returns {string} User Token
 */

var createToken = function createToken(id) {
  var token = _jsonwebtoken["default"].sign({
    id: id
  }, _config["default"][env].secret, {
    expiresIn: 604800
  });

  return token;
};

var _default = createToken;
exports["default"] = _default;