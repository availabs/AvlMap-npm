"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _styledComponents = require("../common/styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var MultiSelectFilter = function MultiSelectFilter(_ref) {
  var filter = _ref.filter,
      setFilter = _ref.setFilter,
      _ref$placeHolder = _ref.placeHolder,
      placeHolder = _ref$placeHolder === void 0 ? "Select a Value" : _ref$placeHolder;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, filter.name ? /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, {
    htmlFor: "filter-".concat(filter.id)
  }, filter.name) : null, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: filter.value,
    placeholder: placeHolder,
    options: filter.domain,
    multiSelect: true,
    searchable: true,
    displayOption: function displayOption(d) {
      return d.name ? d.name : filter.domain.reduce(function (a, c) {
        return c.value === d ? c.name : a;
      }, d);
    },
    getOptionValue: function getOptionValue(d) {
      return d.value ? d.value : d;
    },
    onChange: setFilter,
    inputTheme: "secondary"
  }));
};

var _default = MultiSelectFilter;
exports["default"] = _default;
