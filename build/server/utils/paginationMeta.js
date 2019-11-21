"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
   * Function to paginate
   * @param { integer } limit
   * @param { integer } page
   * @param { integer } count
   * @returns { object }
   ** otherwise it throws an error
   */
var paginationMeta = function paginationMeta(limit, page, count) {
  var pageCount = Math.ceil(count / limit);
  return {
    page: page,
    pageCount: pageCount,
    totalItems: count
  };
};

var _default = paginationMeta;
exports["default"] = _default;