"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

require("./TabSelector.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabSelector(props) {
  const {
    tabs
  } = props;
  const [tabSelected, setTabSelected] = (0, _react.useState)(0);

  const onTabClicked = tab => {
    setTabSelected(tab);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "tab-selector"
  }, /*#__PURE__*/React.createElement("ul", null, tabs.map((tab, index) => {
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onTabClicked(index),
      className: (0, _classnames.default)({
        selected: index === tabSelected
      })
    }, /*#__PURE__*/React.createElement("li", {
      className: "tab"
    }, "Element ", index));
  })));
}

var _default = TabSelector;
exports.default = _default;