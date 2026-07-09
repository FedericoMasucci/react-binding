import { useState } from 'react'

export default function Select() {

    const [phrase, setPhrase] = useState("ITA")
    let mess = "Benvenuto nel mio Sito"

    switch (phrase) {
        case "ITA":
            mess = "Benvenuto nel mio Sito";
            break;
        case "ENG":
            mess = "Welcome to my Website";
            break;
        case "FRA":
            mess = "Bienvenue sur mon Site web";
            break;
        case "ESP":
            mess = "Bienvenido a mi Sitio web";
            break;
        case "DEU":
            mess = "Willkommen auf meiner Website";
            break;
        default:
            mess = "Benvenuto nel mio Sito";
    }

    return (
        <>
            <h1 className='center'>{mess}</h1>


            <select
                className="form-select"
                aria-label="Default select example"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}>

                <option value="ITA">Italiano</option>
                <option value="ENG">Inglese</option>
                <option value="FRA">Francese</option>
                <option value="ESP">Spagnolo</option>
                <option value="DEU">Tedesco</option>
            </select>
        </>
    )
}