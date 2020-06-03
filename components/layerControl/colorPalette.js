"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-grow: 1;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  padding: 4px;\n  border-radius: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-between;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultProps = {
  height: 10,
  colors: [],
  className: '',
  isSelected: false,
  isReversed: false
};

var PaletteWrapper = _styledComponents["default"].div(_templateObject());

var PaletteContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.isSelected ? props.theme.inputBorderActiveColor : 'transparent';
});

var ColorBlock = _styledComponents["default"].div(_templateObject3());

var ColorPalette = function ColorPalette(_ref) {
  var colors = _ref.colors,
      height = _ref.height,
      className = _ref.className,
      isSelected = _ref.isSelected,
      isReversed = _ref.isReversed;
  return /*#__PURE__*/_react["default"].createElement(PaletteContainer, {
    className: "color-range-palette ".concat(className),
    isSelected: isSelected
  }, /*#__PURE__*/_react["default"].createElement(PaletteWrapper, {
    className: "color-range-palette__inner",
    style: {
      height: height,
      transform: "scale(".concat(isReversed ? -1 : 1, ", 1)")
    }
  }, colors.map(function (color) {
    return /*#__PURE__*/_react["default"].createElement(ColorBlock, {
      className: "color-range-palette__block",
      key: color,
      style: {
        backgroundColor: color
      }
    });
  })));
};

ColorPalette.defaultProps = defaultProps;
var _default = ColorPalette;
exports["default"] = _default;
