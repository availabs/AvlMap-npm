"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../common/styled-components");

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 20px;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  background-color: ", ";\n  top: 50%;\n  border-radius: 2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 10px;\n  background-color: ", ";\n  border-radius: 2px;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = _styledComponents2["default"].div(_templateObject());

var StyledSliderTrack = _styledComponents2["default"].div(_templateObject2(), function (props) {
  return props.theme.sliderBarBgd;
});

var StyledSliderHandle = _styledComponents2["default"].div(_templateObject3(), function (props) {
  return props.theme.sliderHandleColor;
});

var SliderFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(SliderFilter, _React$Component);

  var _super = _createSuper(SliderFilter);

  function SliderFilter() {
    var _this;

    _classCallCheck(this, SliderFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "track", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      startX: 0
    });

    _defineProperty(_assertThisInitialized(_this), "dragStart", function (e) {
      e.preventDefault();
      document.addEventListener('mouseup', _this.dragEnd);
      document.addEventListener('mousemove', _this.drag);

      _this.setState({
        dragging: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "drag", function (e) {
      e.preventDefault();
      var percent = e.movementX / _this.track.offsetWidth,
          range = _this.props.max - _this.props.min,
          delta = percent * range;

      _this.props.onChange(Math.max(_this.props.min, Math.min(_this.props.max, delta + _this.props.value)));
    });

    _defineProperty(_assertThisInitialized(_this), "dragEnd", function (e) {
      document.removeEventListener('mouseup', _this.dragEnd);
      document.removeEventListener('mousemove', _this.drag);

      _this.setState({
        dragging: false
      });
    });

    return _this;
  }

  _createClass(SliderFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          percent = (value - min) / (max - min) * 100;
      return /*#__PURE__*/_react["default"].createElement(StyledContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, this.props.name), /*#__PURE__*/_react["default"].createElement(StyledSliderTrack, {
        ref: function ref(comp) {
          return _this2.track = comp;
        }
      }, /*#__PURE__*/_react["default"].createElement(StyledSliderHandle, {
        style: {
          left: "".concat(percent, "%")
        },
        onMouseDown: function onMouseDown(e) {
          return _this2.dragStart(e);
        }
      })));
    }
  }]);

  return SliderFilter;
}(_react["default"].Component);

_defineProperty(SliderFilter, "defaultProps", {
  min: 0,
  max: 1,
  value: 1,
  onChnage: function onChnage() {}
});

var _default = SliderFilter;
exports["default"] = _default;
