
import './App.css';
import Header from "./components/Header.js"
import Stickynav from "./components/Stickynav.js"
import History from "./components/History.js"
import Climb from "./components/Climb"
function App() {
  return(
    <div>
      <Header />
      <Stickynav />
      <History />
      <Climb />
    </div>
  );
}

export default App;
