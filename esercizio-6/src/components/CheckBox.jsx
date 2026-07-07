import { useState } from 'react';

export default function CheckBox() {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);



    return (
        <>

            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" checked={check1} onChange={e => setCheck1(e.target.checked)} id="firstCheckboxStretched" />
                    <label className="form-check-label stretched-link" htmlFor="firstCheckboxStretched">Accetti di ...</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" checked={check2} onChange={e => setCheck2(e.target.checked)} id="secondCheckboxStretched" />
                    <label className="form-check-label stretched-link" htmlFor="secondCheckboxStretched">Accetti di ...</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" checked={check3} onChange={e => setCheck3(e.target.checked)} id="thirdCheckboxStretched" />
                    <label className="form-check-label stretched-link" htmlFor="thirdCheckboxStretched">Accetti di ...</label>
                </li>
            </ul>

            <button type="button" className="btn btn-primary btn-sm" disabled={!check1 || !check2 || !check3} >Continua</button>

        </>
    )
}