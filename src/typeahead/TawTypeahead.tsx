import {useState} from "react";
import {Tawandaki, TAWANDAKI_TEST_LIST} from "../Tawandaki.tsx";
import {Option} from "react-bootstrap-typeahead/types/types";
import {Typeahead} from "react-bootstrap-typeahead";
import {TawCard} from "./TawCard.tsx";

export function TawTypeahead() {
    const [selection, setSelection] = useState<Tawandaki | undefined>();

    function createLabel(tawandaki: Tawandaki) {
        return `${tawandaki.german}`;
    }

    return (
        <>
            <div className={"typeahead"}>
                <Typeahead
                    id={"taw-typeahead"}
                    labelKey={(option) => createLabel(option as Tawandaki)}
                    placeholder={"Wonach suchst du?"}
                    selected={selection == null ? [] : [selection as Option]}
                    onChange={(option) => setSelection(option[0] as Tawandaki)}
                    options={TAWANDAKI_TEST_LIST}
                />
            </div>
            <div className={"taw-card"}>
                <TawCard selection={selection}/>
            </div>
        </>
    );

}