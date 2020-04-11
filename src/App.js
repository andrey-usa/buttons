import React, { useState } from "react";
import "./App.css";

function App() {
    const [fromDigit, setFromDigit] = useState();
    const [toDigit, setToDigit] = useState();
    const [range, setRange] = useState([]);
    const [number, setNumber] = useState(0);

    const standardRange = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [10, 20, 30, 40, 50, 60, 70, 80, 90],
        [100, 200, 300, 400, 500, 600, 700, 800, 900],
        [1000],
    ];

    const onChangeFrom = (e) => {
        if (+e.target.value > 0) setFromDigit(+e.target.value);
        const range = [];
        if (+e.target.value < 0 || +e.target.value > 100000) {
            alert("Please enter number between 1 and 100000!");
        } else {
            if (+e.target.value !== 0) {
                for (let i = +e.target.value; i <= +toDigit; i++) {
                    if (i < 10) range.push(i);
                    if (i >= 10 && i < 100 && i % 10 === 0) range.push(i);
                    if (i >= 100 && i < 1000 && i % 100 === 0) range.push(i);
                    if (i >= 1000 && i < 10000 && i % 1000 === 0) range.push(i);
                    if (i >= 10000 && i < 100000 && i % 10000 === 0) range.push(i);
                    if (i > 10 && i === +toDigit && range[range.length - 1] !== +toDigit)
                        range.push(i);
                }
            }
        }
        if (
            +e.target.value > 10 &&
            range[0] !== +e.target.value &&
            +e.target.value < +toDigit
        )
            range.unshift(+e.target.value);

        setRange(chunk(range, 9));
    };

    const onChangeTo = (e) => {
        setToDigit(+e.target.value);
        const range = [];
        if (+e.target.value < 0 || +e.target.value > 100000) {
            alert("Please enter number between 1 and 100000!");
        } else {
            if (
                +fromDigit > 10 &&
                +fromDigit % 10 !== 0 &&
                +fromDigit < +e.target.value
            )
                range.push(+fromDigit);
            for (let i = +fromDigit; i <= +e.target.value; i++) {
                if (i < 10) range.push(i);
                if (i >= 10 && i < 100 && i % 10 === 0) range.push(i);
                if (i >= 100 && i < 1000 && i % 100 === 0) range.push(i);
                if (i >= 1000 && i < 10000 && i % 1000 === 0) range.push(i);
                if (i >= 10000 && i < 100000 && i % 10000 === 0) range.push(i);
                if (
                    i === +e.target.value &&
                    +e.target.value > 10 &&
                    range[range.length - 1] !== +e.target.value
                )
                    range.push(i);
            }
        }
        setRange(chunk(range, 9));
    };

    function chunk(range, chunkSize) {
        let result = [];
        for (let i = 0; i < range.length; i += chunkSize)
            result.push(range.slice(i, i + chunkSize));
        return result;
    }

    const onButtonClickChange = (e) => {
        setNumber(number + +e);
    };

    const onButtonResetZero = () => {
        setNumber(0);
    };

    const onButtonRemoveButtons = () => {
        setRange([]);
    };

    const onButtonStandardRange = () => {
        setRange(standardRange);
    };

    return (
        <div className="App-content">
            <div>
                <h4> Please enter "min" and "max" values to generate buttons. </h4>
                Please use only positive numbers.
                <br />
                min:
                <input
                    type="number"
                    min="1"
                    max="100000"
                    title="Please enter minimum value"
                    onChange={onChangeFrom}
                />{" "}
                max:
                <input
                    type="number"
                    min="1"
                    max="100000"
                    title="Please enter maximum value"
                    onChange={onChangeTo}
                />
            </div>
            <div className="App-buttons">
                <div className="left">
                    {range.map((row) => (
                        <div>
                            {row.map((el) => (
                                <button key={el} onClick={() => onButtonClickChange(-el)}>
                                    {el + "-"}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="center">
                    <h3>{number}</h3>
                    <button onClick={() => onButtonResetZero()}>Reset to 0</button>
                    <br />
                    <button onClick={() => onButtonRemoveButtons()}>
                        Remove buttons
                    </button>
                    <br />
                    <button onClick={() => onButtonStandardRange()}>
                        Standard range: 1 - 1000
                    </button>
                </div>
                <div className="right">
                    {range.map((row) => (
                        <div>
                            {row.map((el) => (
                                <button key={el} onClick={() => onButtonClickChange(el)}>
                                    {el}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
