"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _AuthService = _interopRequireDefault(require("../services/AuthService"));

var _passwordUtils = require("../utils/passwordUtils");

var _jwt = _interopRequireDefault(require("../utils/jwt"));

var AuthController =
/*#__PURE__*/
function () {
  function AuthController() {
    (0, _classCallCheck2["default"])(this, AuthController);
  }

  (0, _createClass2["default"])(AuthController, null, [{
    key: "signup",

    /**
     * Register new User
     * @param {object} request Request Object
     * @param {object} response Response Object
     * @returns {object} User Object
     */
    value: function signup(request, response) {
      var _request$body, name, email, username, password, user, newUser, token;

      return _regenerator["default"].async(function signup$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _request$body = request.body, name = _request$body.name, email = _request$body.email, username = _request$body.username, password = _request$body.password;
              _context.next = 4;
              return _regenerator["default"].awrap(_AuthService["default"].getUserByCredentials(email, username));

            case 4:
              user = _context.sent;

              if (!user) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", response.status(409).json({
                message: 'This account already exists. Consider signing in'
              }));

            case 7:
              _context.next = 9;
              return _regenerator["default"].awrap(_AuthService["default"].createUser({
                name: name,
                email: email,
                username: username,
                password: (0, _passwordUtils.hash)(password)
              }, 'user'));

            case 9:
              newUser = _context.sent;
              token = (0, _jwt["default"])(newUser.id);
              return _context.abrupt("return", response.status(201).json({
                message: "Hello ".concat(newUser.username, ", Welcome to Schoolia."),
                token: token
              }));

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 14]]);
    }
    /**
    * Login a User
    * @param {object} request Request Object
    * @param {object} response Response Object
    * @returns {object} User Object
    */

  }, {
    key: "signin",
    value: function signin(request, response) {
      var _request$body2, email, password, findUser, validatePassword, token;

      return _regenerator["default"].async(function signin$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _request$body2 = request.body, email = _request$body2.email, password = _request$body2.password;
              _context2.next = 4;
              return _regenerator["default"].awrap(_AuthService["default"].getUserByParam('email', email));

            case 4:
              findUser = _context2.sent;

              if (!findUser) {
                _context2.next = 13;
                break;
              }

              _context2.next = 8;
              return _regenerator["default"].awrap((0, _passwordUtils.compare)(password, findUser.password));

            case 8:
              validatePassword = _context2.sent;

              if (!(validatePassword === false)) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", response.status(401).json({
                message: 'incorrect password'
              }));

            case 11:
              token = (0, _jwt["default"])(findUser.id);
              return _context2.abrupt("return", response.status(200).json({
                message: "Hello ".concat(findUser.username, ", Welcome Back!"),
                token: token
              }));

            case 13:
              return _context2.abrupt("return", response.status(404).json({
                message: 'This account does not exist. Consider signing up.'
              }));

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 16]]);
    }
  }]);
  return AuthController;
}(); // Note
// get user profile
// edit user profile


var _default = AuthController;
exports["default"] = _default;