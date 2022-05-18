import Gameboard from "../components/Gameboard";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import Grid from "../components/Grid";

const Game = () => {
    return (
        <div className="">
            <div className="">
                <div
                    className="d-flex flex-column align-items-center"
                    style={{ width: "400px" }}
                >
                    <h3>Username</h3>

                    <button className="mb-5 ready-btn">Ready ?</button>
                </div>

                <div
                    className="d-flex flex-column"
                    style={{ position: "relative", right: "44px" }}
                >
                    <div
                        className="grid-container justify-content-end"
                        style={{
                            width: "400px",
                            position: "relative",
                            left: "44px",
                        }}
                    >
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            1
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            2
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            3
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            4
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            5
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            6
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            7
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            8
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            9
                        </div>
                        <div className="grid-item d-flex justify-content-center align-items-end black-border">
                            10
                        </div>
                    </div>

                    <div className="d-flex">
                        <div
                            className="grid-container d-flex flex-column"
                            style={{}}
                        >
                            <div className="grid-item d-flex justify-content-end align-items-center black-border me-1">
                                A
                            </div>
                            <div className="grid-item d-flex justify-content-end align-items-center black-border">
                                B
                            </div>
                            <div className="grid-item d-flex justify-content-end align-items-center black-border">
                                C
                            </div>
                            <div className="grid-item d-flex justify-content-end align-items-center black-border">
                                D
                            </div>
                            <div className="grid-item d-flex justify-content-end align-items-center black-border">
                                E
                            </div>
                            <div className="grid-item d-flex justify-content-end align-items-center black-border">
                                F
                            </div>
                            <div className="grid-item d-flex justify-content-end align-items-center black-border">
                                G
                            </div>
                            <div className="grid-item d-flex justify-content-end align-items-center black-border">
                                H
                            </div>
                            <div className="grid-item d-flex align-items-center black-border align-self-end i">
                                I
                            </div>
                            <div className="grid-item d-flex justify-content-end align-items-center black-border">
                                J
                            </div>
                        </div>

                        <Gameboard />
                    </div>
                </div>

                {/* Your ships, place them out on the board */}
                <div>
                    <div className="">
                        <div
                            className="d-flex flex-wrap mt-5"
                            style={{ height: "100px", width: "400px" }}
                        >
                            <div
                                className="grid-container pe-2"
                                style={{ width: "90px" }}
                            >
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                            </div>

                            <div
                                className="grid-container pe-2"
                                style={{ width: "130px" }}
                            >
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                            </div>

                            <div
                                className="grid-container pe-2"
                                style={{ width: "170px" }}
                            >
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                            </div>

                            <div
                                className="grid-container pe-2"
                                style={{ width: "90px" }}
                            >
                                <div className="grid-item ship-colors"></div>
                                <div className="grid-item ship-colors"></div>
                            </div>
                        </div>

                        <div
                            id="rotate-btn"
                            className="d-flex justify-content-center align-items-center"
                            style={{ height: "20px", width: "20px" }}
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
