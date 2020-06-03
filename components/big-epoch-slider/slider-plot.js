"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var d3selection = _interopRequireWildcard(require("d3-selection"));

var _d3Array = require("d3-array");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  fill: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var chartMargin = {
  top: 18,
  bottom: 0,
  left: 0,
  right: 0
};
var chartH = 52;
var containerH = 78;
var histogramStyle = {
  highlightW: 1,
  unHighlightedW: 0.4
};

var Rect = _styledComponents["default"].rect(_templateObject(), function (props) {
  return props.inRange ? props.theme.activeColor : props.theme.sliderBarColor;
});

var RangePlot = /*#__PURE__*/function (_Component) {
  _inherits(RangePlot, _Component);

  var _super = _createSuper(RangePlot);

  function RangePlot(props) {
    var _this;

    _classCallCheck(this, RangePlot);

    _this = _super.call(this, props);
    _this.container = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(RangePlot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      d3selection.select(this.container.current).on("click", function (e) {
        var _this2$props = _this2.props,
            width = _this2$props.width,
            onClick = _this2$props.onClick,
            range = _this2$props.range,
            pos = d3selection.mouse(_this2.container.current);
        onClick(Math.floor(range[0] + (range[1] - range[0]) * (pos[0] / width)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          width = _this$props.width,
          bargraph = _this$props.bargraph;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.container,
        style: {
          height: "".concat(containerH, "px"),
          position: 'relative'
        }
      }, !bargraph || !bargraph.length ? null : /*#__PURE__*/_react["default"].createElement(BarGraph, {
        width: width,
        height: chartH,
        value: value,
        margin: chartMargin,
        bargraph: bargraph
      }));
    }
  }]);

  return RangePlot;
}(_react.Component);

exports["default"] = RangePlot;

_defineProperty(RangePlot, "propTypes", {
  value: _propTypes["default"].number.isRequired,
  bargraph: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })),
  width: _propTypes["default"].number.isRequired
});

var BarGraph = function BarGraph(_ref) {
  var width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      bargraph = _ref.bargraph,
      value = _ref.value;
  var domain = [bargraph[0].x, bargraph[bargraph.length - 1].x];
  var barWidth = width / bargraph.length;
  var x = (0, _d3Scale.scaleLinear)().domain(domain).range([0, width]);
  var y = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(bargraph, function (d) {
    return d.y;
  })]).range([0, height]);
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: width,
    height: height,
    style: {
      marginTop: "".concat(margin.top, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    className: "histogram-bars"
  }, bargraph.map(function (bar) {
    var inRange = bar.x == value;
    var wRatio = inRange ? histogramStyle.highlightW : histogramStyle.unHighlightedW;
    var h = y(bar.y);
    return /*#__PURE__*/_react["default"].createElement(Rect, {
      inRange: inRange,
      key: bar.x,
      height: h,
      width: barWidth * wRatio,
      x: x(bar.x) + barWidth * (1 - wRatio) / 2,
      rx: 1,
      ry: 1,
      y: height - h
    });
  })));
};
