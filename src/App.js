import Lang from "./components/lang";
import Pill from "./components/pill";
import { initNavigation } from "@noriginmedia/react-spatial-navigation";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import { useEffect } from "react";

initNavigation({ debug: false, visualDebug: false });

const FocusableComponent = withFocusable({ trackChildren: true })(
  ({ setFocus, children }) => {
    useEffect(() => {
      setFocus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div>{children}</div>;
  }
);

const languagesArray = [
  "English",
  "हिंदी",
  "Tamil",
  "Telgu",
  "Malayalam",
  "Gujrati",
  "ಕನ್ನಡ",
  "Spanish",
  "German",
  "Italian",
  "Korean",
  "Odia",
  "Arabic",
  "Bengali",
  "Portuguese",
  "Russian",
  "Japanese",
  "French",
  "Chinese",
  "Polish",
  "Turkish",
];

function App() {
  return (
    <FocusableComponent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Pill language="english" focused></Pill>
        <br></br>
        <br></br>

        <Lang languagesArray={languagesArray} focused={true}/>
      </div>
    </FocusableComponent>
  );
}

export default App;
