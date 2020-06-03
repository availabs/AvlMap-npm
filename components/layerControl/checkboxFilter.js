"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: 0px;\n  line-height: ", ";\n  cursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  transition: ", ";\n  left: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  left: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  left: 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  position: absolute;\n  top: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: ", ";\n  width: ", "px;\n  right: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  margin-bottom: 10px;\n  padding: 8px 10px;\n  position: relative;\n  display: flex;\n  background-color: ", ";\n  transition: ", ";\n  cursor: pointer;\n  border-radius: 2px;\n  :hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckboxContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.secondaryInputBgd;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.secondaryInputBgdHover;
});

var SliderTrack = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.switchBtnHeight;
}, function (props) {
  return parseInt(props.theme.switchBtnWidth) * 2;
});

var Square = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.switchBtnWidth;
}, function (props) {
  return props.theme.switchBtnHeight;
});

var ActiveSquare = (0, _styledComponents["default"])(Square)(_templateObject4(), function (props) {
  return props.theme.activeColor;
});
var InactiveSquare = (0, _styledComponents["default"])(Square)(_templateObject5(), function (props) {
  return props.theme.switchTrackBgd;
}, function (props) {
  return props.theme.switchBtnWidth;
});
var SliderSquare = (0, _styledComponents["default"])(Square)(_templateObject6(), function (props) {
  return props.checked ? props.theme.textColorHl : props.theme.textColor;
}, function (props) {
  return props.theme.transitionFast;
}, function (props) {
  return props.checked ? props.theme.switchBtnWidth : 0;
});

var CheckboxLabel = _styledComponents["default"].label(_templateObject7(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.switchBtnHeight;
});

var CheckboxFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckboxFilter, _React$Component);

  var _super = _createSuper(CheckboxFilter);

  function CheckboxFilter() {
    _classCallCheck(this, CheckboxFilter);

    return _super.apply(this, arguments);
  }

  _createClass(CheckboxFilter, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_react["default"].createElement(CheckboxContainer, {
        onClick: function onClick(e) {
          return _this.props.onChange(!_this.props.checked);
        },
        style: this.props.style
      }, /*#__PURE__*/_react["default"].createElement(CheckboxLabel, null, this.props.label), /*#__PURE__*/_react["default"].createElement(SliderTrack, null, /*#__PURE__*/_react["default"].createElement(ActiveSquare, null), /*#__PURE__*/_react["default"].createElement(InactiveSquare, null), /*#__PURE__*/_react["default"].createElement(SliderSquare, {
        checked: this.props.checked
      })));
    }
  }]);

  return CheckboxFilter;
}(_react["default"].Component);

_defineProperty(CheckboxFilter, "defaultProps", {
  checked: false
});

var _default = CheckboxFilter;
exports["default"] = _default;
