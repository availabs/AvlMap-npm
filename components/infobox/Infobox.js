"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Legend = _interopRequireDefault(require("../legend/Legend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  var data = _taggedTemplateLiteral(["\n  ", ";\n  flex-grow: 1;\n  padding: ", "px;\n/*\n  overflow-y: auto;\n  overflow-x: hidden;\n*/\n  overflow: auto;\n  color: ", ";\n\n  > * {\n    margin-bottom: 10px;\n  }\n  > *:last-child {\n    margin-bottom: 0px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  pointer-events: all;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  width: ", "px;\n  z-index: 99;\n  display: flex;\n  position: absolute;\n  padding: 20px;\n  top: 0px;\n  right: 0px;\n  max-height: calc(100vh - 100px);\n  pointer-events: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: bold;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: bold;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding: 5px 8px 8px 8px;\n  border-radius: 4px;\n  color: ", ";\n  background-color: transparent;\n  transition: colors 0.15s, background-color 0.15s;\n\n  :hover {\n    color: ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  min-height: 25px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InfoBoxContainer = _styledComponents["default"].div(_templateObject());

var ToggleButton = _styledComponents["default"].span(_templateObject2(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.panelBackgroundHover;
});

var CollapsedInfoBox = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.inputPlaceholderColor;
});

var OpenInfoBoxTitle = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.textColorHl;
});

var SidebarContainer = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.isOpen ? 400 : 0;
});

var SidebarInner = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.theme.sidePanelBg;
});

var SidebarContent = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.isOpen ? 10 : 0;
}, function (props) {
  return props.theme.textColor;
});

var InfoBox = /*#__PURE__*/function (_Component) {
  _inherits(InfoBox, _Component);

  var _super = _createSuper(InfoBox);

  function InfoBox() {
    var _this;

    _classCallCheck(this, InfoBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      collapsedInfoBoxes: []
    });

    return _this;
  }

  _createClass(InfoBox, [{
    key: "toggleInfoBox",
    value: function toggleInfoBox(id) {
      var collapsedInfoBoxes = this.state.collapsedInfoBoxes;

      if (collapsedInfoBoxes.includes(id)) {
        this.setState({
          collapsedInfoBoxes: collapsedInfoBoxes.filter(function (d) {
            return d !== id;
          })
        });
      } else {
        this.setState({
          collapsedInfoBoxes: [].concat(_toConsumableArray(collapsedInfoBoxes), [id])
        });
      }
    }
  }, {
    key: "getToggleButton",
    value: function getToggleButton(id) {
      return "fa fa-lg\n      ".concat(this.state.collapsedInfoBoxes.includes(id) ? "fa-chevron-down" : "fa-chevron-up", "\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          layers = _this$props.layers,
          activeLayers = _this$props.activeLayers,
          _activeLayers = layers.filter(function (l) {
        return activeLayers.includes(l.name);
      }),
          activeLegends = _activeLayers.reduce(function (a, c) {
        return c.legend && c.legend.active !== false && c.legend.domain.length ? a.concat({
          legend: c.legend,
          layer: c
        }) : a;
      }, []),
          activeInfoBoxes = _activeLayers.reduce(function (a, c) {
        return c.infoBoxes ? a.concat(Object.keys(c.infoBoxes).map(function (key, i) {
          return _objectSpread(_objectSpread({
            title: "".concat(c.name, " ").concat(key)
          }, c.infoBoxes[key]), {}, {
            id: "".concat(c.name, "-").concat(key),
            layer: c
          });
        }).filter(function (i) {
          return i.show;
        })) : a;
      }, []),
          isOpen = activeLegends.length || activeInfoBoxes.length;

      var sidebarStyle = {
        alignItems: 'stretch',
        flexGrow: 1
      };
      return /*#__PURE__*/_react["default"].createElement(SidebarContainer, {
        className: "sidebar-container",
        isOpen: isOpen
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "sidebar",
        style: sidebarStyle
      }, /*#__PURE__*/_react["default"].createElement(SidebarInner, {
        className: "sidebar-inner",
        isOpen: isOpen
      }, /*#__PURE__*/_react["default"].createElement(SidebarContent, {
        className: "sidebar-content",
        isOpen: isOpen
      }, activeLegends.map(function (l, i) {
        return /*#__PURE__*/_react["default"].createElement(_Legend["default"], _extends({
          key: i
        }, l.legend, {
          layer: l.layer
        }));
      }), activeInfoBoxes.map(function (b, i) {
        return /*#__PURE__*/_react["default"].createElement(InfoBoxContainer, {
          key: i
        }, _this2.state.collapsedInfoBoxes.includes(b.id) ? typeof b.title === "function" ? /*#__PURE__*/_react["default"].createElement(CollapsedInfoBox, null, /*#__PURE__*/_react["default"].createElement(b.title, {
          layer: b.layer
        })) : /*#__PURE__*/_react["default"].createElement(CollapsedInfoBox, null, b.title) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, typeof b.title === "function" ? /*#__PURE__*/_react["default"].createElement(OpenInfoBoxTitle, null, /*#__PURE__*/_react["default"].createElement(b.title, {
          layer: b.layer
        })) : /*#__PURE__*/_react["default"].createElement(OpenInfoBoxTitle, null, b.title), /*#__PURE__*/_react["default"].createElement(b.comp, {
          layer: b.layer
        })), /*#__PURE__*/_react["default"].createElement(ToggleButton, {
          className: _this2.getToggleButton(b.id),
          onClick: function onClick() {
            return _this2.toggleInfoBox(b.id);
          }
        }));
      })))));
    }
  }]);

  return InfoBox;
}(_react.Component);

var _default = InfoBox;
exports["default"] = _default;
