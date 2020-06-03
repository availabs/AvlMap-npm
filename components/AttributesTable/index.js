"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _AvlTable = _interopRequireDefault(require("../AvlTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t", ";\n\t/*overflow: auto;*/\n\tcolor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var AttributesTable = /*#__PURE__*/function (_React$Component) {
  _inherits(AttributesTable, _React$Component);

  var _super = _createSuper(AttributesTable);

  function AttributesTable(props) {
    var _this;

    _classCallCheck(this, AttributesTable);

    _this = _super.call(this, props);
    _this.state = {
      mapLoaded: false,
      needsUpdate: false,
      features: [[], []],
      queriedFeatures: 0,
      sourcesLoaded: {}
    };
    _this.timeout = null;
    _this.checkSourcesLoaded = _this.checkSourcesLoaded.bind(_assertThisInitialized(_this));
    _this.setNeedsUpdate = _this.setNeedsUpdate.bind(_assertThisInitialized(_this));
    _this.initialRender = _this.initialRender.bind(_assertThisInitialized(_this));
    return _this;
  } // shouldComponentUpdate(nextProps, nextState) {
  // 	const { features: thisFeatures, ..._thisState } = this.state,
  // 		{ features: nextFeatures, ..._nextState } = nextState;
  //
  // 	return !nextState.mapLoaded ||
  // 		!this.state.queriedFeatures && nextState.queriedFeatures ||
  // 		!deepequal(_thisState, _nextState);
  // }


  _createClass(AttributesTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkSourcesLoaded();
      this.queryRenderedFeatures();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var map = this.props.layer.map;

      if (Boolean(map)) {
        map.off("sourcedata", this.checkSourcesLoaded);
        map.off("zoomend", this.setNeedsUpdate);
        map.off("moveend", this.setNeedsUpdate);
        map.off("style.load", this.setNeedsUpdate);
      }

      clearTimeout(this.timeout);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps, oldState) {
      var map = this.props.layer.map;

      if (Boolean(map) && !this.state.mapLoaded) {
        this.setState({
          mapLoaded: true
        });
        map.on("sourcedata", this.checkSourcesLoaded);
        map.on("zoomend", this.setNeedsUpdate);
        map.on("moveend", this.setNeedsUpdate);
        map.on("style.load", this.setNeedsUpdate);
      }

      if (Object.values(this.state.sourcesLoaded).reduce(function (a, c) {
        return a && c;
      }, true)) {
        map.off("sourcedata", this.checkSourcesLoaded);
        !this.timeout && this.initialRender();
      }
    }
  }, {
    key: "initialRender",
    value: function initialRender() {
      if (!this.state.queriedFeatures) {
        this.queryRenderedFeatures();
        this.timeout = setTimeout(this.initialRender, 250);
      }
    }
  }, {
    key: "setNeedsUpdate",
    value: function setNeedsUpdate() {
      this.setState({
        needsUpdate: true
      });
    }
  }, {
    key: "checkSourcesLoaded",
    value: function checkSourcesLoaded() {
      var map = this.props.layer.map,
          sourcesLoaded = this.props.layer.layers.reduce(function (a, c) {
        if (map && Boolean(map.getSource(c.source))) {
          a[c.source] = true;
        } else {
          a[c.source] = false;
        }

        return a;
      }, {});

      if (!(0, _deepEqual["default"])(sourcesLoaded, this.state.sourcesLoaded)) {
        this.setState({
          sourcesLoaded: sourcesLoaded
        });
      }
    }
  }, {
    key: "queryRenderedFeatures",
    value: function queryRenderedFeatures() {
      var _this$props = this.props,
          layer = _this$props.layer,
          queryLayers = _this$props.queryLayers;
      var map = layer.map;
      if (!map) return [[], []];
      var data = [],
          keys = {
        layer: true
      };
      var sourceData = [],
          layers = queryLayers.length ? queryLayers : layer.layers.map(function (_ref) {
        var id = _ref.id;
        return id;
      });
      layer.layers.forEach(function (l) {
        if (layers.includes(l.id)) {
          sourceData.push([l["source"], l["source-layer"], l["id"]]);
        }
      });
      sourceData.forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 3),
            sourceId = _ref3[0],
            sourceLayer = _ref3[1],
            layer = _ref3[2];

        map.querySourceFeatures(sourceId, {
          sourceLayer: sourceLayer
        }).forEach(function (feature) {
          var _keys = Object.keys(feature.properties);

          _keys.forEach(function (key) {
            return keys[key] = true;
          });

          var row = {
            layer: layer
          };

          _keys.forEach(function (key) {
            row[key] = feature.properties[key];
          });

          data.push(row);
        });
      }); // const options = {
      // 	layers: queryLayers.length ? queryLayers : layer.layers.map(({ id }) => id)
      // };
      //
      // map.queryRenderedFeatures(options)
      // 	.forEach(feature => {
      // 		const _keys = Object.keys(feature.properties);
      // 		_keys.forEach(key => keys[key] = true);
      // 		const row = { layer: feature.layer.id };
      // 		_keys.forEach(key => {
      // 			row[key] = feature.properties[key];
      // 		})
      // 		data.push(row);
      // 	})

      var dataFunc = this.props.dataFunc;

      if (dataFunc !== null) {
        data = data.map(dataFunc);
      }

      var queriedFeatures = data.length;
      var injectedRows = this.props.injectFunc(),
          filterKey = this.props.filterKey;

      if (injectedRows.length && filterKey !== null) {
        var _keys2 = data.reduce(function (a, c) {
          a[c[filterKey]] = true;
          return a;
        }, {});

        injectedRows = injectedRows.filter(function (d) {
          return !_keys2[d[filterKey]];
        });
      }

      if (dataFunc !== null) {
        injectedRows = injectedRows.map(dataFunc);
      }

      if (injectedRows.length) {
        data = [].concat(_toConsumableArray(data), _toConsumableArray(injectedRows));
      }

      keys = injectedRows.reduce(function (keys, row) {
        return _objectSpread(_objectSpread({}, keys), Object.keys(row).reduce(function (a, c) {
          return _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, c, true));
        }, {}));
      }, keys);
      var tableKeys = this.props.tableKeys;

      if (tableKeys.length) {
        keys = tableKeys;
      } else {
        keys = Object.keys(keys);
      }

      this.setState({
        features: [keys, data],
        queriedFeatures: queriedFeatures,
        needsUpdate: false,
        loading: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state$features = _slicedToArray(this.state.features, 2),
          keys = _this$state$features[0],
          data = _this$state$features[1];

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-sm btn-outline-success",
        style: {
          margin: "10px 0px"
        },
        onClick: function onClick() {
          _this2.setState({
            page: 0
          });

          _this2.queryRenderedFeatures();
        },
        disabled: !this.state.needsUpdate
      }, "Load Table"), /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(_AvlTable["default"], {
        data: data,
        keys: this.props.tableKeys.length ? this.props.tableKeys : keys,
        expandable: this.props.expandable || [] // array of expandable columns
        ,
        isMulti: true // multi select filter

      })));
    }
  }]);

  return AttributesTable;
}(_react["default"].Component);

_defineProperty(AttributesTable, "defaultProps", {
  layer: {},
  queryLayers: [],
  dataFunc: null,
  tableKeys: [],
  injectFunc: function injectFunc() {
    return [];
  },
  filterKey: null
});

var _default = AttributesTable;
exports["default"] = _default;

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.theme.textColor;
});
