import React ,{useState}from "react";

export default function TextForm(props) {

    const[text,setText]=useState("Enter text here");

  // text ="new text"; wrong way to change the text

  // setText("new text");  correct way to chnage the text

  const handleOnChange =(event)=>{
  // console.log("on change");
  setText(event.target.value);
}

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase','success');
  };

    const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert('Converted to Lowercase','success');
  };

   const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
         props.showAlert('Text Cleard','success');
  };

  
   const handleReverseClick = ()=>{
    let newText = ('');
    for(let i = text.length-1;i>=0;i--){
      newText +=text[i];
    }
    setText(newText);
       props.showAlert('Text has been reversed','success');
  };

   const handleCopy = () =>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();  // to de-select the text
    props.showAlert('copy to clipboard','success');
    
   };

   const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(''));
       props.showAlert('Removed Extra Spaces','success');
   }

  return (
    <>
     <div className="container"style={{color:props.mode==='dark'?'white':'#212529'}}>
      <h3 className="mb-3">{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'#212529'}} 
        id="myBox" rows="8"></textarea>
      </div>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
       <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3"style={{color:props.mode==='dark'?'white':'#212529'}}>
      <h2>{props.heading1}</h2>
      <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview !'}</p>
    </div>

    </>
  );
}
