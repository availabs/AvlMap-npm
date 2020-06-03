"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var CodeAlt = /*#__PURE__*/function (_Component) {
  _inherits(CodeAlt, _Component);

  var _super = _createSuper(CodeAlt);

  function CodeAlt() {
    _classCallCheck(this, CodeAlt);

    return _super.apply(this, arguments);
  }

  _createClass(CodeAlt, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], _extends({
        viewBox: "0 0 64 64"
      }, this.props), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M27.768 13.97v4.803a1.2 1.2 0 0 1-1.201 1.2H22.964v8.407a3.603 3.603 0 0 1-3.602 3.603 3.603 3.603 0 0 1 3.602 3.603v8.406H26.567a1.2 1.2 0 0 1 1.2 1.201v4.804a1.2 1.2 0 0 1-1.2 1.2h-6.005a4.804 4.804 0 0 1-4.803-4.803v-7.206a3.603 3.603 0 0 0-3.603-3.602H9.754a1.196 1.196 0 0 1-1.19-1.176h-.01v-4.829c0-.663.537-1.2 1.2-1.2h2.402a3.603 3.603 0 0 0 3.603-3.604v-7.205a4.804 4.804 0 0 1 4.803-4.804h6.005a1.2 1.2 0 0 1 1.2 1.201v.002zm27.584 21.616h-2.401a3.603 3.603 0 0 0-3.603 3.602v7.206a4.804 4.804 0 0 1-4.804 4.804H38.54a1.2 1.2 0 0 1-1.201-1.201V45.193c0-.663.537-1.2 1.2-1.2H42.143v-8.407a3.603 3.603 0 0 1 3.603-3.603 3.603 3.603 0 0 1-3.603-3.603v-8.406H38.54a1.2 1.2 0 0 1-1.201-1.201v-4.804c0-.663.537-1.2 1.2-1.2h6.005a4.804 4.804 0 0 1 4.804 4.803v7.205a3.603 3.603 0 0 0 3.603 3.603h2.401c.654 0 1.175.526 1.19 1.176h.011v4.829a1.2 1.2 0 0 1-1.2 1.2z"
      }));
    }
  }]);

  return CodeAlt;
}(_react.Component);

exports["default"] = CodeAlt;

_defineProperty(CodeAlt, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});

_defineProperty(CodeAlt, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-crosshairs'
});

;
