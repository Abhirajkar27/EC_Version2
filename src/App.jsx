// import './assets/Fonts/fonts.css';
import { useState } from "react";
import "./App.css";
import ECLanding from "./Scenes/Landing/ECLanding";
import ECMain from "./Scenes/MainPage/ECMain";
import { ECProvider } from "./context/ECcontext";
import OwnChat from "./Scenes/Disclose/OwnChat";


function App() {
  const [gameIndex, setIndex] = useState(null);
  // const [activityId, setActivityId] = useState('');

  let content;
  switch (gameIndex) {
    case 0:
      content = <ECMain
        onClose={() => { setIndex(null); }}
        onforw={() => { setIndex(1) }} />;
      break;
    case 1:
      content = <OwnChat
        onClose={() => { setIndex(0); }}
        onforw={() => { setIndex(1) }} />;
      break;
    default:
      content = <ECLanding onNext={() => { setIndex(0); }} />;
  }
  return (
    <ECProvider>
      {content}
    </ECProvider>
  );
}

export default App;