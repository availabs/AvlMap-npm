"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

var _bigSlider = _interopRequireDefault(require("./big-slider"));

var _timeSliderMarker = _interopRequireDefault(require("./time-slider-marker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    margin: 0 6px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 12px;\n  margin-right: 42px;\n  &.disabled {\n    opacity: 0.4;\n    pointer-events: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

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
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BASE_SPEED = 25; // const defaultTimeFormat = val => moment.utc(val).format('MM/DD/YY hh:mma');

var animationControlWidth = 140;

var StyledSliderContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.isEnlarged ? '12px' : '0px';
});

var TimeRangeSlider = /*#__PURE__*/function (_Component) {
  _inherits(TimeRangeSlider, _Component);

  var _super = _createSuper(TimeRangeSlider);

  function TimeRangeSlider(props) {
    var _this;

    _classCallCheck(this, TimeRangeSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_sliderUpdate", function (value) {
      _this._sliderThrottle.cancel();

      _this._sliderThrottle(value);
    });

    _defineProperty(_assertThisInitialized(_this), "_resetAnimation", function () {
      var domain = _this.props.domain;
      var value = domain[0];

      _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "_startAnimation", function () {
      _this._pauseAnimation();

      _this.props.toggleAnimation();

      _this.setState({
        isAnimating: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_pauseAnimation", function () {
      if (_this._animation) {
        clearTimeout(_this._animation);

        _this.props.toggleAnimation();

        _this._animation = null;
      }

      _this.setState({
        isAnimating: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_nextFrame", function () {
      _this._animation = null;
      var _this$props = _this.props,
          value = _this$props.value,
          domain = _this$props.domain,
          step = _this$props.step;
      var newValue = value + step > domain[1] ? domain[0] : value + 1;

      _this.props.onChange(newValue);
    });

    _this.state = {
      isAnimating: false,
      width: 288
    };
    _this._animation = null;
    _this._sliderThrottle = (0, _lodash["default"])(function (value) {
      return _this.props.onChange(value);
    }, 20);
    return _this;
  }

  _createClass(TimeRangeSlider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this._animation && this.state.isAnimating) {
        this._animation = setTimeout(this._nextFrame, BASE_SPEED);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          domain = _this$props2.domain,
          value = _this$props2.value,
          isEnlarged = _this$props2.isEnlarged,
          Title = _this$props2.Title,
          Comp = _this$props2.Comp;
      var isAnimating = this.state.isAnimating;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "time-range-slider"
      }, Title ? /*#__PURE__*/_react["default"].createElement(Title, null) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderContainer, {
        className: "time-range-slider__container",
        isEnlarged: isEnlarged
      }, isEnlarged ? /*#__PURE__*/_react["default"].createElement(AnimationControls, {
        isAnimatable: this.props.isAnimatable,
        isEnlarged: isEnlarged,
        isAnimating: isAnimating,
        pauseAnimation: this._pauseAnimation,
        resetAnimation: this._resetAnimation,
        startAnimation: this._startAnimation
      }) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: isEnlarged ? "calc(100% - ".concat(animationControlWidth, "px)") : '100%'
        }
      }, Comp ? /*#__PURE__*/_react["default"].createElement(Comp, null) : null, /*#__PURE__*/_react["default"].createElement(_bigSlider["default"], {
        range: domain,
        value: value,
        bargraph: this.props.bargraph,
        isEnlarged: isEnlarged,
        step: this.props.step,
        onChange: this._sliderUpdate,
        xAxis: _timeSliderMarker["default"]
      }))));
    }
  }]);

  return TimeRangeSlider;
}(_react.Component); // const TimeValueWrapper = styled.div`
//   display: flex;
//   height: ${props => props.theme.secondaryInputHeight};
//   align-items: center;
//   font-size: 11px;
//   justify-content: ${props => props.isEnlarged ? 'center' : 'space-between'};
//   color: ${props => props.theme.labelColor};
//   .horizontal-bar {
//     padding: 0 12px;
//   }
//   .time-value {
//     display: flex;
//     flex-direction: ${props => props.isEnlarged ? 'row' : 'column'};
//     align-items: flex-start;
//   }
//   .time-value:last-child {
//     align-items: flex-end;
//   }
// `;
// const TimeTitle = ({value, isEnlarged, timeFormat = defaultTimeFormat}) => (
//   <TimeValueWrapper isEnlarged={isEnlarged}>
//     <TimeValue key={0} value={moment.utc(value[0]).format(timeFormat)} split={!isEnlarged}/>
//     {isEnlarged ? (
//       <div className="horizontal-bar">
//         <Minus height="12px"/>
//       </div>
//     ) : null}
//     <TimeValue key={1} value={moment.utc(value[1]).format(timeFormat)} split={!isEnlarged}/>
//   </TimeValueWrapper>
// );
// const TimeValue = ({value, split}) => (
//   // render two lines if not enlarged
//   <div className="time-value">
//     {split ? value.split(' ').map((v, i) => (
//       <div key={i}>
//         {i === 0 ? <SelectText>{v}</SelectText> :
//         <SelectTextBold>{v}</SelectTextBold>}
//       </div>
//     )) : <SelectTextBold>{value}</SelectTextBold>}
//   </div>
// );


exports["default"] = TimeRangeSlider;

_defineProperty(TimeRangeSlider, "propTypes", {
  onChange: _propTypes["default"].func.isRequired,
  domain: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  value: _propTypes["default"].number.isRequired,
  step: _propTypes["default"].number.isRequired,
  bargraph: _propTypes["default"].arrayOf(_propTypes["default"].any),
  toggleAnimation: _propTypes["default"].func.isRequired,
  isAnimatable: _propTypes["default"].bool,
  isEnlarged: _propTypes["default"].bool,
  speed: _propTypes["default"].number
});

_defineProperty(TimeRangeSlider, "defaultProps", {
  step: 1,
  isAnimatable: true,
  isEnlarged: true,
  speed: 1
});

var StyledAnimationControls = _styledComponents["default"].div(_templateObject2());

var IconButton = (0, _styledComponents["default"])(_styledComponents2.Button)(_templateObject3());

var AnimationControls = function AnimationControls(_ref) {
  var isAnimatable = _ref.isAnimatable,
      isAnimating = _ref.isAnimating,
      pauseAnimation = _ref.pauseAnimation,
      resetAnimation = _ref.resetAnimation,
      startAnimation = _ref.startAnimation;
  return /*#__PURE__*/_react["default"].createElement(StyledAnimationControls, {
    className: (0, _classnames["default"])('time-range-slider__control', {
      disabled: !isAnimatable
    })
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.ButtonGroup, null, /*#__PURE__*/_react["default"].createElement(IconButton, {
    className: "playback-control-button",
    onClick: resetAnimation,
    secondary: true
  }, /*#__PURE__*/_react["default"].createElement(_icons.Reset, {
    height: "12px"
  })), /*#__PURE__*/_react["default"].createElement(IconButton, {
    className: (0, _classnames["default"])('playback-control-button', {
      active: isAnimating
    }),
    onClick: isAnimating ? pauseAnimation : startAnimation,
    secondary: true
  }, isAnimating ? /*#__PURE__*/_react["default"].createElement(_icons.Pause, {
    height: "12px"
  }) : /*#__PURE__*/_react["default"].createElement(_icons.Play, {
    height: "12px"
  }))));
};
