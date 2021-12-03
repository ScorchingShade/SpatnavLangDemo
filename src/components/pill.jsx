import React from "react";
import styles from "./pill.module.css";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

const Pill = withFocusable()(({ focused, language }) => {
    return(
        <div>
          <button className={focused ? styles.pillFocused : styles.pill}>
            {language}
          </button>
        </div>
      )
});

export default Pill;
