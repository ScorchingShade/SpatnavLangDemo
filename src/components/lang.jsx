import React from "react";
import styles from "./lang.module.css";
import Pill from "./pill";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

const Lang = withFocusable({ trackChildren: true })(
  ({ focused, languagesArray, hasFocusedChild }) => {

    return (
      <div
        className={hasFocusedChild ? styles.containerFocused : styles.container}
      >
        {languagesArray.map((item) => (
          <Pill
            key={item}
            language={item}
            focused={focused}
          />
        ))}
      </div>
    );
  }
);

export default Lang;
