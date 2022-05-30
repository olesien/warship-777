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

const Startpage = ({ onSubmit }) => {
    const [username, setUsername] = useState("");
    // const [avatar, setAvatar] = useState("");
    const [loading, setLoading] = useState(false);
    const {
        socket,
        setChatUsername,
        chatUsername,
        changeRoom,
        playerAvatar,
        setPlayerAvatar,
        setPlayer,
        setOpponent,
    } = useGameContext();

    const one = "Monkey D. Luffy";
    const two = "Roronoa Zoro";
    const three = "Shanks";
    const four = "Nami";
    const five = "Dracule Mihawk";
    const six = "Karasu";
    const seven = "Nefertari Vivi";
    const eight = "Arlong";

    const avatarNameArr = [one, two, three, four, five, six, seven, eight];

    const avatarName = (name) => {
        if (username === "") {
            setUsername(name);
        } else if (avatarNameArr.includes(username, 0)) {
            setUsername(name);
        } else if (!avatarNameArr.includes(username, 0)) {
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
        //navigate("/game");
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
        // socket.on("user:disconnect", (msg) => {
        //   console.log(msg)
        // })

        return () => {
            console.log("cleaning up");
            socket.off("user:joined", (msg) => {
                console.log(msg);
            });
        };
    }, [chatUsername, playerAvatar, socket, username.length]);

    useEffect(() => {
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
            socket.off("players", (game) => {
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
        };
    }, [
        changeRoom,
        chatUsername,
        setChatUsername,
        setOpponent,
        setPlayer,
        socket,
    ]);

    return (
        <div className="d-flex justify-content-end" id="homePage">
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

            <form action="" id="avatarSelect">
                <label className="avatar">
                    <input
                        type="radio"
                        name="avatar"
                        onClick={() => {
                            avatarName(one);
                            setPlayerAvatar(MonkeyImg);
                        }}
                    />
                    <img src={MonkeyImg} alt="" className="avatarImg" />
                </label>

                <label className="avatar">
                    <input
                        type="radio"
                        name="avatar"
                        onClick={() => {
                            avatarName(two);
                            setPlayerAvatar(RoronoaImg);
                        }}
                    />
                    <img src={RoronoaImg} alt="" className="avatarImg" />
                </label>

                <label className="avatar">
                    <input
                        type="radio"
                        name="avatar"
                        onClick={() => {
                            avatarName(three);
                            setPlayerAvatar(ShanksImg);
                        }}
                    />
                    <img src={ShanksImg} alt="" className="avatarImg" />
                </label>

                <label className="avatar">
                    <input
                        type="radio"
                        name="avatar"
                        onClick={() => {
                            avatarName(four);
                            setPlayerAvatar(NamiImg);
                        }}
                    />
                    <img src={NamiImg} alt="" className="avatarImg" />
                </label>

                <label className="avatar">
                    <input
                        type="radio"
                        name="avatar"
                        onClick={() => {
                            avatarName(five);
                            setPlayerAvatar(DraculeImg);
                        }}
                    />
                    <img src={DraculeImg} alt="" className="avatarImg" />
                </label>

                <label className="avatar">
                    <input
                        type="radio"
                        name="avatar"
                        onClick={() => {
                            avatarName(six);
                            setPlayerAvatar(KarasuImg);
                        }}
                    />
                    <img src={KarasuImg} alt="" className="avatarImg" />
                </label>

                <label className="avatar">
                    <input
                        type="radio"
                        name="avatar"
                        onClick={() => {
                            avatarName(seven);
                            setPlayerAvatar(NeferatiImg);
                        }}
                    />
                    <img src={NeferatiImg} alt="" className="avatarImg" />
                </label>

                <label className="avatar">
                    <input
                        type="radio"
                        name="avatar"
                        onClick={() => {
                            avatarName(eight);
                            setPlayerAvatar(ArlongImg);
                        }}
                    />
                    <img src={ArlongImg} alt="" className="avatarImg" />
                </label>
            </form>
        </div>
    );
};

export default Startpage;