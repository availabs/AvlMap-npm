"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.array.from");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.function.bind");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");
var os = require('os');

os.platform();
var path = require('path');


var _react = _interopRequireDefault(require("react"));

var _AttributesTable = path.resolve('./components/AttributesTable/');

var _lodash = _interopRequireDefault(require("lodash.get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_OPTIONS = {
  sources: [],
  layers: [],
  active: false,
  loading: 0,
  popover: false,
  actions: false,
  modals: false,
  infoBoxes: false,
  legend: false,
  filters: false,
  select: false,
  onClick: false,
  onZoom: false,
  _isVisible: true,
  onHover: false,
  showAttributesModal: true,
  mapActions: {},
  selection: []
};

var MapLayer = /*#__PURE__*/function () {
  function MapLayer(name) {
    var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MapLayer);

    var options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), _options);

    this.component = null;
    this.map = null;
    this.showPopover = false;
    this.latestPopoverId = 0;
    this.name = name;

    for (var key in options) {
      this[key] = options[key];
    }

    this.LoadingIndicator = function () {};

    this.boundFunctions = {};
    this.hoverSourceData = {};
    this.hoveredFeatureIds = new Set();
    this.pinnedFeatureIds = new Set();
    this._mousemove = this._mousemove.bind(this);
    this._mouseleave = this._mouseleave.bind(this);
    this._popoverClick = this._popoverClick.bind(this);
    this._mousedown = this._mousedown.bind(this);
    this._mapClick = this._mapClick.bind(this);
    this.onHoverMove = this.onHoverMove.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
  }

  _createClass(MapLayer, [{
    key: "registerLoadingIndicator",
    value: function registerLoadingIndicator(func) {
      this.LoadingIndicator = func;
    }
  }, {
    key: "unregisterLoadingIndicator",
    value: function unregisterLoadingIndicator() {
      this.LoadingIndicator = function () {};
    }
  }, {
    key: "initComponent",
    value: function initComponent(component) {
      this.component = component; // this.updatePopover = component.updatePopover.bind(component);

      if (this.showAttributesModal !== false) {
        var modals = this.modals || {};
        this.modals = _objectSpread(_objectSpread({}, modals), {}, {
          "avl-attributes": {
            title: "Attributes",
            comp: function comp(_ref) {
              var layer = _ref.layer;
              return /*#__PURE__*/_react.default.createElement(_AttributesTable.default, {
                layer: layer
              });
            },
            show: false,
            position: "bottom",
            startSize: [800, 500]
          }
        });

        if (!(0, _lodash.default)(this, 'component.props.sidebar', false) || !(0, _lodash.default)(this, 'component.props.sidebarPages', []).includes("layers")) {
          this.mapActions = _objectSpread(_objectSpread({}, this.mapActions), {}, {
            "avl-attributes": {
              Icon: function Icon(_ref2) {
                var layer = _ref2.layer;
                return /*#__PURE__*/_react.default.createElement("span", {
                  className: "fa fa-lg fa-eye"
                });
              },
              tooltip: "Toggle Attributes",
              action: function action() {
                this.doAction(["toggleModal", "avl-attributes"]);
              }
            }
          });
        } else {
          var actions = this.actions || [];
          this.actions = [].concat(_toConsumableArray(actions.filter(function (_ref3) {
            var tooltip = _ref3.tooltip;
            return tooltip !== "Toggle Attributes";
          })), [{
            Icon: function Icon() {
              return /*#__PURE__*/_react.default.createElement("span", {
                className: "fa fa-lg fa-eye"
              });
            },
            action: ["toggleModal", "avl-attributes"],
            tooltip: "Toggle Attributes"
          }]);
        }
      }
    }
  }, {
    key: "initMap",
    value: function initMap(map) {
      this.map = map;
    }
  }, {
    key: "onAdd",
    value: function onAdd(map, props) {}
  }, {
    key: "_onAdd",
    value: function _onAdd(map) {
      var _this = this;

      if (this.popover) {
        this.addPopover(map);
      }

      if (this.select) {
        this.addBoxSelect(map);
      }

      if (this.onClick) {
        this.addOnClick(map);
      }

      if (this.onHover) {
        this.addOnHover(map);
      }

      if (this.onZoom) {
        this.addOnZoom(map);
      }

      this.layers.forEach(function (layer) {
        var layerVisibility = map.getLayoutProperty(layer.id, 'visibility'),
            isVisible = layerVisibility !== "none" && _this._isVisible;
        map.setLayoutProperty(layer.id, 'visibility', isVisible ? "visible" : "none");
      });
    }
  }, {
    key: "onRemove",
    value: function onRemove(map) {}
  }, {
    key: "_onRemove",
    value: function _onRemove(map) {
      if (this.onZoom) {
        this.removeOnZoom(map);
      }

      if (this.onHover) {
        this.removeOnHover(map);
      }

      if (this.onClick) {
        this.removeOnClick(map);
      }

      if (this.select) {
        this.removeBoxSelect(map);
      }

      if (this.popover) {
        this.removePopover(map);
      }
    }
  }, {
    key: "receiveProps",
    value: function receiveProps(oldProps, newProps) {
      for (var key in newProps) {
        this[key] = newProps[key];
      }
    }
  }, {
    key: "onPropsChange",
    value: function onPropsChange(oldProps, newProps) {
      this.doAction(["fetchLayerData"]);
    }
  }, {
    key: "getLayerData",
    value: function getLayerData() {
      var _this2 = this;

      var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!this.map) return {
        keys: [],
        data: []
      };
      var data = [],
          keys = {
        layer: true
      };
      layers = layers.length ? layers : this.layers.map(function (_ref4) {
        var id = _ref4.id;
        return id;
      });
      var sourceData = [];
      this.layers.forEach(function (l) {
        if (layers.includes(l.id)) {
          sourceData.push([l["source"], l["source-layer"], l["id"]]);
        }
      });
      sourceData.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 3),
            sourceId = _ref6[0],
            sourceLayer = _ref6[1],
            layer = _ref6[2];

        _this2.map.querySourceFeatures(sourceId, {
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
      });
      keys = data.reduce(function (keys, row) {
        return _objectSpread(_objectSpread({}, keys), Object.keys(row).reduce(function (a, c) {
          return _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, c, true));
        }, {}));
      }, keys);
      keys = Object.keys(keys);
      return {
        data: data,
        keys: keys
      };
    }
  }, {
    key: "addOnZoom",
    value: function addOnZoom(map) {
      var _this3 = this;

      var func = function func() {
        var zoom = map.getZoom();

        _this3.onZoom(zoom);
      };

      this.boundFunctions["on-zoom"] = func;
      map.on("zoom", func);
    }
  }, {
    key: "removeOnZoom",
    value: function removeOnZoom(map) {
      map.off("zoom", this.boundFunctions["on-zoom"]);
    }
  }, {
    key: "addOnHover",
    value: function addOnHover(map) {
      var _this4 = this;

      this.onHover.layers.forEach(function (layer) {
        var data = _this4.layers.reduce(function (a, c) {
          return c.id === layer ? c : a;
        }, false);

        _this4.hoverSourceData[layer] = {
          source: data.source,
          sourceLayer: data['source-layer']
        };

        var func = function func(e) {
          return _this4.onHoverMove(e, layer, map);
        };

        _this4.boundFunctions["on-hover-move-".concat(layer)] = func;
        map.on("mousemove", layer, func);

        func = function func(e) {
          return _this4.onHoverLeave(e, layer, map);
        };

        _this4.boundFunctions["on-hover-leave-".concat(layer)] = func;
        map.on("mouseleave", layer, func);
      });
    }
  }, {
    key: "removeOnHover",
    value: function removeOnHover(map) {
      var _this5 = this;

      this.onHover.layers.forEach(function (layer) {
        var key = "on-hover-move-".concat(layer),
            func = _this5.boundFunctions[key];
        map.off("mousemove", layer, func);
        delete _this5.boundFunctions[key];
        key = "on-hover-leave-".concat(layer);
        func = _this5.boundFunctions[key];
        map.off("mouseleave", layer, func);
        delete _this5.boundFunctions[key];
      });
    }
  }, {
    key: "onHoverMove",
    value: function onHoverMove(e, layer, map) {
      var _this6 = this;

      var _this$onHover = this.onHover,
          dataFunc = _this$onHover.dataFunc,
          minZoom = _this$onHover.minZoom,
          filterFunc = _this$onHover.filterFunc;
      var zoom = map.getZoom();

      if (minZoom && minZoom > zoom) {
        return this.onHoverLeave(e, layer, map);
      }

      typeof dataFunc === "function" && dataFunc.call(this, e.features, e.point, e.lngLat, layer);
      var data = this.hoverSourceData[layer];
      if (!data || !e.features.length) return;
      this.onHoverLeave(e, layer, map);

      var hover = function hover(id) {
        id !== undefined && (map.getCanvas().style.cursor = 'pointer');
        id !== undefined && _this6.hoveredFeatureIds.add("".concat(layer, ".").concat(id));
        id !== undefined && map.setFeatureState(_objectSpread({
          id: id
        }, data), {
          hover: true
        });
      };

      var hoverFeature = function hoverFeature() {
        var id = e.features[0].id;
        hover(id);
      };

      if (typeof filterFunc === "function") {
        var filter = filterFunc.call(this, e.features, e.point, e.lngLat, layer),
            source = data.source,
            sourceLayer = data.sourceLayer;

        if (filter) {
          map.querySourceFeatures(source, {
            sourceLayer: sourceLayer,
            filter: filter
          }).forEach(function (_ref7) {
            var id = _ref7.id;
            hover(id);
          });
        } else {
          hoverFeature();
        }
      } else {
        hoverFeature();
      }
    }
  }, {
    key: "onHoverLeave",
    value: function onHoverLeave(e, layer, map) {
      var _this7 = this;

      this.hoveredFeatureIds.forEach(function (key) {
        var _key$split = key.split("."),
            _key$split2 = _slicedToArray(_key$split, 2),
            layer = _key$split2[0],
            id = _key$split2[1],
            data = _this7.hoverSourceData[layer];

        if (data) {
          map.setFeatureState(_objectSpread({
            id: id
          }, data), {
            hover: false
          });
        }
      });
      map.getCanvas().style.cursor = '';
      this.hoveredFeatureIds.clear();
    }
  }, {
    key: "doAction",
    value: function doAction(_ref8) {
      var _ref9 = _toArray(_ref8),
          action = _ref9[0],
          args = _ref9.slice(1);

      if (this.component && this.component[action]) {
        var _this$component;

        return (_this$component = this.component)[action].apply(_this$component, [this.name].concat(_toConsumableArray(args)));
      }
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      this.component && this.component.forceUpdate();
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility() {
      var _this8 = this;

      //console.log('in map layer toggle visibility',map,this.layers)
      this._isVisible = !this._isVisible;
      this.layers.forEach(function (layer) {
        _this8.map.setLayoutProperty(layer.id, 'visibility', _this8._isVisible ? "visible" : "none");
      });
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      return Promise.resolve();
    }
  }, {
    key: "onFilterFetch",
    value: function onFilterFetch(filterName, oldValue, newValue) {
      return this.fetchData();
    }
  }, {
    key: "onLegendChange",
    value: function onLegendChange() {
      return this.fetchData();
    }
  }, {
    key: "onSelect",
    value: function onSelect(selection) {
      return this.fetchData();
    }
  }, {
    key: "receiveDataOld",
    value: function receiveDataOld() {
      if (this.receiveData) {
        console.warn("<AvlMap::MapLayer> You are using the old fetchData / receiveData API. Use the new featchData / render API!");
        this.receiveData.apply(this, arguments);
      }
    }
  }, {
    key: "render",
    value: function render(map) {}
  }, {
    key: "onStyleChange",
    value: function onStyleChange(map) {
      // this._onRemove(map);
      this._onAdd(map);

      this.render(map);
    }
  }, {
    key: "addOnClick",
    value: function addOnClick(map) {
      var _this9 = this;

      this.onClick.layers.forEach(function (layer) {
        var func = function func(e) {
          return _this9._mapClick(e, layer);
        };

        _this9.boundFunctions["on-click-".concat(layer)] = func;

        if (layer === 'map') {
          map.on('click', func);
        } else {
          map.on("click", layer, func);
        }
      });
    }
  }, {
    key: "removeOnClick",
    value: function removeOnClick(map) {
      var _this10 = this;

      this.onClick.layers.forEach(function (layer) {
        var key = "on-click-".concat(layer),
            func = _this10.boundFunctions[key];

        if (layer === 'map') {
          map.off('click', func);
        } else {
          map.off("click", layer, func);
        }

        delete _this10.boundFunctions[key];
      });
    }
  }, {
    key: "_mapClick",
    value: function _mapClick(e, layer) {
      this.onClick.dataFunc.call(this, e.features, e.point, e.lngLat, layer);
    }
  }, {
    key: "addPopover",
    value: function addPopover(map) {
      var _this11 = this;

      this.popover.layers.forEach(function (layer) {
        var key = "".concat(layer, "-mousemove"),
            func = function func(e) {
          return _this11._mousemove(e, layer);
        };

        _this11.boundFunctions[key] = func;
        map.on("mousemove", layer, func);
        map.on("mouseleave", layer, _this11._mouseleave);

        if (!_this11.popover.noSticky && !_this11.onClick) {
          key = "".concat(layer, "-popover-click");

          func = function func(e) {
            return _this11._popoverClick(e, layer);
          };

          _this11.boundFunctions[key] = func;
          map.on("click", layer, func);
        }
      });
    }
  }, {
    key: "removePopover",
    value: function removePopover(map) {
      var _this12 = this;

      this.popover.layers.forEach(function (layer) {
        var key = "".concat(layer, "-mousemove"),
            func = _this12.boundFunctions[key];
        delete _this12.boundFunctions[key];
        map.off("mousemove", layer, func);
        map.off("mouseleave", layer, _this12._mouseleave);

        if (!_this12.popover.noSticky && !_this12.onClick) {
          key = "".concat(layer, "-popover-click");
          func = _this12.boundFunctions[key];
          delete _this12.boundFunctions[key];
          map.off("click", layer, func);
        }
      });
    }
  }, {
    key: "_mousemove",
    value: function _mousemove(e, layer) {
      var _this13 = this;

      this.showPopover = true;
      var _this$component$state = this.component.state,
          map = _this$component$state.map,
          popover = _this$component$state.popover,
          zoom = map.getZoom(),
          _this$popover = this.popover,
          minZoom = _this$popover.minZoom,
          dataFunc = _this$popover.dataFunc;
      if (minZoom && minZoom > zoom) return;

      if (e.features && e.features.length) {
        var popoverId = ++this.latestPopoverId;
        Promise.resolve(dataFunc.call(this, e.features[0], e.features, layer, map, e) || []).then(function (data) {
          if (!_this13.showPopover) return;
          if (popoverId < _this13.latestPopoverId) return;
          map.getCanvas().style.cursor = data.length ? 'pointer' : '';
          if (popover.pinned) return;

          _this13.doAction(["updatePopover", {
            pos: [e.point.x, e.point.y],
            layer: _this13,
            data: data
          }]);
        });
      }
    }
  }, {
    key: "_mouseleave",
    value: function _mouseleave(e, layer) {
      this.showPopover = false;
      var _this$component$state2 = this.component.state,
          map = _this$component$state2.map,
          popover = _this$component$state2.popover;
      map.getCanvas().style.cursor = '';
      if (popover.pinned) return;
      this.doAction(["updatePopover", {
        layer: null,
        data: []
      }]);
    }
  }, {
    key: "_clearPinnedState",
    value: function _clearPinnedState() {
      var _this14 = this;

      if (!this.map) return;
      this.pinnedFeatureIds.forEach(function (layerId) {
        var _layerId$split = layerId.split("."),
            _layerId$split2 = _slicedToArray(_layerId$split, 2),
            layer = _layerId$split2[0],
            id = _layerId$split2[1],
            layerData = _this14.layers.reduce(function (a, c) {
          return c.id === layer ? {
            source: c.source,
            sourceLayer: c['source-layer']
          } : a;
        }, null);

        layerData && _this14.map.setFeatureState(_objectSpread({
          id: id
        }, layerData), {
          pinned: false
        });
      });
      this.pinnedFeatureIds.clear();
    }
  }, {
    key: "_popoverClick",
    value: function _popoverClick(e, layer) {
      var _this15 = this;

      var _this$component$state3 = this.component.state,
          map = _this$component$state3.map,
          popover = _this$component$state3.popover,
          pinned = popover.pinned;

      if (e.features.length) {
        var data = this.popover.dataFunc.call(this, e.features[0], e.features, layer);

        if (data.length) {
          if (typeof this.popover.onPinned === "function") {
            this.popover.onPinned.call(this, e.features, e.lngLat, e.point);
          }

          if (this.popover.setPinnedState) {
            this._clearPinnedState();

            e.features.forEach(function (_ref10) {
              var id = _ref10.id,
                  layer = _ref10.layer;

              var layerData = _this15.layers.reduce(function (a, c) {
                return c.id === layer.id ? {
                  source: c.source,
                  sourceLayer: c['source-layer']
                } : a;
              }, null);

              if (id !== undefined && layerData) {
                _this15.pinnedFeatureIds.add("".concat(layer.id, ".").concat(id));

                map.setFeatureState(_objectSpread({
                  id: id
                }, layerData), {
                  pinned: true
                });
              }
            });
          }

          if (pinned) {
            this.doAction(["updatePopover", {
              pos: [e.point.x, e.point.y],
              data: data,
              layer: this
            }]);
          } else {
            this.doAction(["updatePopover", {
              pinned: true,
              layer: this
            }]);
          }
        } // else {
        // 	this.updatePopover({
        // 		pinned: false
        // 	})
        // }

      }
    }
  }, {
    key: "_mousedown",
    value: function _mousedown(e) {
      var _this16 = this;

      if (!(e.shiftKey && e.button === 0)) return;
      var map = this.component.state.map;
      map.dragPan.disable();
      var canvas = map.getCanvasContainer(),
          selectFrom = this.select.fromLayers,
          toHighlight = this.select.highlightLayers,
          selectProperty = this.select.property,
          selectFilter = ['in', selectProperty],
          maxSelection = this.select.maxSelection || 5000;

      var mousePos = function mousePos(e) {
        var rect = canvas.getBoundingClientRect();
        return [e.clientX - rect.left - canvas.clientLeft, e.clientY - rect.top - canvas.clientTop];
      };

      var start = mousePos(e),
          current,
          box = null,
          selection = [];

      var onMouseMove = function onMouseMove(e) {
        current = mousePos(e);

        if (!box) {
          box = document.createElement('div');
          box.classList.add('boxdraw');
          canvas.appendChild(box);
        }

        var minX = Math.min(start[0], current[0]),
            maxX = Math.max(start[0], current[0]),
            minY = Math.min(start[1], current[1]),
            maxY = Math.max(start[1], current[1]);
        var pos = 'translate(' + minX + 'px,' + minY + 'px)';
        box.style.transform = pos;
        box.style.WebkitTransform = pos;
        box.style.width = maxX - minX + 'px';
        box.style.height = maxY - minY + 'px';
      };

      var onMouseUp = function onMouseUp(e) {
        finish([start, mousePos(e)]);
      };

      var onKeyDown = function onKeyDown(e) {
        if (e.keyCode === 27) finish();
      };

      var finish = function finish(bbox) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('mouseup', onMouseUp);

        if (box) {
          box.parentNode.removeChild(box);
          box = null;
        }

        if (bbox) {
          var features = map.queryRenderedFeatures(bbox, {
            layers: selectFrom
          });

          if (features.length >= maxSelection) {
            map.dragPan.enable();
            return window.alert("Select a smaller number of features. You selected ".concat(features.length, ". The maximum is ").concat(maxSelection, "."));
          }

          var filter = features.reduce(function (filter, feature) {
            filter.push(feature.properties[selectProperty]);
            return filter;
          }, selectFilter.slice());
          selection = features.map(function (d) {
            return d.properties[selectProperty];
          });
          toHighlight.forEach(function (layer) {
            map.setFilter(layer.id, layer.filter ? ['all', layer.filter, filter] : filter);
          });
        }

        map.dragPan.enable();

        _this16.component.onSelect(_this16.name, selection);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('keydown', onKeyDown);
    }
  }, {
    key: "addBoxSelect",
    value: function addBoxSelect(map) {
      var _this17 = this;

      this.select.highlightLayers.forEach(function (layer) {
        map.setFilter(layer.id, ["in", _this17.select.property]);
      });
      var canvas = map.getCanvasContainer();
      canvas.addEventListener('mousedown', this._mousedown, true);
    }
  }, {
    key: "removeBoxSelect",
    value: function removeBoxSelect(map) {
      var canvas = map.getCanvasContainer();
      canvas.removeEventListener('mousedown', this._mousedown, true);
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(action, data) {
      console.warn("<MapLayer.receiveMessage>", this.name, action, "You should override this method!");
    }
  }]);

  return MapLayer;
}();

var _default = MapLayer;
exports.default = _default;
