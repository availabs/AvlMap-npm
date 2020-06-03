"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _loadingPage = _interopRequireDefault(require("components/loading/loadingPage"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: radial-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: fixed!important;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 100000;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  display: none;\n\n  &.show {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n    animation-name: ", ";\n    animation-duration ", "s;\n  }\n  &.hide {\n    opacity: 0;\n    animation-name: ", ";\n    animation-duration ", "s;\n  }\n\n  div.body {\n    position: relative;\n    background-color: ", ";\n    border-radius: 4px;\n    padding: 20px;\n    animation-name: ", ";\n    animation-duration ", "s;\n    transform: translate(0, 0);\n  }\n  &.hide div.body {\n    transform: translate(0, -200%);\n    animation-name: ", ";\n    animation-duration ", "s;\n  }\n\n  div.body div.content {\n    color: ", ";\n    margin-bottom: ", "px;\n  }\n\n  div.body div.actions {\n    width: 100%;\n  }\n  div.body div.actions::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n  div.body div.actions > button:first-child {\n    float: left;\n  }\n  div.body div.actions > div.user-actions {\n    float: right;\n    display: inline-block;\n  }\n  div.body div.actions > div.user-actions > button {\n    margin-left: 10px;\n  }\n  div.body div.actions > div.user-actions > button:first-child {\n    margin-left: 20px;\n  }\n  div.body div.actions > div.user-actions > div.link-container {\n    display: inline-block;\n  }\n  div.body div.actions > div.user-actions > div.link-container.link-disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, -200%);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: translate(0, -200%);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ANIMATION_DURATION = 1.0;
var fadeIn = (0, _styledComponents.keyframes)(_templateObject());
var fadeOut = (0, _styledComponents.keyframes)(_templateObject2());
var dropIn = (0, _styledComponents.keyframes)(_templateObject3());
var dropOut = (0, _styledComponents.keyframes)(_templateObject4());

var ModalContainer = _styledComponents["default"].div(_templateObject5(), fadeIn, ANIMATION_DURATION, fadeOut, ANIMATION_DURATION, function (props) {
  return props.theme.sidePanelBg;
}, dropIn, ANIMATION_DURATION, dropOut, ANIMATION_DURATION, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.hasChildren ? 20 : 0;
});

var LoadingContainer = _styledComponents["default"].div(_templateObject6());

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hide: false,
      onResolve: null,
      onReject: null,
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "MOUNTED", false);

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.MOUNTED = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.MOUNTED = false;
    }
  }, {
    key: "setState",
    value: function setState() {
      var _get2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.MOUNTED && (_get2 = _get(_getPrototypeOf(Modal.prototype), "setState", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "onHide",
    value: function onHide() {
      var _this2 = this;

      if (!this.props.onHide) return;
      this.setState({
        hide: true
      });
      setTimeout(function () {
        _this2.props.onHide();

        _this2.state.onResolve && _this2.props.onResolveHide(_this2.state.onResolve);
        _this2.state.onReject && _this2.props.onRejectHide(_this2.state.onReject);

        _this2.setState({
          hide: false,
          onResolve: null,
          onReject: null
        });
      }, 500);
    }
  }, {
    key: "onAction",
    value: function onAction(e, action) {
      var _this3 = this;

      this.setState({
        loading: true
      });
      Promise.resolve(action(e)).then(function (res) {
        _this3.setState({
          loading: false
        });

        if (Boolean(_this3.props.onResolve)) {
          _this3.onResolve(res);
        } else if (_this3.props.hideOnAction) {
          _this3.onHide();
        }
      })["catch"](function (e) {
        return Boolean(_this3.props.onReject) && _this3.onReject(e);
      });
    }
  }, {
    key: "onResolve",
    value: function onResolve(res) {
      this.setState({
        onResolve: {
          res: res
        }
      });
    }
  }, {
    key: "onReject",
    value: function onReject(error) {
      this.setState({
        onReject: {
          error: error
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var hide = this.state.hide,
          _this$props = this.props,
          show = _this$props.show,
          persistChildren = _this$props.persistChildren;
      return /*#__PURE__*/_react["default"].createElement(ModalContainer, {
        className: (0, _classnames["default"])({
          show: show,
          hide: hide
        }),
        numActions: this.props.actions.length,
        hasChildren: Boolean(this.props.children)
      }, !this.state.loading ? null : /*#__PURE__*/_react["default"].createElement(LoadingContainer, null, /*#__PURE__*/_react["default"].createElement(_loadingPage["default"], {
        width: "100px",
        height: "100px"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "body"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, !show && !persistChildren ? null : Boolean(this.state.onResolve) && Boolean(this.props.onResolve) ? /*#__PURE__*/_react["default"].createElement(this.props.onResolve, this.state.onResolve) : Boolean(this.state.onReject) && Boolean(this.props.onReject) ? /*#__PURE__*/_react["default"].createElement(this.props.onReject, this.state.onReject) : this.props.children), /*#__PURE__*/_react["default"].createElement("div", {
        className: "actions"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-outline-danger",
        onClick: function onClick(e) {
          return _this4.onHide();
        }
      }, this.props.closeLabel), !this.props.actions.length || Boolean(this.state.onResolve) || Boolean(this.state.onReject) ? null : /*#__PURE__*/_react["default"].createElement("div", {
        className: "user-actions"
      }, this.props.actions.map(function (_ref, i) {
        var label = _ref.label,
            action = _ref.action,
            _ref$type = _ref.type,
            type = _ref$type === void 0 ? "primary" : _ref$type,
            _ref$disabled = _ref.disabled,
            disabled = _ref$disabled === void 0 ? false : _ref$disabled,
            url = _ref.url;
        return url === undefined ? /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-outline-".concat(type),
          onClick: function onClick(e) {
            return _this4.onAction(e, action);
          },
          key: i,
          disabled: disabled
        }, label) : /*#__PURE__*/_react["default"].createElement("div", {
          className: "link-container" + (disabled ? " link-disabled" : "")
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          className: "btn btn-outline-".concat(type, " ").concat(disabled ? " disabled" : ""),
          to: url || "#",
          key: i
        }, label));
      }) // END this.props.actions.map
      ))));
    }
  }]);

  return Modal;
}(_react["default"].Component);

_defineProperty(Modal, "defaultProps", {
  onHide: function onHide() {},
  show: false,
  actions: [],
  hideOnAction: true,
  closeLabel: "Close",
  persistChildren: true,
  onResolve: null,
  onResolveHide: function onResolveHide() {},
  onReject: null,
  onRejectHide: function onRejectHide() {}
});

var _default = Modal;
exports["default"] = _default;
