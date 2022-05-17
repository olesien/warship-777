import Startpage from "./pages/Startpage";
import Game from "./pages/Game";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const App = () => {
    return (
        <div className="container text-center">
            <FontAwesomeIcon icon={faCoffee} />
            {/* Name submits, add className "d-none" to first div */}

            <div className="d-none">
                <Startpage />
            </div>

            {/* Remove className "d-none" from second div */}

            <div className="">
                <Game />
            </div>
        </div>
    );
};

export default App;
