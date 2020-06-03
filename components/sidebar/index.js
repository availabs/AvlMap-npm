"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _sidebar = _interopRequireDefault(require("./sidebar"));

var _SidebarHeader = _interopRequireDefault(require("./SidebarHeader"));

var _LayerSelector = _interopRequireDefault(require("./LayerSelector"));

var _ActiveLayers = _interopRequireDefault(require("./ActiveLayers"));

var _icons = require("../common/icons");

var _styledComponents = require("../common/styled-components");

var _AccordianSelector = _interopRequireDefault(require("../AccordianSelector.js"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px 10px 10px;\n  color: ", ";\n\n  > * {\n    padding: 5px;\n    cursor: pointer;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: color 0.15s, background-color 0.15s;\n\n    :hover {\n      color: ", ";\n      background-color: ", ";\n    }\n    &.active {\n      color: ", ";\n      padding-bottom: 3px;\n      border-bottom: 2px solid ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  flex-grow: 1;\n  padding: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SidebarContent = _styledComponents2["default"].div(_templateObject(), function (props) {
  return props.theme.scrollBar;
});

var Pages = _styledComponents2["default"].div(_templateObject2(), function (props) {
  return props.theme.inputPlaceholderColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var Sidebar = /*#__PURE__*/function (_Component) {
  _inherits(Sidebar, _Component);

  var _super = _createSuper(Sidebar);

  function Sidebar() {
    var _this;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      pages: [],
      activePage: (0, _lodash["default"])(_this.props, "pages[0].page", _this.props.pages[0])
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        pages: this.expandPages()
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (!(0, _deepEqual["default"])(oldProps.pages, this.props.pages)) {
        this.setState({
          pages: this.expandPages()
        });
      }
    }
  }, {
    key: "setActivePage",
    value: function setActivePage(activePage) {
      this.setState({
        activePage: activePage
      });
    }
  }, {
    key: "expandPages",
    value: function expandPages() {
      var _this2 = this;

      return this.props.pages.map(function (page) {
        if (page === "layers") {
          return {
            page: page,
            Icon: function Icon() {
              return /*#__PURE__*/_react["default"].createElement("div", {
                className: _this2.state.activePage === page ? "active" : "",
                onClick: function onClick() {
                  return _this2.setActivePage(page);
                },
                "data-tip": true,
                "data-for": "layers-tooltip"
              }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
                width: "30px",
                height: "30px"
              }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
                place: "bottom",
                id: "layers-tooltip",
                effect: "solid",
                delayShow: 500
              }, /*#__PURE__*/_react["default"].createElement("span", null, "Layer Controls")));
            },
            Comp: function Comp() {
              return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !_this2.props.layers.reduce(function (a, c) {
                return a || !c.active;
              }, false) ? null : /*#__PURE__*/_react["default"].createElement(_LayerSelector["default"], _this2.props), /*#__PURE__*/_react["default"].createElement(_ActiveLayers["default"], _this2.props));
            }
          };
        }

        if (page === "basemaps") {
          return {
            page: page,
            Icon: function Icon() {
              return /*#__PURE__*/_react["default"].createElement("div", {
                className: _this2.state.activePage === page ? "active" : "",
                onClick: function onClick() {
                  return _this2.setActivePage(page);
                },
                "data-tip": true,
                "data-for": "basemap-tooltip"
              }, /*#__PURE__*/_react["default"].createElement("span", {
                className: "fa fa-2x fa-map"
              }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
                place: "bottom",
                id: "basemap-tooltip",
                effect: "solid",
                delayShow: 500
              }, /*#__PURE__*/_react["default"].createElement("span", null, "Basemap Selector")));
            },
            Comp: function Comp() {
              return /*#__PURE__*/_react["default"].createElement(BaseMapsSelector, {
                style: _this2.props.style,
                setMapStyle: _this2.props.setMapStyle,
                styles: _this2.props.mapStyles
              });
            }
          };
        }

        return _objectSpread(_objectSpread({}, page), {}, {
          Icon: function Icon() {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: _this2.state.activePage === page.page ? "active" : "",
              onClick: function onClick() {
                return _this2.setActivePage(page.page);
              },
              "data-tip": true,
              "data-for": "tooltip-".concat(page.page)
            }, /*#__PURE__*/_react["default"].createElement(page.Icon, null), /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
              place: "bottom",
              id: "tooltip-".concat(page.page),
              effect: "solid",
              delayShow: 500
            }, page.tooltip));
          },
          Comp: function Comp() {
            return /*#__PURE__*/_react["default"].createElement(page.Comp, {
              map: _this2.props.map,
              layers: _this2.props.layers
            });
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var pages = this.state.pages;
      return /*#__PURE__*/_react["default"].createElement(_sidebar["default"], {
        isOpen: this.props.isOpen,
        transitioning: this.props.transitioning,
        onOpenOrClose: this.props.onOpenOrClose,
        onTransitionStart: this.props.onTransitionStart
      }, !this.props.header ? null : /*#__PURE__*/_react["default"].createElement(_SidebarHeader["default"], {
        header: this.props.header
      }), /*#__PURE__*/_react["default"].createElement(Pages, null, pages.map(function (_ref) {
        var page = _ref.page,
            Icon = _ref.Icon;
        return /*#__PURE__*/_react["default"].createElement(Icon, {
          key: page
        });
      })), /*#__PURE__*/_react["default"].createElement(SidebarContent, {
        className: "sidebar-content",
        theme: this.props.theme
      }, pages.map(function (_ref2, i) {
        var page = _ref2.page,
            Comp = _ref2.Comp;
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          style: {
            display: page === _this3.state.activePage ? "block" : "none"
          }
        }, /*#__PURE__*/_react["default"].createElement(Comp, null));
      })));
    }
  }]);

  return Sidebar;
}(_react.Component);

var _default = Sidebar;
exports["default"] = _default;

var BaseMapsSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(BaseMapsSelector, _React$Component);

  var _super2 = _createSuper(BaseMapsSelector);

  function BaseMapsSelector() {
    _classCallCheck(this, BaseMapsSelector);

    return _super2.apply(this, arguments);
  }

  _createClass(BaseMapsSelector, [{
    key: "onSelect",
    value: function onSelect(name) {
      var style = this.props.styles.reduce(function (a, c) {
        return c.name === name ? c : a;
      });
      this.props.setMapStyle(style);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          styles = _this$props.styles,
          style = _this$props.style,
          options = styles.map(function (_ref3) {
        var name = _ref3.name,
            url = _ref3.url;
        return {
          label: name,
          Icon: function Icon() {
            return /*#__PURE__*/_react["default"].createElement("img", {
              src: url
            });
          }
        };
      });
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_AccordianSelector["default"], {
        value: style.name,
        options: options,
        onSelect: function onSelect(v) {
          return _this4.onSelect(v);
        }
      }));
    }
  }]);

  return BaseMapsSelector;
}(_react["default"].Component);
