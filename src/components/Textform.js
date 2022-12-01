import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }  
    const handleLoClick = () => {
        // console.log("uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }  
    const handleClearText = () => {
        // console.log("Clear Text");
        setText("")
    }  
    const handleCopy = () => {
        // console.log("Copy the text");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        // console.log("remove extra spaces");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const handleOnChange = (e) => {
        // console.log("On Change");
        setText(e.target.value);
    }

    const [text, setText] = useState("");
    
    return (
        <>
        <div className={`container text-${props.mode==='light' ? 'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`container text-${props.mode==='light' ? 'dark':'light'}`}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Reading</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter some text here to preview it here"}</p>
        </div>
        </>
  )
}
