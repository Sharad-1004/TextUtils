import React,{useState} from 'react'




export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked",text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UPPER CASE","success");
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked",text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LOWER CASE","success");
    }
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked",text);
        let newText='';
        setText(newText);
        props.showAlert("clear the text","success")
    }
    const handleCopy=()=>{
        // console.log("I am copy");
       var text=document.getElementById("mybox")
      text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("copy to clipboard","success")
       
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("remove extra space","success")

    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
        
    }
    const [text,setText]=useState('');



    // text="new text" wrong way to change state
    // setText("new text")  //correct way
  
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
     
<div className="mb-3">
  
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',
    color:props.mode==='dark'?'white':'black'
  }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver To UPPERCASE</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Conver To LOWERCASE</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>CLEAR TEXT</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>COPY TEXT</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length } Minutes nead</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter SomeThing To Preview It"}</p>
    </div>
    </>
  )
}
