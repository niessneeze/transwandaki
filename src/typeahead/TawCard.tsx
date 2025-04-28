import {Tawandaki} from "../Tawandaki.tsx";

export interface Props {
    selection: Tawandaki | undefined
}

export function TawCard(props: Props) {

    const {selection} = props;
    return (
        <div className={"taw-card"}>
            {selection ? [
                <div className={"m-5 d-flex flex-row flex-wrap text-start"}>
                    <p className={"german"}>
                        <span className={"label"}>Deutsch:</span>
                        <span className={"content"}> {selection?.german}</span>
                    </p>
                    <p className={"tawandaki"}>
                        <span className={"label"}>Tawandaki:</span>
                        <span className={"content"}> {selection?.tawandaki}</span>
                        <i> ({selection?.pronunciation})</i>
                    </p>
                    <p className={"meaning"}>
                        <span className={"label"}>Bedeutung:</span>
                        <span> {selection?.meaning}</span>
                    </p>
                    {/*{selection?.trivia ? [*/}
                        <p className={"trivia"}>
                            <span className={"label"}>Trivia:</span>
                            <span> {selection?.trivia}</span>
                        </p>
                    {/*] : []}*/}
                </div>
            ] : []}
        </div>
    );
}