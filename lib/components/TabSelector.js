import React, { useState } from "react";
import classnames from "classnames";

import "./TabSelector.css";

const rootStyles = {
  textAlign: 'left'
}

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
}

const selectedStyles = {
  "backgroundColor": "black",
  "color": "white"
}

function TabSelector(props) {
  const { tabs } = props;
  const [tabSelected, setTabSelected] = useState(0);

  const onTabClicked = (tab) => {
    setTabSelected(tab);
  };

  const getButtonStyles = (index) => {
    if (index === tabSelected) {
      return { ...buttonStyles, ...selectedStyles }
    }
    return buttonStyles
  }

  return (
    <div style-z={rootStyles}>
      <ul>
      {
        tabs.map((tab, index) => {
          return (
            <button onClick={() => onTabClicked(index)} style={getButtonStyles()}>
              <li className="tab">Element {index}</li>
            </button>
          )
        })
      }
      </ul>
    </div>
  );
}

export default TabSelector;
