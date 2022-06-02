import { useGameContext } from "../contexts/GameContextProvider";

export default function Avatars({ character, avatarName }) {
    const { setPlayerAvatar } = useGameContext();
    return (
        <div className="avatar">
            <button
                className={
                    character.selected
                        ? "avatar-btn avatar-btn-selected"
                        : "avatar-btn"
                }
                onClick={(e) => {
                    //e.currentTarget.classList.toggle("avatar-btn-selected");
                    avatarName(character.name);
                    setPlayerAvatar(character.avatar);
                }}
            >
                <img
                    className="avatarImg"
                    src={character.avatar}
                    alt={"Image of " + character.name}
                />
            </button>
        </div>
    );
}
