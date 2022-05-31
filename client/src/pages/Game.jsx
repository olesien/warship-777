import Grid from "../components/Grid";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useGameContext } from "../contexts/GameContextProvider";
import useGameLogic from "../hooks/useGameLogic";
import RenderGridDesc from "../components/RenderGridDesc";
import RenderPlayerGrid from "../components/RenderPlayerGrid";
import RenderOpponentGrid from "../components/RenderOpponentGrid";
import Chat from "../components/Chat";
import EndGame from "../components/EndGame";
import PreviewShips from "../components/PreviewShips";
import Hit from "../assets/sounds/Hit.mp3"
import Miss from "../assets/sounds/Miss.mp3"

const Game = () => {
    //Game logic
    const [playerReady, setPlayerReady] = useState(false);
    const [btnStyle, setBtnStyle] = useState("ready-btn");
    const [opponentBtnStyle, setOpponentBtnStyle] = useState("ready-btn");
    const [gameStarted, setGameStarted] = useState(false);
    const [startingPlayer, setStartingPlayer] = useState("");
    const [winner, setWinner] = useState({});
    const [playerRound, setPlayerRound] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messageRef = useRef();
    const [endGame, setEndGame] = useState(false);
    const { drop, allowDrop, drag } = useGameLogic();
    const {
        grid,
        setGrid,
        room,
        socket,
        setPlayer,
        setOpponent,
        player,
        opponent,
        chatUsername,
        playerAvatar,
        setIdsTurn,
        initialGrid,
        startBoats,
        rotateShips,
    } = useGameContext();
    
    const stylesReadyBtn = useCallback(() => {
        playerReady ? setBtnStyle("ready-btn") : setBtnStyle("ready-btn-green");
    }, [playerReady])
    
    const init = useCallback(() => {
        player.ready = false
        opponent.ready = false
        setGameStarted(false)
        setEndGame(false)
        setPlayerReady(false)
        stylesReadyBtn()
        setGrid(initialGrid)
      }, [initialGrid, opponent, player, setGrid, stylesReadyBtn])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message.length) {
            return;
        }

        console.log(message);

        const msg = {
            username: chatUsername,
            room: room,
            content: message,
            timestamp: Date.now(),
        };

        console.log(msg);
        console.log("This Works!");

        socket.emit("chat:message", msg);

        setMessage("");
        console.log(messages);
        messageRef.current.focus();
    };

    const handleIncomingMessage = (msg) => {
        console.log("Received a new chat message", msg);

        setMessages((prevMessages) => [...prevMessages, msg]);
    };

    const readyBtnPressed = () => {
        setPlayerReady(!playerReady);
        stylesReadyBtn()
        socket.emit("user:ready", room, grid);
    };

    useEffect(() => {
        const updatePlayers = (players) => {
            const player = players.find((player) => player.id === socket.id);
            const opponent = players.find((player) => player.id !== socket.id);
            setPlayer(player);
            setOpponent(opponent);
            // console.log(player);
            // console.log(opponent);

            // console.log(player.gameboard)
        };
        //One person has readied up!
        const peopleReady = (players) => {
            //define who player and opponent is
            console.log(socket.id);

            updatePlayers(players);

            //Add logic to change the ready element here! player is left side, and opponent is right side.
            //Use player.ready which is true or false to display whether or not they are ready.
        };

        if (!opponent.ready) {
            setOpponentBtnStyle("ready-btn");
        } else {
            setOpponentBtnStyle("ready-btn-green");
        }

        //Both are ready, start game
        const start = (game) => {
            console.log(game);
            updatePlayers(game.players);
            setIdsTurn(game.idsTurn);

            console.log(game.room);

            //Start render of the grids!
        };

        const handleHit = (game) => {
            updatePlayers(game.players);
            setIdsTurn(game.idsTurn);

            if (game.idsTurn === game.players[0].id) {
                setPlayerRound(game.players[0].username);
            } else if (game.idsTurn === game.players[1].id) {
                setPlayerRound(game.players[1].username);
            }

            //Start render of the grids!
        };

        const handleHitTrue = () => {
            const hitSound = new Audio(Hit)
            hitSound.play()
        }

        const handleMissTrue = () => {
            const missSound = new Audio(Miss)
            missSound.play()
        }

        const playerWin = (winner) => {
            setWinner(winner);
            setEndGame(true);
        };

        const playerStart = (data) => {
            if (data.player === chatUsername) console.log(data.msg);
            console.log(data.player);
            
            // FORTSÄTT HÄR
            // if (player.ready && opponent.ready) {
                setPlayerRound(data.player);
                setStartingPlayer(data.msg);
            // }
        }

        //Listen for these!
        socket.on("chat:message", handleIncomingMessage);
        socket.on("game:peopleready", peopleReady);
        socket.on("game:start", start);
        socket.on("game:handleHitTrue", handleHitTrue);
        socket.on("game:handleMissTrue", handleMissTrue);
        socket.on("game:handleHit", handleHit);
        socket.on("player:start", playerStart);
        socket.on("game:over", playerWin);

        return () => {
            console.log("cleaning up");
            socket.off("chat:message", handleIncomingMessage);
            socket.off("game:peopleready", peopleReady);
            socket.off("game:start", start);
            socket.off("game:handleHitTrue", handleHitTrue);
            socket.off("game:handleMissTrue", handleMissTrue);
            socket.off("player:start", playerStart);
            socket.off("game:over", playerWin);
        };
    }, [
        socket,
        setPlayer,
        setOpponent,
        chatUsername,
        opponent.ready,
        setIdsTurn,
        setEndGame,
    ]);

    //game started?
    useEffect(() => {
        if (player.ready && opponent.ready) {
            setGameStarted(true);
        } else {
            setGameStarted(false);
        }

        // console.log(player);
        // console.log(startingPlayer);
    }, [player, opponent, setGameStarted]);

    useEffect(() => {
        const removeStartingPlayer = () => {
            setStartingPlayer("");
        };

        setTimeout(removeStartingPlayer, 5000);
    }, [startingPlayer, setStartingPlayer]);

    useEffect(() => {
        messageRef.current && messageRef.current.focus();
    }, []);

    return (
        <div className="game-wrapper">
            {!endGame && (
                <>
                    <div className="game-setup">
                        <div className="players">
                            {player.ready && opponent.ready ? (
                                <>
                                    <div className="outer-player">
                                        <div className="player">
                                            <img
                                                className="player-image"
                                                src={playerAvatar}
                                                alt=""
                                            />
                                            <h3>{chatUsername}</h3>
                                        </div>
                                        <PreviewShips foe={false} />
                                    </div>
                                    <div className="outer-opponent">
                                        <div className="opponent">
                                            <img
                                                className="opponent-image"
                                                src={opponent.avatar}
                                                alt=""
                                            />
                                            <h3>{opponent.username}</h3>
                                        </div>
                                        <PreviewShips foe={true} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="player">
                                        <p>
                                            {player.ready
                                                ? "You are ready"
                                                : "You are not ready"}
                                        </p>
                                        <img
                                            className="player-image"
                                            src={playerAvatar}
                                            alt=""
                                        />
                                        <h3>{chatUsername}</h3>
                                        <button
                                            onClick={readyBtnPressed}
                                            className={"mb-3 " + btnStyle}
                                        >
                                            {playerReady ? "Ready!" : "Ready?"}
                                        </button>
                                    </div>
                                    <div className="opponent">
                                        <p>
                                            {opponent.ready
                                                ? "Opponent is ready"
                                                : "Opponent is not ready"}
                                        </p>
                                        <img
                                            className="opponent-image"
                                            src={opponent.avatar}
                                            alt=""
                                        />
                                        <h3>{opponent.username}</h3>
                                        <button
                                            className={
                                                "mb-3 " + opponentBtnStyle
                                            }
                                        >
                                            {opponent.ready
                                                ? "Ready!"
                                                : "Waiting..."}
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        {startingPlayer ? (
                            <p
                                style={{
                                    position: "absolute",
                                    top: "30%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                {startingPlayer}
                            </p>
                        ) : null}

                        <div className="d-flex align-items-center">
                            {gameStarted ? (
                                //Game started
                                <>
                                    {playerRound === player.username ? (
                                        <p
                                            style={{
                                                position: "absolute",
                                                top: "20%",
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, -50%)",
                                            }}
                                            className="text-success"
                                        >{`${playerRound}'s turn`}</p>
                                    ) : playerRound === opponent.username ? (
                                        <p
                                            style={{
                                                position: "absolute",
                                                top: "20%",
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, -50%)",
                                            }}
                                            className="text-danger"
                                        >{`${playerRound}'s turn`}</p>
                                    ) : null}

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

                        <div
                            className="boat-setup"
                            onDrop={drop}
                            onDragOver={allowDrop}
                        >
                            {startBoats.map((boat, index) => (
                                <div
                                    key={index}
                                    id={`boat${index + 1}`}
                                    className={`inner-grid-item ${boat.size} ${boat.direction}`}
                                    draggable="true"
                                    onDragStart={drag}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {gameStarted 
                            ?
                            <div id="chat-div">
                                <Chat
                                    onSubmit={handleSubmit}
                                    message={message}
                                    setMessage={setMessage}
                                    messages={messages}
                                    messageRef={messageRef}
                                />
                            </div>
                            : null}

                    <div
                        id="rotate-btn"
                        className="d-flex justify-content-center align-items-center"
                        onClick={rotateShips}
                    >
                        <FontAwesomeIcon icon={faArrowRotateRight} />
                    </div>
                </>
            )}
            {endGame && <EndGame 
                socket={socket} 
                winner={winner} 
                room={room}
                grid={grid}
                init={init}
            />}
        </div>
    );
};

export default Game;
