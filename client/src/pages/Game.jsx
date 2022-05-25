import Grid from "../components/Grid";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useGameContext } from "../contexts/GameContextProvider";
import useGameLogic from "../hooks/useGameLogic";
import RenderGridDesc from "../components/RenderGridDesc";
import RenderPlayerGrid from "../components/RenderPlayerGrid";
import RenderOpponentGrid from "../components/RenderOpponentGrid";

const Game = () => {
    //Game logic
    const [ready, setReady] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [startingPlayer, setStartingPlayer] = useState("");
    const { drop, allowDrop, drag } = useGameLogic();
    const {
        grid,
        room,
        socket,
        setPlayer,
        setOpponent,
        player,
        opponent,
        chatUsername,
    } = useGameContext();

    const readyBtnPressed = () => {
        setReady(true);
        socket.emit("user:ready", room, grid);
    };

    useEffect(() => {
        //One person has readied up!
        const peopleReady = (players) => {
            //define who player and opponent is
            console.log(socket.id);
            const player = players.find((player) => player.id === socket.id);
            const opponent = players.find((player) => player.id !== socket.id);
            setPlayer(player);
            setOpponent(opponent);
            console.log(player);
            console.log(opponent);

            //Add logic to change the ready element here! player is left side, and opponent is right side.
            //Use player.ready which is true or false to display whether or not they are ready.
        };

        //Both are ready, start game
        const start = (game) => {
            const player = game.players.find(
                (player) => player.id === socket.id
            );
            const opponent = game.players.find(
                (player) => player.id !== socket.id
            );
            setPlayer(player);
            setOpponent(opponent);

            console.log(player);
            console.log(opponent);

            //Start render of the grids!
        };

        //Listen for these!
        socket.on("game:peopleready", peopleReady);
        socket.on("game:start", start);
        socket.on("player:start", (data) => {
            if (data.player === chatUsername) console.log(data.msg);
            console.log(data.player);

            setStartingPlayer(data.msg)
        });

        return () => {
            console.log("cleaning up");
            socket.off("game:peopleready", peopleReady);
            socket.off("game:start", start);
        };
    }, [socket, setPlayer, setOpponent, chatUsername]);

    //game started?
    useEffect(() => {
        if (player.ready && opponent.ready) {
            setGameStarted(true);
        } else {
            setGameStarted(false);
        }

        console.log(player)
        console.log(startingPlayer)
    }, [player, opponent]);

    return (
        <div className="">
            <div className="">
                <p>{player.ready ? "You are Ready" : "You are not ready"}</p>
                <p>
                    {opponent.ready
                        ? "Opponent is ready"
                        : "Opponent is not ready"}
                </p>
                <div className="d-flex flex-column align-items-center w-400">
                    <h3>{chatUsername}</h3>

                    <button
                        onClick={readyBtnPressed}
                        className="mb-5 ready-btn"
                    >
                        {ready ? "Ready!" : "Ready?"}
                    </button>
                </div>

                <div className="d-flex align-items-center">
                    {gameStarted ? (
                        //Game started
                        <>
                            <RenderPlayerGrid />
                            <RenderOpponentGrid />
                        </>
                    ) : (
                        // Input the battleships <- Game has not started
                        <div
                            className="d-flex flex-column"
                            id="playFieldPosition"
                        >
                            <div
                                className="grid-container justify-content-end w-400"
                                id="nmrPosition"
                            >
                                <RenderGridDesc alfabet={false} />
                            </div>

                            <div className="d-flex">
                                <div className="grid-container d-flex flex-column">
                                    <RenderGridDesc isAlfabet={true} />
                                </div>

                                <Grid
                                    grid={grid}
                                    drop={drop}
                                    allowDrop={allowDrop}
                                    drag={drag}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Your ships, place them out on the board */}
                <div>
                    <div>
                        <div className="d-flex flex-wrap mt-5 w-400 h-100px">
                            <div
                                id={"boat1"}
                                className="inner-grid-item double right"
                                draggable="true"
                                onDragStart={drag}
                            ></div>
                            <div
                                id={"boat2"}
                                className="inner-grid-item double right"
                                draggable="true"
                                onDragStart={drag}
                            ></div>
                            <div
                                id={"boat3"}
                                className="inner-grid-item triple left"
                                draggable="true"
                                onDragStart={drag}
                            ></div>

                            <div
                                id={"boat4"}
                                className="inner-grid-item quadruple down"
                                draggable="true"
                                onDragStart={drag}
                            ></div>

                            {/* <div className="grid-container pe-2 twoSquareShip">
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                            </div>

                            <div className="grid-container pe-2 threeSquareShip">
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                            </div>

                            <div className="grid-container pe-2 fourSquareShip">
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                            </div>

                            <div className="grid-container pe-2 twoSquareShip">
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                            </div> */}
                        </div>

                        <div
                            id="rotate-btn"
                            className="d-flex justify-content-center align-items-center"
                        >
                            <FontAwesomeIcon icon={faArrowRotateRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
