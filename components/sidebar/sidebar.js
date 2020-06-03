"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  justify-content: center;\n  background-color: ", ";\n  border-radius: 1px;\n  color: ", ";\n  display: flex;\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  right: 10px;\n  top: 25px;\n\n  :hover {\n    cursor: pointer;\n    box-shadow: none;\n    background-color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 1px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  align-items: stretch;\n  flex-grow: 1;\n  overflow: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  z-index: 99;\n  height: 100%;\n  width: ", "px;\n  display: flex;\n  transition: width 250ms;\n  position: absolute;\n  padding: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSidePanelContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.width + 40;
});

var SideBarContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.isOpen && !props.transitioning ? 'visible' : 'hidden';
});

var SideBarInner = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.sidePanelBg;
});

var CollapseButton = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.sideBarCloseBtnBgd;
}, function (props) {
  return props.theme.sideBarCloseBtnColor;
}, function (props) {
  return props.theme.sideBarCloseBtnBgdHover;
});

var SideBar = /*#__PURE__*/function (_Component) {
  _inherits(SideBar, _Component);

  var _super = _createSuper(SideBar);

  function SideBar() {
    var _this;

    _classCallCheck(this, SideBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this._onOpenOrClose = function () {
      _this.props.onTransitionStart();

      setTimeout(function () {
        _this.props.onOpenOrClose(!_this.props.isOpen);
      }, 250);
    };

    return _this;
  }

  _createClass(SideBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          transitioning = _this$props.transitioning,
          width = _this$props.width;

      var _width = isOpen && transitioning ? 0 : isOpen && !transitioning ? width : !isOpen && transitioning ? 300 : 0;

      return /*#__PURE__*/_react["default"].createElement(StyledSidePanelContainer, {
        width: _width,
        className: "side-panel--container",
        isOpen: isOpen
      }, /*#__PURE__*/_react["default"].createElement(SideBarContainer, {
        className: "side-bar",
        style: {
          width: "".concat(width, "px")
        },
        isOpen: isOpen,
        transitioning: transitioning
      }, !isOpen && !transitioning ? null : /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: "".concat(width, "px"),
          height: "100%"
        }
      }, /*#__PURE__*/_react["default"].createElement(SideBarInner, {
        className: "side-bar__inner"
      }, this.props.children))), /*#__PURE__*/_react["default"].createElement(CollapseButton, {
        className: "side-bar__close",
        onClick: this._onOpenOrClose,
        "data-tip": true,
        "data-for": "hide-show-layer-controls"
      }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
        height: "12px",
        style: {
          transform: "rotate(".concat(isOpen ? 180 : 0, "deg)")
        }
      })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
        id: "hide-show-layer-controls",
        effect: "solid",
        place: "right"
      }, /*#__PURE__*/_react["default"].createElement("span", null, "".concat(isOpen ? "Hide" : "Show", " Controls"))));
    }
  }]);

  return SideBar;
}(_react.Component);

SideBar.defaultProps = {
  width: 300,
  minifiedWidth: 0,
  isOpen: true,
  onOpenOrClose: function noop() {}
};
SideBar.propTypes = {
  width: _propTypes["default"].number,
  isOpen: _propTypes["default"].bool,
  minifiedWidth: _propTypes["default"].number,
  onOpenOrClose: _propTypes["default"].func
};
var _default = SideBar;
exports["default"] = _default;
