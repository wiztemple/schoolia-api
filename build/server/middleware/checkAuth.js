"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../src/config/config"));

var _currentEnv = require("../utils/currentEnv");

/**
 * Middleware protecting authenticated routes
 * @param {object} request Request Object
 * @param {Object} response Response Object
 * @param {function} next Next middleware
 * @returns {function | object} Next function on the middleware chain or an error object
 */
var checkAuth = function checkAuth(request, response, next) {
  var token = request.headers['x-access-token'] || request.params.token;

  if (!token) {
    return response.status(403).json({
      message: 'You need to sign in first'
    });
  }

  if (token) {
    _jsonwebtoken["default"].verify(token, _config["default"][(0, _currentEnv.getCurrentEnv)()].secret, function (error, decoded) {
      if (error) {
        return response.status(401).json({
          message: 'Authentication failed, try signing again'
        });
      }

      request.userId = decoded.id;
      return next();
    });
  } else {
    return next();
  }
};

var _default = checkAuth;
exports["default"] = _default;