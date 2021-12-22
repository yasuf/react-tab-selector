import React, { useState } from "react";
import PropTypes from 'prop-types';

const rootStylesDefault = {
  textAlign: 'left'
}

const buttonStylesDefault = {
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

const selectedStylesDefault = {
  "backgroundColor": "black",
  "color": "white"
}

/**
 * React Tab Selector component. Useful when you want to have a category selector
 * and you need to show different information for each value a user selects.
 */
function TabSelector(props) {
  const { tabs, styles } = props;
  const { rootStyles, buttonStyles, selectedStyles } = styles;
  const [tabSelected, setTabSelected] = useState(0);

  const onTabClicked = (event, tab, index) => {
    setTabSelected(index);
    tab.onClick(event);
  };

  const getButtonStyles = (index) => {
    const styles = { ...buttonStylesDefault, ...buttonStyles };
    if (index === tabSelected) {
      return { ...styles, ...selectedStylesDefault, ...selectedStyles }
    }
    return styles;
  }

  return (
    <div style={{ ...rootStylesDefault, ...rootStyles } }>
      <ul>
      {
        tabs.map((tab, index) => {
          return (
            <button onClick={(event) => onTabClicked(event, tab, index)} style={getButtonStyles(index)}>
              <li className="tab">{tab.title || ''}</li>
            </button>
          )
        })
      }
      </ul>
    </div>
  );
}

TabSelector.propTypes = {
  /** Tabs to render as categories */
  tabs: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    onClick: PropTypes.func
  })),
  styles: PropTypes.object
}

export default TabSelector;
