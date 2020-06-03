"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sliderPlot = _interopRequireDefault(require("./slider-plot"));

var _slider = _interopRequireDefault(require("./slider"));

var _styledComponents2 = require("../common/styled-components");

var _utils = require("../time-range-slider/utils");

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 24px;\n  width: 40px;\n  padding: 4px 6px;\n  margin-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SliderInput = (0, _styledComponents["default"])(_styledComponents2.Input)(_templateObject(), function (props) {
  return props.flush ? 0 : 24;
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2()); // const RangeInputWrapper =styled.div`
//   margin-top: 6px;
//   display: flex;
//   justify-content: space-between;
// `;


var RangeSlider = /*#__PURE__*/function (_Component) {
  _inherits(RangeSlider, _Component);

  var _super = _createSuper(RangeSlider);

  function RangeSlider() {
    var _this;

    _classCallCheck(this, RangeSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: 0,
      width: 288
    });

    _defineProperty(_assertThisInitialized(_this), "_setValueFromProps", function (props) {
      var value = props.value;

      if (!isNaN(value)) {
        _this.setState({
          value: value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_isValInRange", function (val) {
      var range = _this.props.range;
      return Boolean(val >= range[0] && val <= range[1]);
    });

    _defineProperty(_assertThisInitialized(_this), "_roundValToStep", function (val) {
      var _this$props = _this.props,
          range = _this$props.range,
          step = _this$props.step;
      return (0, _utils.roundValToStep)(range[0], step, val);
    });

    _defineProperty(_assertThisInitialized(_this), "_setRangeVal", function (val) {
      var onChange = _this.props.onChange;
      val = Number(val);

      if (_this._isValInRange(val)) {
        onChange(_this._roundValToStep(val));
        return true;
      }

      return false;
    });

    return _this;
  }

  _createClass(RangeSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setValueFromProps(this.props);

      this._resize();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this._setValueFromProps(nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._resize();
    }
  }, {
    key: "_resize",
    value: function _resize() {
      var width = this.sliderContainer.offsetWidth;

      if (width !== this.state.width) {
        this.setState({
          width: width
        });
      }
    }
  }, {
    key: "_renderInput",
    value: function _renderInput(key) {
      var _this2 = this;

      var setRange = this._setRangeVal;

      var update = function update(e) {
        if (!setRange(e.target.value)) {
          _this2.setState(_defineProperty({}, key, _this2.state[key]));
        }
      };

      return /*#__PURE__*/_react["default"].createElement(SliderInput, {
        className: "kg-range-slider__input",
        type: "number",
        ref: function ref(comp) {
          _this2["input-".concat(key)] = comp;
        },
        id: "filter-".concat(key),
        value: this.state[key],
        onChange: function onChange(e) {
          _this2.setState(_defineProperty({}, key, e.target.value));
        },
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            update(e);

            _this2["input-".concat(key)].blur();
          }
        },
        onBlur: update,
        flush: key === 'value0',
        secondary: this.props.inputTheme === 'secondary'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          bargraph = _this$props2.bargraph,
          isEnlarged = _this$props2.isEnlarged,
          range = _this$props2.range,
          onChange = _this$props2.onChange,
          value = _this$props2.value,
          sliderHandleWidth = _this$props2.sliderHandleWidth;
      var height = this.props.xAxis ? '24px' : '16px';
      var width = this.state.width;
      var plotWidth = width - sliderHandleWidth;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "kg-range-slider",
        style: {
          width: '100%',
          padding: "0 ".concat(sliderHandleWidth / 2, "px")
        },
        ref: function ref(comp) {
          _this3.sliderContainer = comp;
        }
      }, bargraph && bargraph.length ? /*#__PURE__*/_react["default"].createElement(_sliderPlot["default"], {
        bargraph: bargraph,
        isEnlarged: isEnlarged,
        onClick: function onClick(val) {
          onChange(val);
        },
        range: range,
        value: value,
        width: plotWidth
      }) : null, /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
        style: {
          height: height
        },
        className: "kg-range-slider__slider"
      }, this.props.xAxis ? /*#__PURE__*/_react["default"].createElement(this.props.xAxis, {
        width: plotWidth,
        domain: range
      }) : null, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
        showValues: false,
        minValue: range[0],
        maxValue: range[1],
        value: value,
        handleWidth: sliderHandleWidth,
        onSliderChange: this._setRangeVal
      })));
    }
  }]);

  return RangeSlider;
}(_react.Component);

exports["default"] = RangeSlider;

_defineProperty(RangeSlider, "propTypes", {
  range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  value: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  bargraph: _propTypes["default"].arrayOf(_propTypes["default"].any),
  isEnlarged: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  step: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  xAxis: _propTypes["default"].func
});

_defineProperty(RangeSlider, "defaultProps", {
  isEnlarged: false,
  sliderHandleWidth: 12
});

;
