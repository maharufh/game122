import React, { useState } from "react";
import UseFetch from "./UseFetch";

function Program() {
  const [num, setNum] = useState("");

   let [val] = UseFetch("https://dummyjson.com/products")
  console.log(val);


 
  function checkPalindrome() {
    let number = Number(num);

    if (isNaN(number)) {
      console.log("Please enter a valid number");
      return;
    }

    let temp = number;
    let rev = 0;

    while (number > 0) {
      let rem = number % 10;
      rev = rev * 10 + rem;
      number = Math.trunc(number / 10);
    }

    if (rev === temp) {
      console.log("It's a palindrome");
    } else {
      console.log("Not a palindrome");
      console.log("Reverse number is:", rev);
    }
  }

  return (
    <>
      <input
        type="number"
        placeholder="Enter number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={checkPalindrome}>Check</button>
    </>
  );
}

export default Program;


