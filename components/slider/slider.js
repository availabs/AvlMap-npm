"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sliderHandle = _interopRequireDefault(require("./slider-handle"));

var _sliderBarHandle = _interopRequireDefault(require("./slider-bar-handle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  margin-top: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-bottom: 12px;\n  background-color: ", ";\n  height: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function noop() {}

var StyledRangeSlider = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return props.theme.sliderBarHeight;
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.isRanged ? 0 : 10;
});

var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.ref = undefined;

    _this._saveRef = function (ref) {
      _this.ref = ref;
    };

    _this.slide0Listener = function (x) {
      var xPercent = x / _this.ref.offsetWidth;
      var maxDelta = _this.props.maxValue - _this.props.minValue;
      var val = xPercent * maxDelta;

      _this.props.onSlider0Change.call(_assertThisInitialized(_this), val + _this.props.value0);
    };

    _this.slide1Listener = function (x) {
      if (_this.ref) {
        var xPercent = x / _this.ref.offsetWidth;
        var maxDelta = _this.props.maxValue - _this.props.minValue;
        var val = xPercent * maxDelta;

        _this.props.onSlider1Change(val + _this.props.value1);
      }
    };

    _this.sliderBarListener = function (x) {
      var xPercent = x / _this.ref.offsetWidth;
      var maxDelta = _this.props.maxValue - _this.props.minValue;
      var val = xPercent * maxDelta;
      var val0 = val + _this.props.value0;
      var val1 = val + _this.props.value1;

      _this.props.onSliderBarChange(val0, val1);
    };

    _this.calcHandleLeft0 = function (w, l, num) {
      return w === 0 ? "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)") : "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    };

    _this.calcHandleLeft1 = function (w, l) {
      return _this.props.isRanged && w === 0 ? "".concat(l, "%") : "calc(".concat(l + w, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    };

    _this.createSlider = function (width, v0Left) {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(StyledRangeSlider, {
        className: "kg-range-slider"
      }, /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: _this.calcHandleLeft0(width, v0Left),
        valueListener: _this.slide0Listener,
        sliderHandleWidth: _this.props.sliderHandleWidth,
        display: _this.props.isRanged
      }), /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: _this.calcHandleLeft1(width, v0Left),
        valueListener: _this.slide1Listener,
        sliderHandleWidth: _this.props.sliderHandleWidth
      }), /*#__PURE__*/_react["default"].createElement(_sliderBarHandle["default"], {
        width: width,
        v0Left: v0Left,
        enableBarDrag: _this.props.enableBarDrag,
        sliderBarListener: _this.sliderBarListener
      })));
    };

    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classSet = _this$props.classSet,
          isRanged = _this$props.isRanged,
          maxValue = _this$props.maxValue,
          minValue = _this$props.minValue,
          value1 = _this$props.value1;
      var value0 = !isRanged && minValue > 0 ? minValue : this.props.value0;
      var currValDelta = value1 - value0;
      var maxDelta = maxValue - minValue;
      var width = currValDelta / maxDelta * 100;
      var v0Left = (value0 - minValue) / maxDelta * 100;
      return /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
        className: (0, _classnames["default"])('kg-slider', _objectSpread({}, classSet)),
        ref: this._saveRef,
        isRanged: isRanged
      }, this.createSlider(width, v0Left));
    }
  }]);

  return Slider;
}(_react.Component);

exports["default"] = Slider;
Slider.propTypes = {
  title: _propTypes["default"].string,
  isRanged: _propTypes["default"].bool,
  value0: _propTypes["default"].number,
  value1: _propTypes["default"].number,
  minValue: _propTypes["default"].number,
  maxValue: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  onSlider0Change: _propTypes["default"].func,
  onInput0Change: _propTypes["default"].func,
  onSlider1Change: _propTypes["default"].func,
  onInput1Change: _propTypes["default"].func,
  onSliderBarChange: _propTypes["default"].func,
  step: _propTypes["default"].number,
  enableBarDrag: _propTypes["default"].bool
};
Slider.defaultProps = {
  title: '',
  isRanged: true,
  value0: 0,
  value1: 100,
  minValue: 0,
  maxValue: 100,
  step: 1,
  sliderHandleWidth: 12,
  enableBarDrag: false,
  onSlider0Change: noop,
  onInput0Change: noop,
  onSlider1Change: noop,
  onInput1Change: noop,
  onSliderBarChange: noop,
  disabled: false
};
