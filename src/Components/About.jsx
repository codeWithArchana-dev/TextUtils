// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // });

  let myStyle = {
    color: props.mode==='dark'?'white':'#212529',
    backgroundColor:props.mode==='dark'?'#212529':'white',
    border: '1px solid collapse'

  }

  return (
    <>
  
      <div className="container" >
        <h2 className="my-3" style={{ color: props.mode==='dark'?'white':'#212529'}}>About Us</h2 >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample" 
            >


              <div className="accordion-body"style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,character count.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"style={myStyle}>
                TextUtils is a free character counter tool that provides instant character & word count
                statistics for a given text. TextUtils reports the number of words and characters.Thus it is
                suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
               <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >

              <div className="accordion-body"style={myStyle}>
                 This word counter software works in any web Browser such as chrome, firefox, Internet Explorer,
                 Safari, Opera.It suits to conut characters in facebook,blog,books,excel documents,pdf documents,
                 Essays etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
