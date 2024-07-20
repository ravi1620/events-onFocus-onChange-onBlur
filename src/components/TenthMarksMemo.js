import React, { useRef } from 'react';

function TenthMarksMemo() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const telMarksInputRef = useRef();
  const hindiMarksInputRef = useRef();
  const engMarksInputRef = useRef();
  const mathsMarksInputRef = useRef();
  const sciMarksInputRef = useRef();
  const socMarksInputRef = useRef();
  const paraRef = useRef();

  const firstNameResultRef = useRef();
  const lastNameResultRef = useRef();
  const telResultRef = useRef();
  const hindiResultRef = useRef();
  const engResultRef = useRef();
  const mathsResultRef = useRef();
  const sciResultRef = useRef();
  const socResultRef = useRef();

  const calculateResult = () => {
    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const telMarks = Number(telMarksInputRef.current.value);
    const hindiMarks = Number(hindiMarksInputRef.current.value);
    const engMarks = Number(engMarksInputRef.current.value);
    const mathsMarks = Number(mathsMarksInputRef.current.value);
    const sciMarks = Number(sciMarksInputRef.current.value);
    const socMarks = Number(socMarksInputRef.current.value);
    const totalResult = telMarks + hindiMarks + engMarks + mathsMarks + sciMarks + socMarks;

    paraRef.current.innerHTML = `${firstName} ${lastName} got ${totalResult} Marks`;
  };

  return (
    <div>
      <form className="mainForm">
        <h1>SSC Marks Memo of Manikanta</h1>
        <div>
          <label className='label'>FirstName:</label>
          <input
            ref={firstNameInputRef}
            type='text'
            onFocus={() => { firstNameInputRef.current.style.backgroundColor = "green"; }}
            onChange={() => {
              firstNameInputRef.current.style.backgroundColor = "pink";
              firstNameInputRef.current.style.color = "white";
            }}
            onBlur={() => { firstNameInputRef.current.style.backgroundColor = "yellow"; }}
          />
          <span ref={firstNameResultRef}></span>
        </div>
        <div>
          <label className='label'>LastName:</label>
          <input
            ref={lastNameInputRef}
            type='text'
            onFocus={() => { lastNameInputRef.current.style.backgroundColor = "green"; }}
            onChange={() => {
              lastNameInputRef.current.style.backgroundColor = "pink";
              lastNameInputRef.current.style.color = "white";
            }}
            onBlur={() => { lastNameInputRef.current.style.backgroundColor = "yellow"; }}
          />
          <span ref={lastNameResultRef}></span>
        </div>
        <div>
          <label className='label'>Telugu</label>
          <input
            ref={telMarksInputRef}
            type='number'
            onFocus={() => { telMarksInputRef.current.style.backgroundColor = "green"; }}
            onChange={() => {
              telMarksInputRef.current.style.backgroundColor = "pink";
              telMarksInputRef.current.style.color = "white";
              telResultRef.current.innerHTML = Number(telMarksInputRef.current.value) >= 35 ? "Pass" : "Fail";
              telResultRef.current.style.color = Number(telMarksInputRef.current.value) >= 35 ? "green" : "red";
            }}
            onBlur={() => { telMarksInputRef.current.style.backgroundColor = "yellow"; }}
          />
          <span ref={telResultRef}></span>
        </div>
        <div>
          <label className='label'>Hindi</label>
          <input
            ref={hindiMarksInputRef}
            type='number'
            onFocus={() => { hindiMarksInputRef.current.style.backgroundColor = "green"; }}
            onChange={() => {
              hindiMarksInputRef.current.style.backgroundColor = "pink";
              hindiMarksInputRef.current.style.color = "white";
              hindiResultRef.current.innerHTML = Number(hindiMarksInputRef.current.value) >= 35 ? "Pass" : "Fail";
              hindiResultRef.current.style.color = Number(hindiMarksInputRef.current.value) >= 35 ? "green" : "red";
            }}
            onBlur={() => { hindiMarksInputRef.current.style.backgroundColor = "yellow"; }}
          />
          <span ref={hindiResultRef}></span>
        </div>
        <div>
          <label className='label'>English</label>
          <input
            ref={engMarksInputRef}
            type='number'
            onFocus={() => { engMarksInputRef.current.style.backgroundColor = "green"; }}
            onChange={() => {
              engMarksInputRef.current.style.backgroundColor = "pink";
              engMarksInputRef.current.style.color = "white";
              engResultRef.current.innerHTML = Number(engMarksInputRef.current.value) >= 35 ? "Pass" : "Fail";
              engResultRef.current.style.color = Number(engMarksInputRef.current.value) >= 35 ? "green" : "red";
            }}
            onBlur={() => { engMarksInputRef.current.style.backgroundColor = "yellow"; }}
          />
          <span ref={engResultRef}></span>
        </div>
        <div>
          <label className='label'>Mathematics</label>
          <input
            ref={mathsMarksInputRef}
            type='number'
            onFocus={() => { mathsMarksInputRef.current.style.backgroundColor = "green"; }}
            onChange={() => {
              mathsMarksInputRef.current.style.backgroundColor = "pink";
              mathsMarksInputRef.current.style.color = "white";
              mathsResultRef.current.innerHTML = Number(mathsMarksInputRef.current.value) >= 35 ? "Pass" : "Fail";
              mathsResultRef.current.style.color = Number(mathsMarksInputRef.current.value) >= 35 ? "green" : "red";
            }}
            onBlur={() => { mathsMarksInputRef.current.style.backgroundColor = "yellow"; }}
          />
          <span ref={mathsResultRef}></span>
        </div>
        <div>
          <label className='label'>Science</label>
          <input
            ref={sciMarksInputRef}
            type='number'
            onFocus={() => { sciMarksInputRef.current.style.backgroundColor = "green"; }}
            onChange={() => {
              sciMarksInputRef.current.style.backgroundColor = "pink";
              sciMarksInputRef.current.style.color = "white";
              sciResultRef.current.innerHTML = Number(sciMarksInputRef.current.value) >= 35 ? "Pass" : "Fail";
              sciResultRef.current.style.color = Number(sciMarksInputRef.current.value) >= 35 ? "green" : "red";
            }}
            onBlur={() => { sciMarksInputRef.current.style.backgroundColor = "yellow"; }}
          />
          <span ref={sciResultRef}></span>
        </div>
        <div>
          <label className='label'>Social</label>
          <input
            ref={socMarksInputRef}
            type='number'
            onFocus={() => { socMarksInputRef.current.style.backgroundColor = "green"; }}
            onChange={() => {
              socMarksInputRef.current.style.backgroundColor = "pink";
              socMarksInputRef.current.style.color = "white";
              socResultRef.current.innerHTML = Number(socMarksInputRef.current.value) >= 35 ? "Pass" : "Fail";
              socResultRef.current.style.color = Number(socMarksInputRef.current.value) >= 35 ? "green" : "red";
            }}
            onBlur={() => { socMarksInputRef.current.style.backgroundColor = "yellow"; }}
          />
          <span ref={socResultRef}></span>
        </div>
        <button
          type='button'
          onMouseMove={calculateResult}
        >
          Calculate
        </button>
        <p ref={paraRef}></p>
      </form>
    </div>
  );
}

export default TenthMarksMemo;
