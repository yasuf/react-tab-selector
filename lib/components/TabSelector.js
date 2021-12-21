import React, { useState } from "react";
import classnames from "classnames";

import "./TabSelector.css";

function TabSelector(props) {
  const { tabs } = props;
  const [tabSelected, setTabSelected] = useState(0);

  const onTabClicked = (tab) => {
    setTabSelected(tab);
  };

  return (
    <div className="tab-selector">
      <ul>
      {
        tabs.map((tab, index) => {
          return (
            <button onClick={() => onTabClicked(index)} className={classnames({ selected: index === tabSelected})}>
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
