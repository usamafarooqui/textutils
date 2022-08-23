import React , {useState} from "react";

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("handlwe up was click" + text)
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("converted to UpperCase","success");
    }
    const handleOnChange =(e)=>{
        console.log("on chabge");
        setText(e.target.value)
    }
    const handleloClick =()=>{
      let newText = text.toLowerCase()
      setText(newText);
      props.showAlert("converted to LowerCase","success");
    }

    const handleclrClick =()=>{
      let newText = '';
      setText(newText);
      props.showAlert("text is clear","success");
    }

    const handleCopyClick =()=>{
    
      let text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copied","success");
    }

    const handleExtraSpace =()=>{
    
     let newText = text.split(/[  ]+/);
     setText(newText.join(" "));
     props.showAlert("Extra space is removed","success");


    }

    // let response ={
    //   display:'flex',
    //   flexWrap:'wrap',
    //   alignItems:'center'
    // }

    
    
    const [text , setText] = useState("")
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black '}}>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label" >
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="9"
          placeholder="Enter your Text here"
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black '}}
       
        ></textarea>
      </div>
      <div className="container" >
      <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>convert to upercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>convert to lowerCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleclrClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0 }).length} words and {text.length} </p>
      <p>{0.008*text.split(' ').filter((element)=>{return element.length !== 0 }).length} minutes on average to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
