import "../styles/main.scss";
import { NoTexts } from "./NoTexts";

export function TextHeader() {
    return (
        <div className="textHeader">
            <div className="textHeaderTitle">
                Texts
            </div>
            <div className="addTextButton">
                Add Text
            </div>
        </div>
    );
}
