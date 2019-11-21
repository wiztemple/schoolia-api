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

var SchoolService =
/*#__PURE__*/
function () {
  function SchoolService() {
    (0, _classCallCheck2["default"])(this, SchoolService);
  }

  (0, _createClass2["default"])(SchoolService, null, [{
    key: "getAllFaculties",
    value: function getAllFaculties() {
      return _regenerator["default"].async(function getAllFaculties$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _regenerator["default"].awrap(_models["default"].Faculty.findAll());

            case 3:
              return _context.abrupt("return", _context.sent);

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }, {
    key: "addFaculty",
    value: function addFaculty(newFaculty) {
      return _regenerator["default"].async(function addFaculty$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _regenerator["default"].awrap(_models["default"].Faculty.create(newFaculty));

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
  }]);
  return SchoolService;
}();

var _default = SchoolService;
exports["default"] = _default;