import UserForm from "../components/userForm";
import WaitingPlayer from "../components/WaitingPlayer";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useGameContext } from "../contexts/GameContextProvider";
import MonkeyImg from "../assets/images/onepieceavatars-modified 1.png";
import RoronoaImg from "../assets/images/onepieceavatars-modified (1) 1.png";
import ShanksImg from "../assets/images/onepieceavatars-modified (2) 1.png";
import NamiImg from "../assets/images/onepieceavatars-modified (3) 1.png";
import DraculeImg from "../assets/images/onepieceavatars-modified (5) 1.png";
import KarasuImg from "../assets/images/onepieceavatars-modified (6) 1.png";
import NeferatiImg from "../assets/images/onepieceavatars-modified (4) 1.png";
import ArlongImg from "../assets/images/onepieceavatars-modified (7) 1.png";
import StartPageTheme from "../assets/sounds/MainTheme.mp3";
import Avatars from "../components/Avatars";

const Startpage = () => {
    const playBtn = document.getElementById("playBtn");
    const muteBtn = document.getElementById("muteBtn");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { stop }] = useSound(StartPageTheme, { volume: 0.4 });
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
            selected: true,
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

    const toggleSound = () => {
        if (isPlaying === false) {
            play();
            setIsPlaying(true);
            playBtn.classList.add("d-none");
            muteBtn.classList.remove("d-none");
        } else if (isPlaying === true) {
            stop();
            setIsPlaying(false);
            muteBtn.classList.add("d-none");
            playBtn.classList.remove("d-none");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length < 3) {
            alert("Your username is not long enough!");
            return;
        }
        setLoading(true);
        console.log(username);
        setChatUsername(username);
        console.log("UseEffect runs");
        // emits that username value
        console.log(username);
        socket.emit("user:joined", {
            username: username,
            avatar: playerAvatar,
        });
    };

    useEffect(() => {
        const startGame = () => {
            setLoading(false);
            console.log("Start game");
            stop();
        };
        socket.on("user:joined", (msg) => {
            console.log(msg);
        });

        const changePlayers = (game) => {
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
        };

        socket.on("players", changePlayers);

        return () => {
            console.log("cleaning up");
            // stop()
            socket.off("user:joined", (msg) => {
                console.log(msg);
            });
            socket.off("players", changePlayers);
        };
    }, [
        socket,
        changeRoom,
        chatUsername,
        setChatUsername,
        setOpponent,
        setPlayer,
        stop,
    ]);

    return (
        <div className="d-flex justify-content-end" id="homePage">
            {/* <audio controls autoPlay loop={true} id="normalAudio" style={{ display: "none" }}>
                <source src={StartPageTheme} type="audio/mp3" />
            </audio> */}

            <div id="musicDiv" onClick={toggleSound}>
                <FontAwesomeIcon icon={faPlay} id="playBtn" className="" />
                <FontAwesomeIcon
                    icon={faVolumeXmark}
                    id="muteBtn"
                    className="d-none"
                />
            </div>
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
                {characters.map((character, index) => (
                    <Avatars
                        character={character}
                        avatarName={avatarName}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Startpage;
