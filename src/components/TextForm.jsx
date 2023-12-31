import React, { useState } from 'react'

export default function TextForm(props) {

    const toggleState = () => {
        if (myStyle.color === 'black') {
            setStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            newBtn('Enable Light Mode')
        }
        else {
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            newBtn('Enable Dark Mode')
        }

        //this is for the button 
        if (bttnStyle.color === 'black') {
            newBttnStyle({
                color: 'white',
                backgroundColor: 'black',
            })
        }
        else {
            newBttnStyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
    }

    const [myStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    const [bttnStyle, newBttnStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
    })
    const [bttn, newBtn] = useState('Enable Dark Mode')

    // the above is the function to enable dark mode

    const handleupclick = () => {
        // console.log('button clicked');
        var newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log('text changed ' + text);
        setText(event.target.value);
    }

    const handleloclick = () => {
        var lowerText = text.toLowerCase();
        setText(lowerText)
    }
    const [text, setText] = useState('');

    return (
        <div style={myStyle} className="w-screen h-auto p-5">
            <div className='container1 my-2 flex justify-end'>
                <button type='buttton' className="px-2 py-1 border rounded-3xl " style={bttnStyle} onClick={toggleState}>{bttn}</button>
            </div>
            <div className="container1 my-6" style={myStyle}>
                <h1 className="font-semibold font-serif m-0.5">{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control border-1 border-slate-950" id="textArea" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className='btn btn-outline-success my-0.5' onClick={handleupclick}>Convert to uppercase</button>
                <button className='btn btn-outline-success mx-2 my-0.5' onClick={handleloclick}>Convert to lowercase</button>
            </div>
            <div className="container2 my-4" style={myStyle}>
                <h1>Your text summary is here below</h1>
                <p>Number of words = {text.split(" ").length} and number of characters are = {text.length - text.split(" ").length + 1}</p>
                <p>The text above will be read in {0.08 * text.split(" ").length} minutes OR {0.08 * text.split(" ").length * 60} seconds</p>
            </div>
        </div>
    )
}