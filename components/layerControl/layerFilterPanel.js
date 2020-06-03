"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _filters = require("../filters");

var _timeRangeSlider = _interopRequireDefault(require("../time-range-slider/time-range-slider"));

var _bigEpochSlider = _interopRequireDefault(require("../big-epoch-slider"));

var _sliderFilter = _interopRequireDefault(require("./slider-filter"));

var _checkboxFilter = _interopRequireDefault(require("./checkboxFilter"));

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 20px;\n  z-index: 1000;\n  position: fixed;\n  bottom: 30px;\n  right: 50px;\n  width: 750px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 12px;\n  border-radius: 1px;\n  .filter-panel__filter {\n    margin-top: 24px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// const sliderStyle =  {
//     width: '100%',
//     height: 24,
//     background: '#29323C',
//     outline: 'none',
//     opacity: '0.7',
//     // WebkitTransition: 'opacity .15s ease-in-out',
//     transition: 'opacity .15s ease-in-out'
// }
var StyledFilterPanel = _styledComponents["default"].div(_templateObject()); // const StyledFilterHeader = StyledPanelHeader.extend`
//   cursor: pointer;
//   padding: 10px 12px;
// `;
// const SubmitButton = styled.button`
//   background-color: ${ props => props.theme.primaryBtnBgd };
//   width: 100%
// `
// const SubmitButton = styled(Button)`
//   width: 100%
// `


var StyledFilterContent = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.panelBackground;
});

var TimeRangeSliderContainer = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.panelBackground;
}); // const CheckboxContainer = styled.div`
//   margin-top: 15px;
//   margin-bottom: 10px;
//   padding: 8px 10px;
//   background-color: ${ props => props.theme.secondaryInputBgd };
// `


var LayerFilterPanel = /*#__PURE__*/function (_Component) {
  _inherits(LayerFilterPanel, _Component);

  var _super = _createSuper(LayerFilterPanel);

  function LayerFilterPanel() {
    _classCallCheck(this, LayerFilterPanel);

    return _super.apply(this, arguments);
  }

  _createClass(LayerFilterPanel, [{
    key: "render",
    value: function render() {
      var _this = this;

      var layer = this.props.layer,
          filters = layer.filters;

      var renderFilter = function renderFilter(filterName, i) {
        var filter = filters[filterName];

        var dispatchUpdateFilter = function dispatchUpdateFilter(value) {
          _this.props.updateFilter(layer.name, filterName, value);
        };

        var getFilter = function getFilter(filter) {
          if (filter.active === false) return null;

          switch (filter.type) {
            case 'dropdown':
            case 'single':
              return /*#__PURE__*/_react["default"].createElement(_filters.SingleSelectFilter, {
                setFilter: dispatchUpdateFilter,
                filter: filter
              });

            case 'multi':
              return /*#__PURE__*/_react["default"].createElement(_filters.MultiSelectFilter, {
                setFilter: dispatchUpdateFilter,
                filter: filter
              });

            case 'hidden':
              return /*#__PURE__*/_react["default"].createElement("span", null);

            case 'fetch':
              return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
                onClick: function onClick() {
                  return dispatchUpdateFilter(null);
                },
                disabled: Boolean(filter.disabled),
                style: {
                  width: "100%"
                },
                secondary: true
              }, filter.name);

            case 'checkbox':
              return /*#__PURE__*/_react["default"].createElement(_checkboxFilter["default"], {
                label: filter.name,
                checked: filter.value,
                onChange: dispatchUpdateFilter
              });

            case 'slider':
              return /*#__PURE__*/_react["default"].createElement(_sliderFilter["default"], _extends({}, filter, {
                onChange: dispatchUpdateFilter
              }));

            case 'date':
              return /*#__PURE__*/_react["default"].createElement(_filters.DateFilter, {
                setFilter: dispatchUpdateFilter,
                filter: filter
              });

            case "time-range":
              return /*#__PURE__*/_react["default"].createElement(TimeRangeSliderContainer, null, /*#__PURE__*/_react["default"].createElement(_timeRangeSlider["default"], {
                onChange: dispatchUpdateFilter,
                histogram: filter.histogram,
                domain: filter.domain,
                value: filter.value,
                step: filter.step,
                toggleAnimation: function toggleAnimation() {
                  return console.log("toggleAnimation");
                },
                isEnlarged: true,
                isAnimatable: true,
                speed: filter.speed || 1,
                hideTitle: filter.hideTitle,
                Title: filter.Title
              }));

            case "big-epoch-slider":
              return /*#__PURE__*/_react["default"].createElement(TimeRangeSliderContainer, null, /*#__PURE__*/_react["default"].createElement(_bigEpochSlider["default"], {
                onChange: dispatchUpdateFilter,
                bargraph: filter.bargraph,
                domain: filter.domain,
                value: filter.value,
                step: filter.step,
                toggleAnimation: function toggleAnimation() {
                  return console.log("toggleAnimation");
                },
                isEnlarged: true,
                isAnimatable: true,
                speed: filter.speed || 1,
                hideTitle: filter.hideTitle,
                Comp: filter.Comp,
                Title: filter.Title
              }));

            default:
              return /*#__PURE__*/_react["default"].createElement("span", null, "Invalid Filter Type ", filter.type);
          }
        };

        return /*#__PURE__*/_react["default"].createElement("div", {
          key: i
        }, getFilter(filter));
      };

      return /*#__PURE__*/_react["default"].createElement(StyledFilterPanel, {
        className: "filter-panel"
      }, /*#__PURE__*/_react["default"].createElement(StyledFilterContent, {
        className: "filter-panel__content"
      }, Object.keys(filters).map(renderFilter)));
    }
  }]);

  return LayerFilterPanel;
}(_react.Component);

var _default = LayerFilterPanel;
exports["default"] = _default;
