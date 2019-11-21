"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _SchoolController = _interopRequireDefault(require("../controllers/SchoolController"));

var _FacultyController = _interopRequireDefault(require("../controllers/FacultyController"));

var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth"));

var router = (0, _express.Router)();
router.get('/schools', _SchoolController["default"].getAllSchools);
router.post('/school', _checkAuth["default"], _SchoolController["default"].addSchool);
router.get('/schools/:slug', _SchoolController["default"].getSchool);
router.put('/schools/:slug', _checkAuth["default"], _SchoolController["default"].updateSchool); // faculty

router.post('/schools/:id/faculty', _checkAuth["default"], _FacultyController["default"].addFaculty);
router.get('/schools/:id/faculties', _FacultyController["default"].getAllFaculties); // router.delete('/:id', BookController.deleteBook);

var _default = router;
exports["default"] = _default;