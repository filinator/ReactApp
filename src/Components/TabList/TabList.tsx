import React, { useState } from "react";
import classNames from "classnames";

//@ts-ignore
import styles from "./TabList.module.css";

enum Tabs {
    All = "all",
    Favourites = "myFavourites",
    Popular = "popular",
  }

const TABS_NAMES = [
    { name: "All", key: Tabs.All },
    { name: "My Favourites", key: Tabs.Favourites },
    { name: "Popular", key: Tabs.Popular },
  ];

  const TabList = () => {

    const [activeTab, setActiveTab] = useState(Tabs.All);

    const onTabClick = (tab: Tabs) => {
        setActiveTab(tab);
      };

    return (
        <div className={styles.containerTab}>
        {TABS_NAMES.map((tab) => {
          return (
            <div key={tab.key} onClick={() => onTabClick(tab.key)} 
                 className={classNames( styles.tabs, { 
                  [styles.activeTab]: tab.key === activeTab,
                })}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
    );
};

export default TabList;