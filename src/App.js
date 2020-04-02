import React, {useState} from 'react';
import './App.css'

function App() {
    const [fromDigit, setFromDigit] = useState(0);
    const [toDigit, setToDigit] = useState(0);
    const [range, setRange] = useState([]);
    const [number, setNumber] = useState(0);

    const onChangeFrom = (e) => {
        setFromDigit(+e.target.value);
        console.log('target value', +e.target.value);
        console.log('fromDigit', fromDigit);
        let range = [];
        if (e.target.value > 0) {
            for (let i = +e.target.value; i <= toDigit; i++) {
                if (i !== 0) {
                    range.push(i)
                }
            }
        }

        setRange(range);
    };
    console.log(range);
    console.log('fromDigit', fromDigit);


    const onChangeTo = (e) => {
        setToDigit(+e.target.value);
        console.log('target value', +e.target.value);
        console.log('toDigit', toDigit);
        let range = [];
        if (e.target.value > 0) {
            for (let i = fromDigit; i <= +e.target.value; i++) {
                if (i !== 0) {
                    range.push(i)
                }
            }
        }
        setRange(range);
    };
    console.log('range', range);
    console.log('toDigit', toDigit);


    const onButtonClickChange = (e) => {
        setNumber(number + e)
    };

    return <div className="App-content">
        <div>
            <h3> Please enter "min" and "max" values to generate buttons. </h3>

            Please use only positive numbers.

            <br/>
            min:
            <input type="number" placeholder="0" min="0" title="Please enter 'from' value" onChange={onChangeFrom}/>
            {" "}max:
            <input type="number" placeholder="0" min="0" title="Please enter 'to' value" onChange={onChangeTo}/>
        </div>
        <div>
            {range.reverse().map(el => <button key={-el} onClick={() => onButtonClickChange(-el)}> {-el}</button>)}
            {number}
            {range.reverse().map(el => <button key={el} onClick={() => onButtonClickChange(el)}> {el}</button>)}
        </div>


    </div>;
}

export default App;