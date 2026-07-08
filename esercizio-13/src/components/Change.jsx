import { useState } from 'react'

export default function Change() {
    const [priceValue, setPriceValue] = useState("EUR");
    let finalPrice = "";

    switch (priceValue) {
        case "EUR":
            finalPrice = '€' + 400;
            break;
        case "USD":
            finalPrice = '$' + (400 * 1.14).toFixed(2);
            break;
        case "GBP":
            finalPrice = '£' + (400 * 0.85);
            break;

        default:
            finalPrice = '€' + 400;

    }


    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Notebook</h5>
                    <p className="card-text">{finalPrice}</p>
                </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked={priceValue === "EUR"} onChange={e => setPriceValue("EUR")} />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Prezzo in EUR</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked={priceValue === "USD"} onChange={e => setPriceValue("USD")} />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Prezzo in USD</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked={priceValue === "GBP"} onChange={e => setPriceValue("GBP")} />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">Prezzo in GBP</label>
            </div>
        </>
    )
}