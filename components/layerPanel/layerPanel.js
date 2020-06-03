"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAnythingSortable = require("react-anything-sortable");

var _layerConfigurator = _interopRequireDefault(require("./layer-configurator"));

var _layerPanelHeader = _interopRequireDefault(require("./layer-panel-header"));

var _class, _class2, _temp;

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n\n  &.dragging {\n    cursor: move;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PanelWrapper = _styledComponents["default"].div(_templateObject());

var LayerPanel = (0, _reactAnythingSortable.sortable)(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  _inherits(LayerPanel, _Component);

  var _super = _createSuper(LayerPanel);

  function LayerPanel() {
    var _this;

    _classCallCheck(this, LayerPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.updateLayerConfig = function (newProp) {
      _this.props.layerConfigChange(_this.props.layer, newProp);
    };

    _this.updateLayerType = function (newType) {
      _this.props.layerTypeChange(_this.props.layer, newType);
    };

    _this.updateLayerVisConfig = function (newVisConfig) {
      _this.props.layerVisConfigChange(_this.props.layer, newVisConfig);
    };

    _this.updateLayerVisualChannelConfig = function (newConfig, channel, scaleKey) {
      _this.props.layerVisualChannelConfigChange(_this.props.layer, newConfig, channel, scaleKey);
    };

    _this._updateLayerLabel = function (_ref) {
      var value = _ref.target.value;

      _this.updateLayerConfig({
        label: value
      });
    };

    _this._toggleVisibility = function (e) {
      e.stopPropagation();
      var isVisible = !_this.props.layer.config.isVisible;

      _this.updateLayerConfig({
        isVisible: isVisible
      });
    };

    _this._toggleEnableConfig = function (e) {
      e.stopPropagation();
      var isConfigActive = _this.props.layer.config.isConfigActive;

      _this.updateLayerConfig({
        isConfigActive: !isConfigActive
      });
    };

    _this._removeLayer = function (e) {
      e.stopPropagation();

      _this.props.removeLayer(_this.props.idx);
    };

    return _this;
  }

  _createClass(LayerPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          layer = _this$props.layer,
          idx = _this$props.idx,
          datasets = _this$props.datasets,
          layerTypeOptions = _this$props.layerTypeOptions;
      var config = layer.config;
      var isConfigActive = config.isConfigActive;
      return /*#__PURE__*/_react["default"].createElement(PanelWrapper, {
        active: isConfigActive,
        className: "layer-panel ".concat(this.props.className),
        style: this.props.style,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onTouchStart
      }, /*#__PURE__*/_react["default"].createElement(_layerPanelHeader["default"], {
        isConfigActive: isConfigActive,
        id: layer.id,
        idx: idx,
        isVisible: config.isVisible,
        label: config.label,
        labelRCGColorValues: datasets[config.dataId].color,
        layerType: layer.name,
        onToggleEnableConfig: this._toggleEnableConfig,
        onToggleVisibility: this._toggleVisibility,
        onUpdateLayerLabel: this._updateLayerLabel,
        onRemoveLayer: this._removeLayer
      }));
    }
  }]);

  return LayerPanel;
}(_react.Component), _class2.propTypes = {
  layer: _propTypes["default"].object.isRequired,
  datasets: _propTypes["default"].object.isRequired,
  idx: _propTypes["default"].number.isRequired,
  layerConfigChange: _propTypes["default"].func.isRequired,
  layerTypeChange: _propTypes["default"].func.isRequired,
  openModal: _propTypes["default"].func.isRequired,
  removeLayer: _propTypes["default"].func.isRequired,
  onCloseConfig: _propTypes["default"].func,
  layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  layerVisConfigChange: _propTypes["default"].func,
  layerVisualChannelConfigChange: _propTypes["default"].func
}, _temp)) || _class;

exports["default"] = LayerPanel;
