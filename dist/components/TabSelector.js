"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./TabSelector.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TabSelector(props) {
  const {
    tabs
  } = props;
  const [tabSelected, setTabSelected] = (0, _react.useState)(0);

  const onTabClicked = tab => {
    setTabSelected(tab);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-selector"
  }, /*#__PURE__*/_react.default.createElement("ul", null, tabs.map((tab, index) => {
    return /*#__PURE__*/_react.default.createElement("button", {
      onClick: () => onTabClicked(index),
      className: (0, _classnames.default)({
        selected: index === tabSelected
      })
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "tab"
    }, "Element ", index));
  })));
}

var _default = TabSelector;
exports.default = _default;