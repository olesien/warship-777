import UserForm from "../components/userForm";
import WaitingPlayer from "../components/WaitingPlayer";
import React, { useState, useEffect } from "react";
import { useGameContext } from "../contexts/GameContextProvider";
import MonkeyImg from "../assets/images/onepieceavatars-modified 1.png";
import RoronoaImg from "../assets/images/onepieceavatars-modified (1) 1.png";
import ShanksImg from "../assets/images/onepieceavatars-modified (2) 1.png";
import NamiImg from "../assets/images/onepieceavatars-modified (3) 1.png";
import DraculeImg from "../assets/images/onepieceavatars-modified (5) 1.png";
import KarasuImg from "../assets/images/onepieceavatars-modified (6) 1.png";
import NeferatiImg from "../assets/images/onepieceavatars-modified (4) 1.png";
import ArlongImg from "../assets/images/onepieceavatars-modified (7) 1.png";
import StartPageTheme from "../assets/sounds/MainTheme.mp3"
import Avatars from "../components/Avatars";

const Startpage = () => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const {
        socket,
        setChatUsername,
        chatUsername,
        changeRoom,
        playerAvatar,
        setPlayer,
        setOpponent,
    } = useGameContext();

    const [characters, setCharacters] = useState([
        {
            id: 1,
            name: "Monkey D. Luffy",
            avatar: MonkeyImg,
            selected: false,
        },
        {
            id: 2,
            name: "Roronoa Zoro",
            avatar: RoronoaImg,
            selected: false,
        },
        {
            id: 3,
            name: "Shanks",
            avatar: ShanksImg,
            selected: false,
        },
        {
            id: 4,
            name: "Nami",
            avatar: NamiImg,
            selected: false,
        },
        {
            id: 5,
            name: "Dracule Mihawk",
            avatar: DraculeImg,
            selected: false,
        },
        {
            id: 6,
            name: "Karasu",
            avatar: KarasuImg,
            selected: false,
        },
        {
            id: 7,
            name: "Nefertari Vivi",
            avatar: NeferatiImg,
            selected: false,
        },
        {
            id: 8,
            name: "Arlong",
            avatar: ArlongImg,
            selected: false,
        },
    ]);

    const avatarName = (name) => {
        //rerender characters
        setCharacters((characters) => {
            return characters.map((character) =>
                character.name === name
                    ? { ...character, selected: true }
                    : { ...character, selected: false }
            );
        });
        if (username === "") {
            setUsername(name);
        } else if (username.includes(username, 0)) {
            setUsername(name);
        } else if (!username.includes(username, 0)) {
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        console.log(username);
        setChatUsername(username);
    };

    const startGame = () => {
        setLoading(false);
        console.log("Start game");
    };

    useEffect(() => {
        setUsername("");
        console.log("UseEffect runs");

        if (!username.length) {
            return;
        }
        // emits that username value
        socket.emit("user:joined", {
            username: chatUsername,
            avatar: playerAvatar,
        });
        socket.on("user:joined", (msg) => {
            console.log(msg);
        });
        socket.on("players", (game) => {
            console.log(socket, setChatUsername, chatUsername, changeRoom);
            console.log(game);
            const player = game.players.find(
                (player) => player.id === socket.id
            );
            const opponent = game.players.find(
                (player) => player.id !== socket.id
            );
            setPlayer(player);
            setOpponent(opponent);
            changeRoom(game.room);
            startGame();
        });

        return () => {
            console.log("cleaning up");
            socket.off("user:joined", (msg) => {
                console.log(msg);
            });
            socket.on("players", (game) => {
                changeRoom(game.id);
                startGame();
            });
        };
    }, [socket, chatUsername]);

    return (
        <div className="d-flex justify-content-end" id="homePage">
            <audio controls autoPlay loop={true} style={{ display: "none" }}>
                <source src={StartPageTheme} type="audio/mp3" />
            </audio>
            <div id="homePageText">
                <h1>Battle</h1>
                <div id="of">
                    <h1>of</h1>
                </div>
                <h1>Red Line</h1>

                {loading && (
                    <div
                        style={{
                            position: "absolute",
                            top: "35%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <WaitingPlayer />
                    </div>
                )}
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "75%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <UserForm
                    onSubmit={handleSubmit}
                    username={username}
                    setUsername={setUsername}
                    loading={loading}
                />
            </div>

            <div id="avatarSelect">
                {characters.map((character) => (
                    <Avatars character={character} avatarName={avatarName} />
                    ))
                }
            </div>
        </div>
    );
};

export default Startpage;
