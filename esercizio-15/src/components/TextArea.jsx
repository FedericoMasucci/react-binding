import { useState } from 'react'

export default function TextArea() {
    const [text, setText] = useState("");
    let longText = "";
    switch (true) {
        case text.length < 10:
            longText = "Troppo Corto";
            break;
        case text.length >= 10 && text.length < 30:
            longText = "Lunghezza Ottimale";
            break;
        case text.length > 30:
            longText = "Troppo Lungo";
            break;
        default:
            longText = "Troppo Corto"

    }

    return (
        <>
            <textarea name="" id="" value={text} onChange={e => setText(e.target.value)}></textarea>

            {(longText === "Troppo Corto" || longText === "Troppo Lungo") && (
                <div className="alert alert-danger" role="alert">
                    {longText}
                </div>
            )}

            {longText === "Lunghezza Ottimale" && (
                <div className="alert alert-success" role="alert">
                    {longText}
                </div>
            )}

        </>
    )
}