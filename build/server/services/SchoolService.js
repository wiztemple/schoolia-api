"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../src/models"));

var _paginationMeta = _interopRequireDefault(require("../utils/paginationMeta"));

var SchoolService =
/*#__PURE__*/
function () {
  function SchoolService() {
    (0, _classCallCheck2["default"])(this, SchoolService);
  }

  (0, _createClass2["default"])(SchoolService, null, [{
    key: "getAllSchools",
    value: function getAllSchools() {
      var limit,
          page,
          category,
          type,
          offset,
          whereObj,
          schoolRecords,
          _args = arguments;
      return _regenerator["default"].async(function getAllSchools$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              limit = _args.length > 0 && _args[0] !== undefined ? _args[0] : 5;
              page = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
              category = _args.length > 2 ? _args[2] : undefined;
              type = _args.length > 3 ? _args[3] : undefined;
              offset = limit * (page - 1);
              whereObj = {};

              if (category) {
                whereObj.category = category;
              }

              if (type) {
                whereObj.type = type;
              }

              _context.next = 10;
              return _regenerator["default"].awrap(_models["default"].School.findAndCountAll({
                limit: limit,
                offset: offset,
                where: whereObj,
                order: [['createdAt', 'DESC']]
              }));

            case 10:
              schoolRecords = _context.sent;
              schoolRecords.meta = (0, _paginationMeta["default"])(limit, page, schoolRecords.count);
              return _context.abrupt("return", schoolRecords);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "addSchool",
    value: function addSchool(newSchool) {
      return _regenerator["default"].async(function addSchool$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _regenerator["default"].awrap(_models["default"].School.create(newSchool));

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }, {
    key: "updateSchool",
    value: function updateSchool(id, _updateSchool) {
      var schoolToUpdate;
      return _regenerator["default"].async(function updateSchool$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _regenerator["default"].awrap(_models["default"].School.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 3:
              schoolToUpdate = _context3.sent;

              if (!schoolToUpdate) {
                _context3.next = 8;
                break;
              }

              _context3.next = 7;
              return _regenerator["default"].awrap(_models["default"].School.update(_updateSchool, {
                where: {
                  id: Number(id)
                }
              }));

            case 7:
              return _context3.abrupt("return", _updateSchool);

            case 8:
              return _context3.abrupt("return", null);

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
  }, {
    key: "getSchool",
    value: function getSchool(id) {
      var school;
      return _regenerator["default"].async(function getSchool$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _regenerator["default"].awrap(_models["default"].School.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 3:
              school = _context4.sent;
              return _context4.abrupt("return", school);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
    /**
    * Finds an school by slug supplied
    * @param {string} slug Slug value
    * @returns {object | null} School object or null if school is not found
    */

  }, {
    key: "getSchoolBySlug",
    value: function getSchoolBySlug(slug) {
      var school;
      return _regenerator["default"].async(function getSchoolBySlug$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _regenerator["default"].awrap(_models["default"].School.findOne({
                where: {
                  slug: slug
                }
              }));

            case 2:
              school = _context5.sent;

              if (school) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", null);

            case 5:
              return _context5.abrupt("return", school);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
    /**
    * Finds an school by id supplied
    * @param {string} id ID value
    * @returns {object | null} School object or null if school is not found
    */

  }, {
    key: "getSchoolById",
    value: function getSchoolById(id) {
      var school;
      return _regenerator["default"].async(function getSchoolById$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _regenerator["default"].awrap(_models["default"].School.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 2:
              school = _context6.sent;

              if (school) {
                _context6.next = 5;
                break;
              }

              return _context6.abrupt("return", null);

            case 5:
              return _context6.abrupt("return", school);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
    /**
      * Function to update a school in the database
      * @param {object} newData object
      * @param {object} id number
      * @returns {object} school object
      */

  }, {
    key: "updateSchool",
    value: function updateSchool(slug, _updateSchool2) {
      var schoolToUpdate;
      return _regenerator["default"].async(function updateSchool$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _regenerator["default"].awrap(_models["default"].School.findOne({
                where: {
                  slug: slug
                }
              }));

            case 3:
              schoolToUpdate = _context7.sent;

              if (!schoolToUpdate) {
                _context7.next = 8;
                break;
              }

              _context7.next = 7;
              return _regenerator["default"].awrap(_models["default"].School.update(_updateSchool2, {
                where: {
                  slug: slug
                }
              }));

            case 7:
              return _context7.abrupt("return", _updateSchool2);

            case 8:
              return _context7.abrupt("return", null);

            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](0);
              throw _context7.t0;

            case 14:
            case "end":
              return _context7.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
    /** 
    * Function to delete a school from the database
    * @param {object} school
    * @returns {Object | null} User object or null
    */

  }, {
    key: "deleteSchool",
    value: function deleteSchool(school) {
      var schoolRecord;
      return _regenerator["default"].async(function deleteSchool$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _regenerator["default"].awrap(this.getSchoolBySlug(school.slug));

            case 2:
              schoolRecord = _context8.sent;

              if (schoolRecord) {
                _context8.next = 5;
                break;
              }

              return _context8.abrupt("return", null);

            case 5:
              _context8.next = 7;
              return _regenerator["default"].awrap(schoolRecord.update({
                isDeleted: true
              }));

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this);
    }
  }]);
  return SchoolService;
}();

var _default = SchoolService;
exports["default"] = _default;