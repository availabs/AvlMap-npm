"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _timeRangeSlider = _interopRequireDefault(require("components/common/time-range-slider"));

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

/*
 * TimeRangeFilter -> TimeRangeSlider -> RangeSlider
 */
var TimeRangeFilter = function TimeRangeFilter(_ref) {
  var filter = _ref.filter,
      setFilter = _ref.setFilter,
      isAnyFilterAnimating = _ref.isAnyFilterAnimating,
      toggleAnimation = _ref.toggleAnimation;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_timeRangeSlider["default"], {
    domain: filter.domain,
    value: filter.value,
    plotType: filter.plotType,
    lineChart: filter.lineChart,
    step: filter.step,
    speed: filter.speed,
    histogram: filter.enlarged ? filter.enlargedHistogram : filter.histogram,
    onChange: setFilter,
    toggleAnimation: toggleAnimation,
    isAnimatable: !isAnyFilterAnimating || filter.isAnimating,
    isEnlarged: filter.enlarged
  }));
};

var _default = TimeRangeFilter;
exports["default"] = _default;
