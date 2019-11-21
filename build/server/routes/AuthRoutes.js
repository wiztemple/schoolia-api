"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _AuthController = _interopRequireDefault(require("../controllers/AuthController"));

var router = (0, _express.Router)(); // router.get('/', SchoolController.getAllSchools);

router.post('/signup', _AuthController["default"].signup);
router.post('/signin', _AuthController["default"].signin); // router.get('/:slug', SchoolController.getSchool);
// router.put('/:id', BookController.updatedBook);
// router.delete('/:id', BookController.deleteBook);

var _default = router;
exports["default"] = _default;