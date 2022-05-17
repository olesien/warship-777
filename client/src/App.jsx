import Startpage from "./pages/Startpage";
import Game from "./pages/Game";
import "./App.css";
import Grid from "./components/Grid";

const App = () => {
    return (
        <div className="container text-center">
            {/* Name submits, add className "d-none" to first div */}

            <div className="d-none">
                <Startpage />
            </div>

            <Grid />
            {/* Remove className "d-none" from second div */}

            <div className="">
                <Game />
            </div>
        </div>
    );
};

export default App;
