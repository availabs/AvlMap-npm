"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 5px;\n  margin-bottom: 10px;\n  .item-selector__dropdown {\n    display: flex;\n    justify-content: center;\n  }\n  .item-selector__dropdown > span {\n    color: ", ";\n    font-size: 1rem;\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColor;
});

var _default = function _default(_ref) {
  var addLayer = _ref.addLayer,
      layers = _ref.layers;
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    placeholder: "Add A Layer",
    selectedItems: null,
    multiSelect: false,
    searchable: false,
    displayOption: function displayOption(d) {
      return d;
    },
    getOptionValue: function getOptionValue(d) {
      return d;
    },
    onChange: addLayer,
    options: layers.reduce(function (a, c) {
      return !c.active ? [].concat(_toConsumableArray(a), [c.name]) : a;
    }, [])
  }));
};

exports["default"] = _default;
