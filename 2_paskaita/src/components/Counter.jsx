//Sukurkite komponentą Counter kuris atvaizduos du mygtukus ir skaičių. 
//Nuspaudus mygtuką skaičius turi padidėti +1 arba -1. Pradinis skaičius yra 0.

import { useState } from "react";

const Counter = () => {
    const [number, setNumber, setNumberMinus] = useState(0);

    const changeNumberPlus = () => {
        setNumber(number + 1);
    }
    const changeNumberMinus = () => {
        setNumber(number - 1);
    }


    return (
        <div>
            <button onClick={changeNumberPlus}>Add +1</button>
            <button onClick={changeNumberMinus}>Deduct 1</button>
            <div>{number}</div>
        </div>
    )
}

export default Counter