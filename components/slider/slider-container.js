"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _epochSlider = _interopRequireDefault(require("./epochSlider"));

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

var Sidebar = /*#__PURE__*/function (_Component) {
  _inherits(Sidebar, _Component);

  var _super = _createSuper(Sidebar);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _super.apply(this, arguments);
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var sideBarContainerStyle = {
        width: this.props.isOpen ? '60%' : 0,
        zIndex: 99,
        display: 'flex',
        transition: 'width 250ms',
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 20,
        paddingBottom: 30
      };
      var sidebarStyle = {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        transition: 'left 250ms, right 250ms',
        alignItems: 'stretch',
        flexGrow: 1
      };
      var sidebarInnerStyle = {
        backgroundColor: '#293145',
        //#242730
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      };
      var sidebarContentStyle = {
        flexGrow: 1,
        padding: 16,
        overflowY: 'auto',
        overflowX: 'hidden',
        color: '#efefef'
      };
      var minutes = this.props.currentEpoch % 12 * 5;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "sidebar-container",
        style: sideBarContainerStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "sidebar",
        style: sidebarStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "sidebar-inner",
        style: sidebarInnerStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "sidebar-content",
        style: sidebarContentStyle
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        style: {
          color: '#efefef'
        }
      }, Math.floor(this.props.currentEpoch / 12), ":", minutes), /*#__PURE__*/_react["default"].createElement(_epochSlider["default"], null)))));
    }
  }]);

  return Sidebar;
}(_react.Component);

Sidebar.defaultProps = {
  isOpen: true
};
var mapDispatchToProps = {};

var mapStateToProps = function mapStateToProps(state) {
  return {
    tmcData: state.graph.tmc || {},
    selectedTMCS: state.incidents.selectedTMCS,
    activeTMCS: state.incidents.activeTMCS,
    currentEpoch: state.incidents.currentEpoch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Sidebar);

exports["default"] = _default;
