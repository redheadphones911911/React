import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
    const [value , setValue] = useState("");
    return(
        <div className='container'>
            <input type='text' className='display' value={value}/>
            <div className='wrapper'>
            <div>
            <input type='button' value={7} onClick={e  => { setValue(value + e.target.value)}}/>
            <input type='button' value={8} onClick={e => {setValue(value + e.target.value)}} />
            <input type='button' value={9} onClick={e => {setValue(value + e.target.value)}}/>
            <input type='button' value={"DEL"} />
            <input type='button' value={"AC"} onClick={e => {setValue("")}} />
            </div>
            <div>
            <input type='button' value={4} onClick={e => {setValue(value + e.target.value)}} />
            <input type='button' value={5} onClick={e => {setValue(value + e.target.value)}}/>
            <input type='button' value={6}/>
            <input type='button' value={"×"}/>
            <input type='button' value={"÷"}/>
            </div>
            <div>
                <input type='button' value={1}/>
                <input type='button' value={2}/>
                <input type='button' value={3}/>
                <input type='button' value={"+"}/>
                <input type='button' value={"-"}/>
            </div>
            <div>
                <input type='button' value={0}/>
                <input type='button' value={"."}/>
                <input type='button' value={"×10"}/>
                <input type='button' value={"Ans"}/>
                <input type='button' value={"="}/>
            </div>
            </div>
        </div>
    )
}

export default App