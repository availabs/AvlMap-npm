"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  cursor: pointer;\n  position: absolute;\n  left: ", "px;\n  height: 40px;\n  width: calc(100% - ", "px - 2px);\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  border-right: 2px solid ", ";\n  transition: top 0.5s, color 0.15s, background-color 0.15s, border-color 0.15s;\n\n  &.selected.open {\n    border-right-color: ", ";\n    color: ", ";\n  }\n\n  :hover {\n    border-right-color: ", ";\n    background-color: ", ";\n    color: ", ";\n  }\n\n  > * {\n    :first-child {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 60px;\n      height: 40px;\n    }\n    :last-child {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      width: calc(100% - ", "px);\n      padding-left: 10px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  transition: height 0.5s;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var PADDING = 10;

var AccordionSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(AccordionSelector, _React$Component);

  var _super = _createSuper(AccordionSelector);

  function AccordionSelector() {
    var _this;

    _classCallCheck(this, AccordionSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "timeout", null);

    return _this;
  }

  _createClass(AccordionSelector, [{
    key: "componentsWillUnmount",
    value: function componentsWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "onSelect",
    value: function onSelect(e, value) {
      e.stopPropagation();

      if (!this.state.open) {
        return this.toggleAccordion();
      }

      if (value !== this.props.value) {
        this.props.onSelect(value);
      }

      this.toggleAccordion();
    }
  }, {
    key: "toggleAccordion",
    value: function toggleAccordion() {
      var open = !this.state.open;
      this.setState({
        open: open
      });
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.state.open && this.toggleAccordion();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open,
          _this$props = this.props,
          options = _this$props.options,
          value = _this$props.value;
      return /*#__PURE__*/_react["default"].createElement(AccordionContainer, {
        style: {
          height: "".concat(open ? options.length * 40 + (options.length - 1) * 10 + PADDING * 2 : 40 + PADDING * 2, "px")
        }
      }, options.map(function (_ref, i) {
        var label = _ref.label,
            Icon = _ref.Icon;
        return /*#__PURE__*/_react["default"].createElement(AccordionOption, {
          key: label,
          hasIcon: Boolean(Icon),
          className: (0, _classnames["default"])({
            open: open,
            selected: label === value
          }),
          style: {
            top: "".concat(open ? i * 50 + PADDING : PADDING, "px"),
            zIndex: label === value ? 10 : 5 - i
          },
          onClick: function onClick(e) {
            return _this2.onSelect(e, label);
          },
          top: i * 50 + PADDING
        }, !Boolean(Icon) ? null : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Icon, null)), /*#__PURE__*/_react["default"].createElement("div", null, label));
      }));
    }
  }]);

  return AccordionSelector;
}(_react["default"].Component);

_defineProperty(AccordionSelector, "defaultProps", {
  value: null,
  options: [],
  onSelect: function onSelect() {}
});

var _default = (0, _reactOnclickoutside["default"])(AccordionSelector);

exports["default"] = _default;

var AccordionContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var AccordionOption = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.textColor;
}, PADDING, PADDING * 2, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.hasIcon ? 60 : 0;
});
