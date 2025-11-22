import ASCIIFPS from "./components/ASCIIFPS/ASCIIFPS";
import Header from "./components/Header/Header";
import "./GamePage.css";

function GamePage() {
  return (
    <div className="GamePage">
      <Header
        title="Wolfenstein ASCII FPS"
        menu={["GitHub"]}
      />
      <ASCIIFPS/>
    </div>
  );
}

export default GamePage;
