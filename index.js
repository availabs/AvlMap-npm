"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULT_STYLES = void 0;

var _react = _interopRequireDefault(require("react"));

var _mapboxGl = _interopRequireDefault(require("mapbox-gl/dist/mapbox-gl"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Format = require("d3-format");

var _sidebar = _interopRequireDefault(require("./components/sidebar"));

var _Infobox = _interopRequireDefault(require("./components/infobox/Infobox"));

var _MapPopover = _interopRequireDefault(require("./components/popover/MapPopover"));

var _MapModal = _interopRequireDefault(require("./components/modal/MapModal"));

var _MapActions = _interopRequireDefault(require("./components/MapActions"));

var _MapMessages = _interopRequireDefault(require("./components/MapMessages"));

var _loadingPage = require("./components/loading/loadingPage");

require("./avlmap.css");

var _LayerMessageSystem = require("./LayerMessageSystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tbottom: 20px;\n\tleft: ", "px;\n\ttransition: left 0.25s;\n\tz-index: 50;\n\tdisplay: flex;\n\tflex-direction: column;\n  pointer-events: none;\n  color: ", ";\n  > * {\n    margin-bottom: 10px;\n    min-width: 300px;\n    background-color: ", ";\n    border-radius: 4px;\n    border-top-right-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n    font-size: 1rem;\n  }\n\t> *:last-child {\n\t\tmargin-bottom: 0px;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

var UNIQUE_ID = 0;

var getUniqueId = function getUniqueId() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "unique-id";
  return "".concat(str, "-").concat(++UNIQUE_ID);
}; // const getMapPreview = (map, style, size=[60, 40]) => {
//   if (!Boolean(map)) return "";
//
//   return `https://api.mapbox.com/styles/v1/am3081/${ style }/static/` +
//     `${ map.getCenter().toArray().join(',') },${ map.getZoom() },0,0/` +
//     `${ size.join('x') }?` +
//     `attribution=false&logo=false&access_token=${ mapboxgl.accessToken }`;
// }


var getStaticImageUrl = function getStaticImageUrl(style) {
  return "https://api.mapbox.com/styles/v1/am3081/".concat(style, "/static/") + "".concat(-74.2179, ",", 43.2994, ",1.5/60x40?") + "attribution=false&logo=false&access_token=".concat(_mapboxGl["default"].accessToken);
};

var DEFAULT_STYLES = [{
  name: "Dark",
  style: "mapbox://styles/am3081/cjqqukuqs29222sqwaabcjy29"
}, {
  name: "Light",
  style: 'mapbox://styles/am3081/cjms1pdzt10gt2skn0c6n75te'
}, {
  name: "Satellite",
  style: 'mapbox://styles/am3081/cjya6wla3011q1ct52qjcatxg'
}, {
  name: "Satellite Streets",
  style: "mapbox://styles/am3081/cjya70364016g1cpmbetipc8u"
}];
exports.DEFAULT_STYLES = DEFAULT_STYLES;

var AvlMap = /*#__PURE__*/function (_React$Component) {
  _inherits(AvlMap, _React$Component);

  var _super = _createSuper(AvlMap);

  _createClass(AvlMap, [{
    key: "testFunc",
    value: function testFunc() {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ["TEST FUNCTION:"].concat(_toConsumableArray([].concat(args).map(function (arg) {
        return arg.toString();
      }))));
    }
  }]);

  function AvlMap(props) {
    var _this;

    _classCallCheck(this, AvlMap);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "sta", void 0);

    _this.state = {
      id: _this.props.id || getUniqueId('avl-map'),
      map: null,
      dynamicLayers: [],
      activeLayers: [],
      sources: {},
      popover: {
        pos: [0, 0],
        pinned: false,
        data: [],
        layer: null
      },
      dragging: null,
      dragover: null,
      width: 0,
      height: 0,
      messages: [],
      isOpen: true,
      transitioning: false,
      style: props.styles.reduce(function (a, c) {
        return c.name === props.styleName || c.name === props.style ? c : a;
      }, props.styles[0])
    };
    _this.MOUNTED = false;
    _mapboxGl["default"].accessToken = props.MAPBOX_TOKEN;
    _this.container = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(AvlMap, [{
    key: "setState",
    value: function setState() {
      var _get2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.MOUNTED && (_get2 = _get(_getPrototypeOf(AvlMap.prototype), "setState", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      var _get3;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.MOUNTED && (_get3 = _get(_getPrototypeOf(AvlMap.prototype), "forceUpdate", this)).call.apply(_get3, [this].concat(args));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.MOUNTED = true;
      var _this$props = this.props,
          center = _this$props.center,
          minZoom = _this$props.minZoom,
          zoom = _this$props.zoom,
          mapControl = _this$props.mapControl,
          preserveDrawingBuffer = _this$props.preserveDrawingBuffer,
          style = _this$props.style;
      var id = this.state.id;
      var regex = /^mapbox:\/\/styles\//;
      var map = new _mapboxGl["default"].Map({
        container: id,
        style: regex.test(style) ? style : this.state.style.style,
        center: center,
        minZoom: minZoom,
        zoom: zoom,
        attributionControl: false,
        preserveDrawingBuffer: preserveDrawingBuffer
      });

      if (mapControl) {
        map.addControl(new _mapboxGl["default"].NavigationControl(), mapControl);
      }

      if (!this.props.boxZoom) {
        map.boxZoom.disable();
      }

      if (!this.props.scrollZoom) {
        map.scrollZoom.disable();
      }

      ;

      _toConsumableArray(document.getElementsByClassName("mapboxgl-ctrl-logo")).forEach(function (logo) {
        logo.parentElement.style.margin = '0';
        logo.style.display = 'none';
      });

      this.props.layers.forEach(function (layer) {
        layer.version = layer.version || 1.0;
        layer.initComponent(_this2);
      });
      map.on('load', function () {
        var activeLayers = [];

        _this2.props.layers.forEach(function (layer) {
          layer.initMap(map);

          if (layer.active) {
            _this2._addLayer(map, layer, activeLayers);

            activeLayers.push(layer.name);

            layer._onAdd(map);

            ++layer.loading;
            var layerProps = (0, _lodash["default"])(_this2.props.layerProps, layer.name, {});
            Promise.resolve(layer.onAdd(map, layerProps)).then(function () {
              return --layer.loading;
            }).then(function () {
              return layer.render(map);
            }).then(function () {
              return _this2.setState({
                activeLayers: activeLayers
              });
            });
          }
        });

        if (_this2.props.fitBounds) {
          map.fitBounds(_this2.props.fitBounds);
        }

        _this2.setState({
          map: map,
          activeLayers: []
        });

        AvlMap.addActiveMap(id, _this2, map);
      }); // map.on('sourcedata', () => this.foceUpdate());

      this.setContainerSize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // this.state.activeLayers.forEach(layer => this.removeLayer(layer));
      this.MOUNTED = false;
      AvlMap.removeActiveMap(this.state.id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps, oldState) {
      var _this3 = this;

      this.setContainerSize();
      this.state.activeLayers.forEach(function (layerName) {
        var layer = _this3.getLayer(layerName);

        var layerProps = (0, _lodash["default"])(_this3.props, ["layerProps", layerName], null);

        if (layerProps) {
          layer.receiveProps(oldProps.layerProps[layerName], layerProps);
        }

        if (!(0, _deepEqual["default"])(oldProps.layerProps[layerName], layerProps)) {
          layer.onPropsChange(oldProps.layerProps[layerName], layerProps);
        }
      });
    }
  }, {
    key: "addDynamicLayer",
    value: function addDynamicLayer(layerName, layerFactory) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        if (!_this4.state.map) return resolve();

        var layer = _this4.getLayer(layerName);

        if (!layer) return resolve();
        var newLayer = layerFactory.call(null, layer),
            newLayerName = newLayer.name,
            allLayers = [].concat(_toConsumableArray(_this4.props.layers), _toConsumableArray(_this4.state.dynamicLayers));
        newLayer._isDynamic = true;
        newLayer.initComponent(_this4);
        newLayer.initMap(_this4.state.map);
        var adjustName = allLayers.reduce(function (a, c) {
          return a || c.name === newLayerName;
        }, false);

        if (adjustName) {
          var regExpStr = newLayerName + " " + "\\((\\d+)\\)",
              regex = new RegExp(regExpStr),
              num = allLayers.reduce(function (a, c) {
            var match = regex.exec(c.name);

            if (match) {
              return Math.max(a, +match[1]);
            }

            return a;
          }, 1);
          newLayer.name = "".concat(newLayerName, " (").concat(num + 1, ")");
        }

        if (newLayer.active) {
          _this4._addLayer(_this4.state.map, newLayer);

          ++newLayer.loading;

          newLayer._onAdd(_this4.state.map);

          var layerProps = (0, _lodash["default"])(_this4.props.layerProps, newLayer.name, {});
          Promise.resolve(newLayer.onAdd(_this4.state.map, layerProps)).then(function () {
            return --newLayer.loading;
          }).then(function () {
            return newLayer.render(_this4.state.map);
          }).then(function () {
            return _this4.setState({
              activeLayers: [].concat(_toConsumableArray(_this4.state.activeLayers), [newLayer.name])
            });
          });
        }

        _this4.setState({
          dynamicLayers: [].concat(_toConsumableArray(_this4.state.dynamicLayers), [newLayer])
        });

        resolve(newLayer);
      });
    }
  }, {
    key: "deleteDynamicLayer",
    value: function deleteDynamicLayer(layerName) {
      var otherLayerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      layerName = otherLayerName || layerName;
      var layer = this.getLayer(layerName);
      if (!layer) return;
      this.removeLayer(layerName);
      this.setState({
        dynamicLayers: this.state.dynamicLayers.filter(function (l) {
          return l.name !== layerName;
        })
      });
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(layerName, data) {
      data = _objectSpread(_objectSpread({
        id: getUniqueId(),
        duration: data.onConfirm ? 0 : 6000
      }, data), {}, {
        Message: data.msg || data.message || data.Message,
        update: false,
        layer: this.getLayer(layerName)
      }); // console.log("<AvlMap.sendMessage>", layerName, data, [...this.state.messages]);

      var update = this.state.messages.reduce(function (a, c) {
        return a || c.id === data.id;
      }, false);

      var messages = _toConsumableArray(this.state.messages);

      if (update) {
        messages = messages.map(function (_ref) {
          var id = _ref.id,
              Message = _ref.Message,
              rest = _objectWithoutProperties(_ref, ["id", "Message"]);

          return _objectSpread(_objectSpread({
            Message: id === data.id ? data.Message : Message,
            id: id
          }, rest), {}, {
            update: id === data.id ? Date.now() : false
          });
        });
      } else {
        messages = [].concat(_toConsumableArray(messages), [data]);
      }

      this.setState({
        messages: messages
      });
    }
  }, {
    key: "dismissMessage",
    value: function dismissMessage(id) {
      var messages = this.state.messages.filter(function (m) {
        return m.id !== id;
      }); // console.log("<AvlMap.dismissMessage>", id, messages);

      this.setState({
        messages: messages
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(layerName) {
      var layer = this.getLayer(layerName);
      layer && layer.active && layer.render(this.state.map);
    }
  }, {
    key: "setContainerSize",
    value: function setContainerSize() {
      var div = this.container.current,
          width = div.scrollWidth,
          height = div.scrollHeight;

      if (width !== this.state.width || height !== this.state.height) {
        this.setState({
          width: width,
          height: height
        });
      }
    }
  }, {
    key: "getLayer",
    value: function getLayer(layerName) {
      return [].concat(_toConsumableArray(this.props.layers), _toConsumableArray(this.state.dynamicLayers)).reduce(function (a, c) {
        return c.name === layerName ? c : a;
      }, null);
    }
  }, {
    key: "_addLayer",
    value: function _addLayer(map, newLayer) {
      var _this5 = this;

      var activeLayers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.state.activeLayers;

      var sources = _objectSpread({}, this.state.sources);

      var sourcesToAdd = new Set(newLayer.layers.map(function (l) {
        return l.source;
      }));
      newLayer.sources.forEach(function (source) {
        if (!sourcesToAdd.has(source.id)) return;

        if (!map.getSource(source.id)) {
          map.addSource(source.id, source.source);
        }

        if (!(source.id in sources)) {
          sources[source.id] = [];
        }
      });
      var activeMBLayers = activeLayers.reduce(function (a, ln) {
        var layer = _this5.props.layers.reduce(function (a, c) {
          return c.name === ln ? c : a;
        });

        return [].concat(_toConsumableArray(a), _toConsumableArray(layer.layers));
      }, []);
      var newMBLayers = newLayer.layers.slice();
      newMBLayers.sort(function (a, b) {
        var azi = a.zIndex || 0,
            bzi = b.zIndex || 0;
        return azi - bzi;
      }); //console.log('mbLayers', newMBLayers)

      newMBLayers.forEach(function (mbLayer) {
        var zIndex = mbLayer.zIndex || 0;
        var layerAdded = false;
        activeMBLayers.forEach(function (aMBL) {
          var aMBLzIndex = aMBL.zIndex || 0;

          if (aMBLzIndex > zIndex) {
            if (!map.getLayer(mbLayer.id)) {
              map.addLayer(mbLayer, aMBL.id);
              layerAdded = true;
            }
          }
        });

        if (!layerAdded) {
          if (Boolean(mbLayer.beneath) && Boolean(map.getLayer(mbLayer.beneath))) {
            map.addLayer(mbLayer, mbLayer.beneath);
          } else {
            map.addLayer(mbLayer);
          }
        }

        sources[mbLayer.source].push(mbLayer.id);
      });
      this.setState({
        sources: sources
      });
    }
  }, {
    key: "addLayer",
    value: function addLayer(layerName) {
      var _this6 = this;

      var otherLayerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      layerName = otherLayerName || layerName;
      var layer = this.getLayer(layerName);

      if (this.state.map && layer && !layer.active) {
        layer.active = true;

        this._addLayer(this.state.map, layer);

        ++layer.loading;

        layer._onAdd(this.state.map);

        var layerProps = (0, _lodash["default"])(this.props.layerProps, layerName, {});
        Promise.resolve(layer.onAdd(this.state.map, layerProps)).then(function () {
          return --layer.loading;
        }).then(function () {
          return layer.render(_this6.state.map);
        }).then(function () {
          return _this6.setState({
            activeLayers: [].concat(_toConsumableArray(_this6.state.activeLayers), [layerName])
          });
        });
        ;
      }
    }
  }, {
    key: "removeLayer",
    value: function removeLayer(layerName) {
      var _this7 = this;

      var otherLayerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      layerName = otherLayerName || layerName;
      var layer = this.getLayer(layerName);

      if (this.state.map && layer && layer.active && !layer.loading) {
        layer.active = false;

        layer._onRemove(this.state.map);

        layer.onRemove(this.state.map);
        var sourcesToRemove = [];
        layer.layers.forEach(function (layer) {
          _this7.state.map.removeLayer(layer.id);

          sourcesToRemove.push([layer.source, layer.id]);
        });

        var sources = _objectSpread({}, this.state.sources);

        sourcesToRemove.forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              sourceId = _ref3[0],
              layerId = _ref3[1];

          if (sourceId in sources) {
            sources[sourceId] = sources[sourceId].filter(function (lId) {
              return lId !== layerId;
            });
          }
        });
        layer.sources.forEach(function (source) {
          if ((0, _lodash["default"])(sources, [source.id, "length"], "not-added") === 0) {
            _this7.state.map.removeSource(source.id);

            delete sources[source.id];
          }
        });
        this.setState({
          activeLayers: this.state.activeLayers.filter(function (ln) {
            return ln !== layerName;
          }),
          sources: sources
        });
      } else if (this.state.map && layer && layer.active && layer.loading) {
        this.sendMessage(null, {
          Message: "Cannot remove a layer while it is loading."
        });
      }
    }
  }, {
    key: "toggleLayerVisibility",
    value: function toggleLayerVisibility(layerName) {
      var layer = this.getLayer(layerName);

      if (this.state.map && layer) {
        layer.toggleVisibility(this.state.map);
        this.forceUpdate();
      }
    }
  }, {
    key: "updatePopover",
    value: function updatePopover(layerName, update) {
      if (update.pinned === false && this.state.popover.pinned) {
        var func = this.state.popover.layer.popover.onUnPinned;
        typeof func === "function" && func.call(this.state.popover.layer);

        this.state.popover.layer._clearPinnedState();
      }

      this.setState({
        popover: _objectSpread(_objectSpread({}, this.state.popover), update)
      });
    }
  }, {
    key: "toggleModal",
    value: function toggleModal(layerName, modalName) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var layer = this.getLayer(layerName),
          modal = layer.modals[modalName],
          show = !modal.show;
      this.props.layers.forEach(function (layer) {
        if (layer.modals) {
          for (var _modal in layer.modals) {
            layer.modals[_modal].show = false;
          }
        }
      });
      modal.show = show;
      modal.props = modal.props ? _objectSpread(_objectSpread({}, modal.props), props) : props;

      if (!show && typeof modal.onClose === "function") {
        modal.onClose.call(layer);
      }

      this.forceUpdate();
    }
  }, {
    key: "updateModal",
    value: function updateModal(layerName, modalName) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var layer = this.getLayer(layerName),
          modal = layer.modals[modalName];
      modal.props = modal.props ? _objectSpread(_objectSpread({}, modal.props), props) : props;
      this.forceUpdate();
    }
  }, {
    key: "onSelect",
    value: function onSelect(layerName, selection) {
      var _this8 = this;

      if (!this.state.map) return;
      var layer = this.getLayer(layerName);
      layer.selection = selection;
      ++layer.loading;
      this.forceUpdate();
      layer.onSelect(selection) // .then(() => layer.fetchData())
      .then(function (data) {
        return layer.active && (layer.receiveDataOld(_this8.state.map, data), layer.render(_this8.state.map));
      }).then(function () {
        return --layer.loading;
      }).then(function () {
        return _this8.forceUpdate();
      });
    }
  }, {
    key: "toggleInfoBox",
    value: function toggleInfoBox(layerName, infoBoxName) {
      var layer = this.getLayer(layerName);

      if (layer.infoBoxes) {
        var infoBox = layer.infoBoxes[infoBoxName];

        if (infoBox) {
          infoBox.show = !infoBox.show;
        }
      }

      this.forceUpdate();
    }
  }, {
    key: "updateFilter",
    value: function updateFilter(layerName, filterName) {
      var _this9 = this;

      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!this.state.map) return;
      var layer = this.getLayer(layerName),
          filter = layer.filters[filterName],
          oldValue = filter.value,
          domain = filter.domain;
      value !== null && (filter.value = value);

      var onChange = function onChange() {};

      if (layer.filters[filterName].onChange) {
        if (layer.version >= 2) {
          onChange = function onChange() {
            return layer.filters[filterName].onChange.call(layer, oldValue, value, domain);
          };
        } else {
          onChange = function onChange() {
            return layer.filters[filterName].onChange(_this9.state.map, layer, value, oldValue);
          };
        }
      }

      ++layer.loading;
      this.forceUpdate(); // Promise.resolve(onChange())
      // 	.then(() => layer.onFilterFetch(filterName, oldValue, value))

      layer.onFilterFetch(filterName, oldValue, value).then(function (data) {
        if (layer.active) {
          onChange();
          layer.receiveDataOld(_this9.state.map, data);
          data !== false && layer.render(_this9.state.map);
        }
      }).then(function () {
        return --layer.loading;
      }).then(function () {
        if (filter.dispatchMessage) {
          var data = filter.dispatchFunc ? filter.dispatchFunc.call(layer) : null;
          (0, _LayerMessageSystem.dispatchMessage)(layerName, new _LayerMessageSystem.FilterMessage(layerName, filterName, oldValue, value, data));
        }
      }).then(function () {
        return _this9.forceUpdate();
      }); // if (layer.filters[filterName].refLayers) {
      //   layer.filters[filterName].refLayers.forEach(refLayerName => {
      //
      //   	const layer = this.getLayer(refLayerName),
      //       filter = layer.filters[filterName],
      //   		oldValue = filter.value,
      //       domain = filter.domain;
      //
      //     (value !== null) && (filter.value = value);
      //
      //     if (layer.active) {
      //
      //       if (layer.filters[filterName].onChange) {
      //         if (layer.version >= 2) {
      //           layer.filters[filterName].onChange.call(layer, oldValue, value, domain);
      //         }
      //         else {
      //           layer.filters[filterName].onChange(this.state.map, layer, value, oldValue);
      //         }
      //       }
      //
      //       ++layer.loading;
      //       this.forceUpdate();
      //
      //       layer.onFilterFetch(filterName, oldValue, value)
      //         .then(data => layer.active && (layer.receiveDataOld(this.state.map, data), layer.render(this.state.map)))
      //         .then(() => --layer.loading)
      //         .then(() => this.forceUpdate());
      //     }
      //   })
      // }
    }
  }, {
    key: "updateLegend",
    value: function updateLegend(layerName, update) {
      var _this10 = this;

      if (!this.state.map) return;
      var layer = this.getLayer(layerName);
      layer.legend = _objectSpread(_objectSpread({}, layer.legend), update);
      ++layer.loading;
      this.forceUpdate();
      layer.onLegendChange().then(function (data) {
        return layer.active && (layer.receiveDataOld(_this10.state.map, data), layer.render(_this10.state.map));
      }).then(function () {
        return --layer.loading;
      }).then(function () {
        return _this10.forceUpdate();
      });
    }
  }, {
    key: "fetchLayerData",
    value: function fetchLayerData(layerName) {
      var _this11 = this;

      if (!this.state.map) return;
      var layer = this.getLayer(layerName);
      ++layer.loading;
      this.forceUpdate();
      layer.fetchData().then(function (data) {
        return layer.active && (layer.receiveDataOld(_this11.state.map, data), layer.render(_this11.state.map));
      }).then(function () {
        return --layer.loading;
      }).then(function () {
        return _this11.forceUpdate();
      });
    }
  }, {
    key: "updateDrag",
    value: function updateDrag(update) {
      this.setState(_objectSpread(_objectSpread({}, this.state), update));
    }
  }, {
    key: "dropLayer",
    value: function dropLayer() {
      var _this12 = this;

      var activeLayers = this.state.activeLayers.filter(function (l) {
        return l !== _this12.state.dragging;
      }),
          insertBefore = activeLayers[this.state.dragover];
      activeLayers.splice(this.state.dragover, 0, this.state.dragging);
      var draggingLayer = this.getLayer(this.state.dragging),
          beforeLayer = this.getLayer(insertBefore);
      var beforeLayerId = null;

      if (beforeLayer) {
        beforeLayerId = beforeLayer.layers[0].id;
      }

      draggingLayer.layers.forEach(function (_ref4) {
        var id = _ref4.id;

        _this12.state.map.moveLayer(id, beforeLayerId);
      });
      this.setState({
        activeLayers: activeLayers
      });
      var layersWithZIndex = activeLayers.reduce(function (a, c) {
        var layer = _this12.getLayer(c),
            mbLayers = layer.layers.reduce(function (a, c) {
          return c.zIndex ? [].concat(_toConsumableArray(a), [c]) : a;
        }, []);

        return [].concat(_toConsumableArray(a), _toConsumableArray(mbLayers));
      }, []);
      layersWithZIndex.sort(function (a, b) {
        return a.zIndex - b.zIndex;
      });
      layersWithZIndex.forEach(function (mbLayer) {
        _this12.state.map.moveLayer(mbLayer.id);
      });
    }
  }, {
    key: "onTransitionStart",
    value: function onTransitionStart() {
      this.setState({
        transitioning: true
      });
    }
  }, {
    key: "onOpenOrClose",
    value: function onOpenOrClose(isOpen) {
      this.setState({
        isOpen: isOpen,
        transitioning: false
      });
    }
  }, {
    key: "setMapStyle",
    value: function setMapStyle(style) {
      var _this13 = this;

      var map = this.state.map;

      if (Boolean(map) && style.style !== this.state.style.style) {
        map.once('style.load', function (e) {
          var activeLayers = [];

          _this13.state.activeLayers.forEach(function (layerName) {
            var layer = _this13.getLayer(layerName);

            _this13._addLayer(map, layer, activeLayers);

            activeLayers.push(layerName);
            layer.onStyleChange(map);
          });
        });
        this.state.activeLayers.forEach(function (layerName) {
          var layer = _this13.getLayer(layerName);

          layer._onRemove(map);
        });
        map.setStyle(style.style);
      }

      this.setState({
        style: style
      });
    }
  }, {
    key: "render",
    value: function render() {
      var actionMap = {
        toggleModal: this.toggleModal.bind(this),
        updateModal: this.updateModal.bind(this),
        toggleInfoBox: this.toggleInfoBox.bind(this)
      };
      var allLayers = [].concat(_toConsumableArray(this.props.layers), _toConsumableArray(this.state.dynamicLayers));
      var mapStyles = this.props.styles.map(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          url: getStaticImageUrl(s.style.slice(23))
        });
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: this.state.id,
        style: {
          height: this.props.height
        },
        ref: this.container
      }, !this.props.sidebar ? null : /*#__PURE__*/_react["default"].createElement(_sidebar["default"], {
        isOpen: this.state.isOpen,
        transitioning: this.state.transitioning,
        onOpenOrClose: this.onOpenOrClose.bind(this),
        onTransitionStart: this.onTransitionStart.bind(this),
        layers: allLayers,
        activeLayers: this.state.activeLayers,
        addLayer: this.addLayer.bind(this),
        removeLayer: this.removeLayer.bind(this),
        deleteDynamicLayer: this.deleteDynamicLayer.bind(this),
        toggleLayerVisibility: this.toggleLayerVisibility.bind(this),
        actionMap: actionMap,
        header: this.props.header,
        toggleModal: this.toggleModal.bind(this),
        updateModal: this.updateModal.bind(this),
        updateFilter: this.updateFilter.bind(this),
        updateLegend: this.updateLegend.bind(this),
        fetchLayerData: this.fetchLayerData.bind(this),
        updateDrag: this.updateDrag.bind(this),
        dropLayer: this.dropLayer.bind(this),
        pages: this.props.sidebarPages,
        mapStyles: mapStyles,
        style: this.state.style,
        setMapStyle: this.setMapStyle.bind(this),
        map: this.state.map
      }), /*#__PURE__*/_react["default"].createElement(_Infobox["default"], {
        layers: allLayers,
        activeLayers: this.state.activeLayers
      }), /*#__PURE__*/_react["default"].createElement(_MapPopover["default"], _extends({}, this.state.popover, {
        updatePopover: this.updatePopover.bind(this),
        mapSize: {
          width: this.state.width,
          height: this.state.height
        }
      })), /*#__PURE__*/_react["default"].createElement(_MapModal["default"], {
        layers: allLayers,
        activeLayers: this.state.activeLayers,
        toggleModal: this.toggleModal.bind(this)
      }), !this.props.mapactions ? null : /*#__PURE__*/_react["default"].createElement(_MapActions["default"], {
        layers: allLayers,
        activeLayers: this.state.activeLayers,
        sidebar: this.props.sidebar,
        isOpen: this.state.isOpen && !this.state.transitioning || !this.state.isOpen && this.state.transitioning,
        actionMap: actionMap
      }), /*#__PURE__*/_react["default"].createElement(_MapMessages["default"], {
        messages: this.state.messages,
        dismiss: this.dismissMessage.bind(this)
      }), /*#__PURE__*/_react["default"].createElement(LoadingLayers, {
        layers: allLayers,
        sidebar: this.props.sidebar,
        isOpen: this.state.isOpen && !this.state.transitioning || !this.state.isOpen && this.state.transitioning
      }));
    }
  }]);

  return AvlMap;
}(_react["default"].Component);

_defineProperty(AvlMap, "defaultProps", {
  id: null,
  height: "100%",
  styles: [].concat(DEFAULT_STYLES),
  styleName: "Dark",
  style: null,
  center: [-73.680647, 42.68],
  minZoom: 2,
  zoom: 10,
  layers: [],
  mapControl: 'bottom-right',
  scrollZoom: true,
  boxZoom: true,
  sidebar: true,
  mapactions: true,
  update: [],
  header: "AVAIL Map",
  sidebarPages: ["layers", "basemaps"],
  layerProps: {},
  preserveDrawingBuffer: false,
  MAPBOX_TOKEN: ''
});

_defineProperty(AvlMap, "ActiveMaps", {});

_defineProperty(AvlMap, "addActiveMap", function (id, component, map) {
  AvlMap.ActiveMaps[id] = {
    component: component,
    map: map
  };
});

_defineProperty(AvlMap, "removeActiveMap", function (id) {
  delete AvlMap.ActiveMaps[id];
});

_defineProperty(AvlMap, "updateMap", function (_ref5) {
  var _ref6 = _toArray(_ref5),
      id = _ref6[0],
      action = _ref6[1],
      args = _ref6.slice(2);

  if (id in AvlMap.ActiveMaps) {
    var _component$action;

    var component = AvlMap.ActiveMaps[id].component;
    component && component[action] && (_component$action = component[action]).call.apply(_component$action, [component].concat(_toConsumableArray(args)));
  }
});

_defineProperty(AvlMap, "doAction", function (_ref7) {
  var _ref8 = _toArray(_ref7),
      id = _ref8[0],
      action = _ref8[1],
      args = _ref8.slice(2);

  console.log('in do action');

  if (id in AvlMap.ActiveMaps) {
    var component = AvlMap.ActiveMaps[id].component;

    if (component && component[action]) {
      var _console2, _component$action2;

      (_console2 = console).log.apply(_console2, ['do action', id, action].concat(_toConsumableArray(args)));

      var result = (_component$action2 = component[action]).call.apply(_component$action2, [component].concat(_toConsumableArray(args)));

      console.log('action result ', result);
      return result;
    }
  }
});

var LoadingContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.sidebar && props.isOpen ? 340 : props.sidebar && !props.isOpen ? 40 : 20;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return (props.height + props.padding * 2) * 0.5;
}, function (props) {
  return (props.height + props.padding * 2) * 0.5;
});

var LoadingIndicator = /*#__PURE__*/function (_React$Component2) {
  _inherits(LoadingIndicator, _React$Component2);

  var _super2 = _createSuper(LoadingIndicator);

  function LoadingIndicator() {
    var _this14;

    _classCallCheck(this, LoadingIndicator);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this14 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this14), "state", {
      progress: null
    });

    _defineProperty(_assertThisInitialized(_this14), "format", (0, _d3Format.format)(".0%"));

    return _this14;
  }

  _createClass(LoadingIndicator, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.layer.registerLoadingIndicator(this.setState.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.layer.unregisterLoadingIndicator();
    }
  }, {
    key: "render",
    value: function render() {
      var layer = this.props.layer,
          height = 40,
          padding = 10;
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: layer.name,
        style: {
          height: "".concat(height + 20, "px"),
          padding: "".concat(padding, "px"),
          display: "flex"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: "".concat(height, "px"),
          lineHeight: "".concat(height, "px"),
          textAlign: "left",
          width: "65%"
        }
      }, layer.name), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          paddingLeft: "".concat(padding, "px"),
          height: "".concat(height, "px"),
          lineHeight: "".concat(height, "px"),
          textAlign: "left",
          width: "calc(35% - ".concat(height, "px)")
        }
      }, this.state.progress === null ? null : "".concat(this.format(this.state.progress))), /*#__PURE__*/_react["default"].createElement(_loadingPage.ScalableLoading, {
        scale: height * 0.01
      }));
    }
  }]);

  return LoadingIndicator;
}(_react["default"].Component);

var LoadingLayers = /*#__PURE__*/function (_React$Component3) {
  _inherits(LoadingLayers, _React$Component3);

  var _super3 = _createSuper(LoadingLayers);

  function LoadingLayers() {
    _classCallCheck(this, LoadingLayers);

    return _super3.apply(this, arguments);
  }

  _createClass(LoadingLayers, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          layers = _this$props2.layers,
          sidebar = _this$props2.sidebar,
          isOpen = _this$props2.isOpen,
          loadingLayers = layers.reduce(function (a, c) {
        c.loading && a.push(c); // a.push(c);

        return a;
      }, []),
          height = 40,
          padding = 10;
      return /*#__PURE__*/_react["default"].createElement(LoadingContainer, {
        sidebar: sidebar,
        isOpen: isOpen,
        height: height,
        padding: padding
      }, loadingLayers.map(function (l, i) {
        return /*#__PURE__*/_react["default"].createElement(LoadingIndicator, {
          key: l.name,
          layer: l
        });
      }));
    }
  }]);

  return LoadingLayers;
}(_react["default"].Component);

var _default = AvlMap;
exports["default"] = _default;
