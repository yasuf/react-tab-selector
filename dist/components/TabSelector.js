"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const rootStyles = {
  textAlign: 'left'
};
const buttonStyles = {
  "background": "none",
  "cursor": "pointer",
  "textDecoration": "none",
  "backgroundColor": "rgb(238, 238, 238)",
  "margin": "0 5px",
  "padding": "10px",
  "borderRadius": "20px",
  "border": "1px solid rgb(191, 191, 191)",
  "color": "black",
  "listStyle": "none",
  "display": "inline"
};
const selectedStyles = {
  "backgroundColor": "black",
  "color": "white"
};

function TabSelector(props) {
  const {
    tabs
  } = props;
  const [tabSelected, setTabSelected] = (0, _react.useState)(0);

  const onTabClicked = tab => {
    setTabSelected(tab);
  };

  const getButtonStyles = index => {
    if (index === tabSelected) {
      return _objectSpread(_objectSpread({}, buttonStyles), selectedStyles);
    }

    return buttonStyles;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    "style-z": rootStyles
  }, /*#__PURE__*/_react.default.createElement("ul", null, tabs.map((tab, index) => {
    return /*#__PURE__*/_react.default.createElement("button", {
      onClick: () => onTabClicked(index),
      style: getButtonStyles()
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "tab"
    }, "Element ", index));
  })));
}

var _default = TabSelector;
exports.default = _default;