// import React, { useRef, useState } from "react";
// import "./ResetCode.css";

// export default function ResetCode() {
//   const inputRefs = Array(6)
//     .fill(0)
//     .map((_, index) => useRef(null));

//   const handleInputChange = (e, index) => {
//     const input = e.target;
//     const prevIndex = index - 1;
//     const nextIndex = index + 1;

//     if (input.value === "") {
//       // If the input is empty and the user presses backspace, move focus to the previous input
//       if (e.keyCode === 8 && prevIndex >= 0) {
//         inputRefs[prevIndex].current.focus();
//       }
//     } else if (/^\d$/.test(input.value) && nextIndex < inputRefs.length) {
//       // If the input is a digit, move focus to the next input
//       inputRefs[nextIndex].current.focus();
//     }

//     // Call a function to update the complete code when any input changes
//     updateCompleteCode();
//   };

//   const updateCompleteCode = () => {
//     const codeArray = inputRefs.map((ref) => ref.current.value);
//     const code = codeArray.join(""); // Concatenate the digit inputs
//     setCompleteCode(code); // Update the state variable
//   };
//   const [completeCode, setCompleteCode] = useState(""); // State variable to store the complete code
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     console.log("Complete Code:", completeCode); // Log the complete code
//   };


//   return (
//     <div className="code-body">
//       <div className="code-sub-body">
//         <form onSubmit={handleSubmit}>
//           <div className="title text-xl font-semibold">Reset Code</div>
//           <div className="input-boxx">
//             <p className="code-message">Enter the code sent to your email</p>
//             <div>
//               {inputRefs.map((inputRef, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   ref={inputRef}
//                   onKeyDown={(e) => handleInputChange(e, index)}
//                   className="digit-input"
//                 />
//               ))}
//             </div>
//           </div>
//           <div>
//             <button className="btn btn-primary" type="submit">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, {
  useRef,
  useState,
  useEffect,
} from "react";


import "./ResetCode.css";


export default function ResetCode() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., an API call) for demonstration purposes
    setTimeout(() => {
      setIsLoading(false); // Set loading to false when the data is ready
    }, 2000); // Simulated 2-second delay
  }, []);

  const inputRefs = Array(6)
    .fill(0)
    .map(() => useRef(null));

  const [completeCode, setCompleteCode] = useState(""); // State variable to store the complete code

  const handleInputChange = (e, index) => {
    const input = e.target;
    const prevIndex = index - 1;
    const nextIndex = index + 1;

    if (input.value === "") {
      // If the input is empty, disable the next input
      if (nextIndex < inputRefs.length) {
        inputRefs[nextIndex].current.disabled = true;
      }
    } else {
      // If the input is not empty, enable the next input and set the value
      inputRefs[nextIndex]?.current?.focus();
      inputRefs[nextIndex]?.current?.removeAttribute("disabled");
    }

    // Update the input value and call a function to update the complete code
    inputRefs[index].current.value = input.value;
    updateCompleteCode();
  };

  const updateCompleteCode = () => {
    const codeArray = inputRefs.map((ref) => ref.current.value);
    const code = codeArray.join(""); // Concatenate the digit inputs
    setCompleteCode(code); // Update the state variable

    // Check if all inputs are filled, and if so, disable all inputs
    const allInputsFilled = codeArray.every((value) => value !== "");
    if (allInputsFilled) {
      inputRefs.forEach((ref) => (ref.current.disabled = true));

       window.location.href = "/ResetPassword";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Complete Code:", completeCode); // Log the complete code

  };

  return (
    <div className="code-body">
      <div className="code-sub-body">
        <form onSubmit={handleSubmit}>
          <div className="title text-xl font-semibold">Reset Code</div>
          <div className="input-boxx">
            <p className="code-message">Enter the code sent to your email</p>
            <div>
              {inputRefs.map((inputRef, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={inputRef}
                  onKeyUp={(e) => handleInputChange(e, index)}
                  className="digit-input"
                  disabled={index !== 0} // Disable all inputs except the first one initially
                />
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}



