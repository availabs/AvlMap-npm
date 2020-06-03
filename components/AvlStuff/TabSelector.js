"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabSelector = exports.Tab = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash.get"));

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  padding: 5px 15px 0px 15px;\n  border-bottom: 2px solid ", ";\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s, background-color 0.15s;\n  font-size: 1rem;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  background-color: ", ";\n  :hover {\n    color: ", ";\n    background-color: ", ";\n  }\n  margin-right: 5px;\n  :last-child {\n    margin-right: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTab = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.isActive ? "currentColor" : "transparent";
}, function (props) {
  return props.isActive ? props.theme.inputBgdActive : props.theme.inputBgd;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.inputBgdHover;
});

var Tab = function Tab(_ref) {
  var children = _ref.children;
  return children;
};

exports.Tab = Tab;

var TabSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(TabSelector, _React$Component);

  var _super = _createSuper(TabSelector);

  function TabSelector() {
    var _this;

    _classCallCheck(this, TabSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentTab: _this.props.currentTab
    });

    return _this;
  }

  _createClass(TabSelector, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.currentTab !== this.props.currentTab && this.state.currentTab !== this.props.currentTab) {
        this.setState({
          currentTab: this.props.currentTab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = _react["default"].Children.toArray(this.props.children);

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: "flex"
        }
      }, children.map(function (c, i) {
        return /*#__PURE__*/_react["default"].createElement(StyledTab, {
          key: i,
          style: {
            minWidth: "".concat(_this2.props.minTabWidth, "px")
          },
          onClick: function onClick(e) {
            return _this2.setState({
              currentTab: i
            });
          },
          isActive: i === _this2.state.currentTab
        }, c.props.name || "Tab ".concat(i));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginTop: "10px"
        }
      }, children[this.state.currentTab]));
    }
  }]);

  return TabSelector;
}(_react["default"].Component);

exports.TabSelector = TabSelector;

_defineProperty(TabSelector, "defaultProps", {
  currentTab: 0,
  minTabWidth: 150
});
