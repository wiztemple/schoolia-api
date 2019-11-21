"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _SchoolService = _interopRequireDefault(require("../services/SchoolService"));

var _FacultyService = _interopRequireDefault(require("../services/FacultyService"));

var FacultyController =
/*#__PURE__*/
function () {
  function FacultyController() {
    (0, _classCallCheck2["default"])(this, FacultyController);
  }

  (0, _createClass2["default"])(FacultyController, null, [{
    key: "addFaculty",
    value: function addFaculty(request, response) {
      var schoolId, school, userid, _request$body, name, dean, newFaculty;

      return _regenerator["default"].async(function addFaculty$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              schoolId = parseInt(request.params.id, 10);
              _context.next = 4;
              return _regenerator["default"].awrap(_SchoolService["default"].getSchoolById(schoolId));

            case 4:
              school = _context.sent;
              userid = request.userId;

              if (school) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", response.status(404).json({
                message: 'Sorry, no school found'
              }));

            case 8:
              _request$body = request.body, name = _request$body.name, dean = _request$body.dean;
              _context.next = 11;
              return _regenerator["default"].awrap(_FacultyService["default"].addFaculty({
                userid: userid,
                schoolId: schoolId,
                name: name,
                dean: dean
              }));

            case 11:
              newFaculty = _context.sent;
              return _context.abrupt("return", response.status(201).json({
                message: 'Faculty successfully created',
                newFaculty: newFaculty
              }));

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 15]]);
    }
  }, {
    key: "getAllFaculties",
    value: function getAllFaculties(request, response) {
      var schoolId, school, allFaculties;
      return _regenerator["default"].async(function getAllFaculties$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              schoolId = parseInt(request.params.id, 10);
              _context2.next = 4;
              return _regenerator["default"].awrap(_SchoolService["default"].getSchoolById(schoolId));

            case 4:
              school = _context2.sent;

              if (school) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", response.status(404).json({
                message: 'Sorry, no school found'
              }));

            case 7:
              _context2.next = 9;
              return _regenerator["default"].awrap(_FacultyService["default"].getAllFaculties());

            case 9:
              allFaculties = _context2.sent;
              console.log(allFaculties);

              if (!(allFaculties.length > 0)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", response.status(200).json({
                message: 'faculties successfully retrieved',
                allFaculties: allFaculties
              }));

            case 15:
              return _context2.abrupt("return", response.status(200).json({
                message: 'No faculty found'
              }));

            case 16:
              _context2.next = 21;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 18]]);
    }
  }]);
  return FacultyController;
}();

var _default = FacultyController;
exports["default"] = _default;