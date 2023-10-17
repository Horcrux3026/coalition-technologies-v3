
import './App.css';
import Header from "./components/Header.js"
import Stickynav from "./components/Stickynav.js"
import History from "./components/History.js"
import Climb from "./components/Climb.js"
import Foot from "./components/Foot.js"
function App() {
  return(
    <div>
      <Header />
      <Stickynav />
      <History />
      <Climb />
      <Foot />
    </div>
  );
}

export default App;
