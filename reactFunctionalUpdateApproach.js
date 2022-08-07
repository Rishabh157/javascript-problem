import React, { useState } from "react"

function FunctionlUpdateApproach() {

 const [number, setNumber] = useState(0)

 // it will update the state as well
 const handleCount = () => {
  setNumber(number + 1)
 }

 // and it will also update the state by number value available in number state 
 // for example if handleCount value is 3 and then we click handleCountUpdate it 
 // will update the 3 to 4 no matter how many clicked you done after click handleCountUpdate
 const handleCountUpdate = () => {
  setTimeout(() => {
   setNumber(number + 1)
  }, 3000)
 }

 // for update the state after setTimeOut we have to use a functional update approach
 const handleCountSecond = () => {
  setTimeout(() => {
   setNumber((currentNumber) => currentNumber + 1)
  }, 3000)


  return (
   <div>
    <span> Number is : </span> {number}
    <button onClick={handleCount} className="btn btn-dark">CLICK</button>
    <button onClick={handleCountUpdate} className="btn btn-dark">After</button>
   </div>
  )
 }
}

export default FunctionlUpdateApproach;
