import {Tawandaki} from "../Tawandaki.tsx";

export interface Props {
    selection: Tawandaki | undefined
}

export function TawCard(props: Props) {

    const {selection} = props;
    return (
        <div className={"taw-card"}>
            {selection ? [
                <div className={"m-5 d-flex flex-column flex-wrap text-start"}>
                    <div className={"german"}>
                        <span className={"label"}>Deutsch:</span>
                        <span className={"content content-bold"}>{selection?.german}</span>
                    </div>
                    <div className={"d-flex flex-row tawandaki"}>
                        <div className={"label"}>Tawandaki:</div>
                        <div className={"content"}>
                            <span className={"content-bold me-2"}>{selection?.tawandaki}</span>
                            <wbr />
                            <span className={"pronunciation"}>({selection?.pronunciation})</span>
                        </div>

                    </div>
                    <div className={"mt-3"}>
                        <span className={"label"}>Bedeutung:</span>
                        <span className={"content"}>{selection?.meaning}</span>
                    </div>
                    {selection?.trivia ? [
                        <div className={"mt-2 trivia"}>
                            <span className={"label"}>Trivia:</span>
                            <span className={"content"}>{selection?.trivia}</span>
                        </div>
                    ] : []}
                </div>
            ] : []}
        </div>
    );
}