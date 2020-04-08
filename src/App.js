import React, {useState} from 'react';
import './App.css'

function App() {
    const [fromDigit, setFromDigit] = useState(0);
    const [toDigit, setToDigit] = useState(0);
    const [range, setRange] = useState([]);
    const [number, setNumber] = useState(0);

    const onChangeFrom = (e) => {
        setFromDigit(+e.target.value);
        let range = [];
        if (e.target.value > 0 && e.target.value <= 100000) {
            for (let i = +e.target.value; i <= toDigit; i++) {
                if (i !== 0&& i<10) {range.push(i)}
                if (i !== 0&&i<100&&i%10===0) {range.push(i)}
                if (i !== 0&&i<1000&&i%100===0) {range.push(i)}
                if (i !== 0&&i<10000&&i%1000===0) {range.push(i)}
                if (i !== 0&&i<100000&&i%10000===0) {range.push(i)}

            }
            if (toDigit!== 0&&toDigit>10&&toDigit%10!==0) {range.push(toDigit)}
        }
        setRange(range);
    };

    const onChangeTo = (e) => {
        setToDigit(+e.target.value);
        let range = [];
        if (e.target.value > 0 && e.target.value <= 100000) {
            for (let i = fromDigit; i <= +e.target.value; i++) {
                if (i !== 0&& i<10) {range.push(i)}
                if (i !== 0&& i<100&&i%10===0) {range.push(i)}
                if (i !== 0&& i<1000&&i%100===0) {range.push(i)}
                if (i !== 0&& i<10000&&i%1000===0) {range.push(i)}
                if (i !== 0&& i<100000&&i%10000===0) {range.push(i)}
            }
            if (+e.target.value!== 0&&+e.target.value>10&&+e.target.value%10!==0) {range.push(+e.target.value)}
        }

        setRange(range);
    };

    function chunk(range, chunkSize) {
        let result = [];
        for (let i=0;i<range.length; i+=chunkSize)
            result.push(range.slice(i,i+chunkSize));
        return result;
    }


    const onButtonClickChange = (e) => {
        setNumber(number + e)
    };

    const onButtonReset = () => {
        setNumber(0)
    }

    return <div className="App-content">
        <div>
            <h3> Please enter "min" and "max" values to generate buttons. </h3>

            Please use only positive numbers.

            <br/>
            min:
            <input type="number" placeholder="0" min="0" title="Please enter minimum value" onChange={onChangeFrom}/>
            {" "}max:
            <input type="number" placeholder="0" min="0" title="Please enter maximum value" onChange={onChangeTo}/>
        </div>
        <div className="App-buttons">
            <div className = "left">
            {range.reverse().map(el => <button key={-el} onClick={() => onButtonClickChange(-el)}> {-el}</button>)}
            </div>
            <div className ="center">
            {number} <br/>
            <button onClick={() => onButtonReset()}>Reset</button>
            </div>
            <div className="right">
            {range.reverse().map(el => <button key={el} onClick={() => onButtonClickChange(el)}> {el}</button>)}
            </div>
        </div>


    </div>;
}

export default App;