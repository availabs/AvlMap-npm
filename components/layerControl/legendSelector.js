"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _singleSelectFilter = _interopRequireDefault(require("../filters/single-select-filter"));

var _colorPalette = _interopRequireDefault(require("./colorPalette"));

var _colorRanges = _interopRequireDefault(require("../constants/color-ranges"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _lodash = _interopRequireDefault(require("lodash.get"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  margin-bottom: 5px;\n  border-radius: 1px;\n  padding-left: 12px;\n  padding-right: 12px;\n  .filter-panel__filter {\n    margin-top: 24px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFilterPanel = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var ColorSelector = /*#__PURE__*/function (_Component) {
  _inherits(ColorSelector, _Component);

  var _super = _createSuper(ColorSelector);

  function ColorSelector(props) {
    var _this;

    _classCallCheck(this, ColorSelector);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (_this.state.editing !== false) {
        _this.setState({
          editing: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onSelectColor", function (color, e) {
      e.stopPropagation();

      if (_this.props.colorSets[_this.state.editing]) {
        _this.props.colorSets[_this.state.editing].setColor(color);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_showDropdown", function (e) {
      e.stopPropagation();
      e.preventDefault();

      _this.setState({
        editing: true
      });
    });

    _this.state = {
      editing: false,
      length: props.layer.legend.range.length,
      isReversed: false,
      type: props.layer.legend.type
    };
    return _this;
  }

  _createClass(ColorSelector, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps, oldState) {
      if (this.state.type !== this.props.layer.legend.type || this.props.layer.legend.type === "ordinal" && this.state.length !== this.props.layer.legend.range.length) {
        this.setState({
          length: this.props.layer.legend.range.length,
          type: this.props.layer.legend.type
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var legend = this.props.layer.legend;
      return /*#__PURE__*/_react["default"].createElement(StyledFilterPanel, null, /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this._showDropdown.bind(this)
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, "Legend Selector"), /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
        colors: legend.range
      })), !this.state.editing ? null : /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledPanelDropdown, {
        className: "color-selector__dropdown",
        style: {
          padding: "5px"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: "5px"
        }
      }), !legend.types || legend.types && legend.types.length <= 1 ? null : /*#__PURE__*/_react["default"].createElement(_singleSelectFilter["default"], {
        filter: {
          name: "Scale Type",
          domain: legend.types,
          value: legend.type
        },
        setFilter: function setFilter(type) {
          return _this2.props.updateLegend(_this2.props.layer.name, {
            type: type
          });
        }
      }), legend.type === "ordinal" ? null : /*#__PURE__*/_react["default"].createElement(_singleSelectFilter["default"], {
        filter: {
          name: "Steps",
          domain: Object.keys(_colorRanges["default"]),
          value: this.state.length
        },
        setFilter: function setFilter(length) {
          return _this2.setState({
            length: length
          });
        }
      }), // COLOR_RANGES[this.state.length]
      (0, _lodash["default"])(_colorRanges["default"], this.state.length, []) // .filter(cr => legend.type !== "ordinal" || cr.type === "qualitative")
      .map(function (cr, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: cr.name,
          onClick: function onClick(e) {
            return _this2.props.updateLegend(_this2.props.layer.name, {
              range: cr.colors.slice()
            });
          },
          "data-tip": true,
          "data-for": "legend-color-item-".concat(cr.name),
          style: {
            cursor: "pointer"
          }
        }, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
          colors: cr.colors,
          isReversed: _this2.state.isReversed,
          isSelected: (0, _deepEqual["default"])(cr.colors, legend.range)
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
          id: "legend-color-item-".concat(cr.name),
          effect: "solid",
          place: "right",
          delayShow: 500
        }, /*#__PURE__*/_react["default"].createElement("span", null, cr.name)));
      })));
    }
  }]);

  return ColorSelector;
}(_react.Component);

;

var _default = (0, _reactOnclickoutside["default"])(ColorSelector);

exports["default"] = _default;
