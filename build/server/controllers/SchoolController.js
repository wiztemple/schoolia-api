"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _SchoolService = _interopRequireDefault(require("../services/SchoolService"));

var _slugify = _interopRequireDefault(require("../utils/slugify"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SchoolController =
/*#__PURE__*/
function () {
  function SchoolController() {
    (0, _classCallCheck2["default"])(this, SchoolController);
  }

  (0, _createClass2["default"])(SchoolController, null, [{
    key: "addSchool",
    value: function addSchool(request, response) {
      var _request$body, name, _mission, _motto, _type, category, _description, alias, _established, _founder, _pmb, _email, history, _telephone, _location, _state, _longitude, _latitude, _mascot, _colors, _logo, _website, _campus, _school_head, _school_photos, catchment_areas, newSchool;

      return _regenerator["default"].async(function addSchool$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _request$body = request.body, name = _request$body.name, _mission = _request$body.mission, _motto = _request$body.motto, _type = _request$body.type, category = _request$body.category, _description = _request$body.description, alias = _request$body.alias, _established = _request$body.established, _founder = _request$body.founder, _pmb = _request$body.pmb, _email = _request$body.email, history = _request$body.history, _telephone = _request$body.telephone, _location = _request$body.location, _state = _request$body.state, _longitude = _request$body.longitude, _latitude = _request$body.latitude, _mascot = _request$body.mascot, _colors = _request$body.colors, _logo = _request$body.logo, _website = _request$body.website, _campus = _request$body.campus, _school_head = _request$body.school_head, _school_photos = _request$body.school_photos, catchment_areas = _request$body.catchment_areas;
              _context.next = 4;
              return _regenerator["default"].awrap(_SchoolService["default"].addSchool({
                slug: (0, _slugify["default"])("".concat(name, " ").concat(Date.now())),
                userid: request.userId,
                name: name,
                mission: _mission,
                motto: _motto,
                type: _type,
                category: category,
                description: _description,
                alias: alias,
                established: _established,
                founder: _founder,
                pmb: _pmb,
                email: _email,
                history: history,
                telephone: _telephone,
                location: _location,
                state: _state,
                longitude: _longitude,
                latitude: _latitude,
                mascot: _mascot,
                colors: _colors,
                logo: _logo,
                website: _website,
                campus: _campus,
                school_head: _school_head,
                school_photos: _school_photos,
                catchment_areas: catchment_areas
              }));

            case 4:
              newSchool = _context.sent;
              return _context.abrupt("return", response.status(201).json({
                message: 'School successfully created',
                newSchool: newSchool
              }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }, {
    key: "getAllSchools",
    value: function getAllSchools(request, response) {
      var limit, page, category, _type2, _schools, rows, data;

      return _regenerator["default"].async(function getAllSchools$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(request.query);
              _context2.prev = 1;
              limit = parseInt(request.query.limit, 5) || 5;
              page = parseInt(request.query.page, 5) || 1;
              category = request.query.category;
              _type2 = request.query.type;

              if (!(category && ['university', 'polytechnic', 'college', 'monotechnic', 'others'].indexOf(category) == -1)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", response.status(400).json({
                message: 'the parameter supplied is invalid'
              }));

            case 8:
              if (!(_type2 && ['federal', 'state', 'private'].indexOf(_type2) == -1)) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return", response.status(400).json({
                message: 'the parameter supplied is invalid'
              }));

            case 10:
              _context2.next = 12;
              return _regenerator["default"].awrap(_SchoolService["default"].getAllSchools(limit, page, category, _type2));

            case 12:
              _schools = _context2.sent;

              if (!(!_schools || _schools.rows.length <= 0)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", response.status(200).json({
                message: 'no school found'
              }));

            case 15:
              rows = _schools.rows, data = (0, _objectWithoutProperties2["default"])(_schools, ["rows"]);
              return _context2.abrupt("return", response.status(200).json({
                message: 'schools successfully retrieved',
                data: _objectSpread({
                  schools: rows
                }, data)
              }));

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 19]]);
    }
    /**
    * Get a single article
    * @param {object} request Request Object
    * @param {object} response Response Object
    * @returns {object} Article object or error object if article is not found
    */

  }, {
    key: "getSchool",
    value: function getSchool(request, response) {
      var schoolSlug, school;
      return _regenerator["default"].async(function getSchool$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              schoolSlug = request.params.slug;
              _context3.next = 4;
              return _regenerator["default"].awrap(_SchoolService["default"].getSchoolBySlug(schoolSlug));

            case 4:
              school = _context3.sent;
              // increment views based on how many times this endpoint is fired
              school.viewCount = school.viewCount++ + 1;
              school.save();

              if (school) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt("return", response.status(200).json({
                message: 'school not found'
              }));

            case 9:
              return _context3.abrupt("return", response.status(200).json({
                message: 'school successfully retrieved',
                school: school
              }));

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }, {
    key: "updateSchool",
    value: function updateSchool(request, response) {
      var name, schoolSlug, userid, updatedSchool;
      return _regenerator["default"].async(function updateSchool$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              name = request.body.name;
              schoolSlug = request.params.slug;
              userid = request.userId;

              if (schoolSlug) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", response.status(400).json({
                message: 'no school with the supplied slug found'
              }));

            case 5:
              _context4.prev = 5;

              if (!(request.userId === userid)) {
                _context4.next = 11;
                break;
              }

              _context4.next = 9;
              return _regenerator["default"].awrap(_SchoolService["default"].updateSchool(schoolSlug, {
                name: name,
                mission: mission,
                motto: motto,
                type: type,
                institution_type: institution_type,
                description: description,
                nickname: nickname,
                established: established,
                founder: founder,
                pmb: pmb,
                email: email,
                telephone: telephone,
                location: location,
                state: state,
                longitude: longitude,
                latitude: latitude,
                mascot: mascot,
                colors: colors,
                logo: logo,
                website: website,
                campus: campus,
                school_head: school_head,
                school_photos: school_photos
              }));

            case 9:
              updatedSchool = _context4.sent;
              return _context4.abrupt("return", response.status(201).json({
                message: 'school successfully updated',
                updatedSchool: updatedSchool
              }));

            case 11:
              return _context4.abrupt("return", response.status(403).json({
                message: 'you are not authorized to update a school you didnt create'
              }));

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](5);
              console.log(_context4.t0);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[5, 14]]);
    }
    /**
    *
    * @param {object} request Request Object
    * @param {object} response Response Object
    * @returns {object} response
    */

  }, {
    key: "deleteSchool",
    value: function deleteSchool(request, response) {
      var school, userId, userid;
      return _regenerator["default"].async(function deleteSchool$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              school = request.school, userId = request.userId;
              userid = school.dataValues.userid;

              if (!(userid === userId && request.role === 'admin')) {
                _context5.next = 6;
                break;
              }

              _context5.next = 5;
              return _regenerator["default"].awrap(_SchoolService["default"].deleteSchool(school.dataValues));

            case 5:
              return _context5.abrupt("return", response.status(201).json({
                message: 'school successfully deleted'
              }));

            case 6:
              return _context5.abrupt("return", response.status(401).json({
                message: 'you cannot delete this school'
              }));

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "searchSchools",
    value: function searchSchools(request, response) {
      var whereObj, result;
      return _regenerator["default"].async(function searchSchools$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              try {
                whereObj = {};
                whereObj[params.searchField] = params.seachTerm;
                result = schools.findAll({
                  where: whereObj
                });
              } catch (error) {
                console.log(error);
              }

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }]);
  return SchoolController;
}();

var _default = SchoolController;
exports["default"] = _default;