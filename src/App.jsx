// import './assets/Fonts/fonts.css';
import { useState } from "react";
import "./App.css";
import ECLanding from "./Scenes/Landing/ECLanding";
import ECMain from "./Scenes/MainPage/ECMain";
import { ECProvider } from "./context/ECcontext";


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