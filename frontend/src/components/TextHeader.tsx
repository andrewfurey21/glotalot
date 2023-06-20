import "../styles/main.scss";

import { AddTextUI } from "./AddText";

export function TextHeader() {
    return (
        <div className="textHeader">
            <div className="textHeaderTitle">
                Texts
            </div>
            <AddTextUI/>
        </div>
    );
}

