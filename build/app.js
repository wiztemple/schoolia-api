"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _volleyball = _interopRequireDefault(require("volleyball"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _SchoolRoutes = _interopRequireDefault(require("./server/routes/SchoolRoutes"));

var _AuthRoutes = _interopRequireDefault(require("./server/routes/AuthRoutes"));

var app = (0, _express["default"])();

_dotenv["default"].config();

app.use(_volleyball["default"]);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])());
var port = process.env.PORT || 7000;
app.use('/api/v1', _SchoolRoutes["default"]);
app.use('/api/v1/auth', _AuthRoutes["default"]); // when a random route is inputed

app.get('*', function (request, response) {
  return response.status(200).json({
    message: 'Welcome to Schoolia API.'
  });
});
app.listen(port, function () {
  console.log("Server is running on PORT ".concat(port));
});
var _default = app;
exports["default"] = _default;