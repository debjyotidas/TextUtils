import React, {useState} from 'react';
import PropTypes from 'prop-types';
// useState is a hook
export default function Textform(props) {
const[text, setText]= useState("");
// text="new text"; Wrong way to change the state
// setText("new text"); Correct way to change the state
const conUpClick = ()=>{
    console.log("up"+text);
    var newText=text.toUpperCase();
    setText(newText);
    props.showAlerrt("Converted to Uppercase","success");
};
const conLowClick = ()=>{
    console.log("low"+text);
    var newText=text.toLowerCase();
    setText(newText);
    props.showAlerrt("Converted to LowerCase","warning");

};
const clearAllText = ()=>{
    console.log("clear");
    var newText="";
    setText(newText);
    props.showAlerrt("All Text Cleared","warning");
};
const copyText = ()=>{
    var text = document.getElementById("inputMyText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlerrt("Text Copied Successfully","warning");

}
const handleOnChange = (event)=>{
    console.log("change");
    setText(event.target.value);
}
const handleExtraSpace = (event)=>{
    console.log("space");
    var newText = text.split(/\s+/);
    setText(newText.join(" "));
}
    return (
        <>
        <div className='container' style={{color: props.mode=='light'?'black':'white'}} >
            <h1>{props.heading}</h1>
            <textarea type="text" id="inputMyText" value={text} onChange={handleOnChange} className="form-control my-2" aria-labelledby="passwordHelpBlock" rows="8" style={{backgroundColor: props.mode=='light'?'white':'#495057',color: props.mode=='light'?'black':'white'}}></textarea>   
            <button className='btn btn-primary'onClick={conUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2'onClick={conLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1'onClick={clearAllText}>Clear Text</button>
            <button className='btn btn-primary mx-1'onClick={copyText}>Copy Text</button>
            <button className='btn btn-primary mx-1'onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className='container my-2' style={{color: props.mode=='light'?'black':'white'}}>
            <h2> Your Text has</h2>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
            <p>{0.08*text.split(" ").length} words read</p>
            <h4>Preview</h4>
            
            <p>{text.length>0?text:'Please enter some text to see the preview'}</p>
        </div>
        </>
        
    )
}

