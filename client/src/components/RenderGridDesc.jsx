import { useGameContext } from "../contexts/GameContextProvider";

export default function RenderGridDesc({ isAlfabet }) {
    const { grid } = useGameContext();
    const alfabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "O",
        "P",
        "Q",
        "R",
    ];

    return (
        <>
            {grid.map((row, count) => (
                <div
                    key={count}
                    className="grid-item d-flex justify-content-center align-items-end black-border"
                >
                    {isAlfabet ? alfabet[count] : count + 1}
                </div>
            ))}
        </>
    );
}
