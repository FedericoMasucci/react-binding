import { useState } from 'react';

export default function InputText() {
    const [iText, setIText] = useState("");
    return (
        <>
            <input value={iText} type="text" onChange={e => setIText(e.target.value)} />
            <p>{iText}</p>
        </>
    )
}