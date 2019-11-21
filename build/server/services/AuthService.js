"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../src/models"));

var Op = _models["default"].Sequelize.Op;
var attributes = ['id', 'name', 'username', 'email', 'isConfirmed', 'allowNotifications', 'bio', 'course_of_study', 'year_of_admission', 'year_of_graduation', 'schoolname', 'avatar', 'createdAt', 'updatedAt', 'role'];

var AuthService =
/*#__PURE__*/
function () {
  function AuthService() {
    (0, _classCallCheck2["default"])(this, AuthService);
  }

  (0, _createClass2["default"])(AuthService, null, [{
    key: "createUser",

    /**
    * Function to create a user entity in the database
    * @param {object} user User object
    * @param {string} role User role
    * @returns {object} User object
    */
    value: function createUser(user, role) {
      var newUser;
      return _regenerator["default"].async(function createUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user.role = role;
              _context.next = 3;
              return _regenerator["default"].awrap(_models["default"].User.create(user));

            case 3:
              newUser = _context.sent;
              return _context.abrupt("return", newUser);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
    /**
    * Finds a user by parameter
    * @param {string} param Parameter to search by
    * @param {string} value Parameter value
    * @returns {object | null} User object or null if user is not found
    */

  }, {
    key: "getUserByParam",
    value: function getUserByParam(param, value) {
      var user;
      return _regenerator["default"].async(function getUserByParam$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (param === 'email') {
                attributes.push('password');
              }

              _context2.next = 3;
              return _regenerator["default"].awrap(_models["default"].User.findOne({
                where: (0, _defineProperty2["default"])({}, param, value),
                attributes: attributes
              }));

            case 3:
              user = _context2.sent;

              if (user) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", null);

            case 6:
              return _context2.abrupt("return", user);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
    /**
     * Finds a user by email or username
     * @param { string } email Email to search by
     * @param { string } username Username to search by
     * @returns { object | null } User object or null if user is not found
     */

  }, {
    key: "getUserByCredentials",
    value: function getUserByCredentials(email, username) {
      var user;
      return _regenerator["default"].async(function getUserByCredentials$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _regenerator["default"].awrap(_models["default"].User.findOne({
                where: (0, _defineProperty2["default"])({}, Op.or, {
                  email: email,
                  username: username
                }),
                attributes: attributes
              }));

            case 2:
              user = _context3.sent;

              if (user) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", null);

            case 5:
              return _context3.abrupt("return", user);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
    /**
    * This method finds all non-admin users in the database
    *@returns {object | null} the results from DB
    */

  }, {
    key: "getAllUsers",
    value: function getAllUsers() {
      var allUsers;
      return _regenerator["default"].async(function getAllUsers$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _regenerator["default"].awrap(_models["default"].User.findAll({
                where: {
                  role: 'user'
                },
                attributes: attributes
              }));

            case 2:
              allUsers = _context4.sent;
              return _context4.abrupt("return", allUsers);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
    /**
      * Removes a user from the database
      * @param {object} user
      * @returns {Object | null} User object or null
      */

  }, {
    key: "deleteUser",
    value: function deleteUser(user) {
      var userEntity;
      return _regenerator["default"].async(function deleteUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _regenerator["default"].awrap(this.getUserByParam('username', user.username));

            case 2:
              userEntity = _context5.sent;

              if (userEntity) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", null);

            case 5:
              _context5.next = 7;
              return _regenerator["default"].awrap(userEntity.destroy());

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
    /**
    * Updates the user profile
    * @param { object } newData
    * @param { string } username
    * @returns { boolean } true for successful update.
    */

  }, {
    key: "updateUser",
    value: function updateUser(newData, username) {
      var updated;
      return _regenerator["default"].async(function updateUser$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _regenerator["default"].awrap(_models["default"].User.update(newData, {
                returning: true,
                where: {
                  username: username
                }
              }));

            case 2:
              updated = _context6.sent;
              return _context6.abrupt("return", updated[1][0].dataValues);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }]);
  return AuthService;
}();

var _default = AuthService;
exports["default"] = _default;