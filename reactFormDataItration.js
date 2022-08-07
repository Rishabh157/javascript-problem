import React, { useState } from "react"

function ReactFormDataItration() {

 const [user, setUser] = useState({
  name: "",
  age: "",
  job: ""
 })

 const handerChange = (e) => {
  setUser(preventData => ({ ...preventData, [e.target.name]: e.target.value }))
  console.log(user)
 }

 return (
  <div style={{ display: "flex", justifyContent: "center", paddingBottom: "100px" }}>
   <div>
    <p>Name : {user.name}</p>
    <p>Age : {user.age}</p>
    <p>Job : {user.job}</p>
    <div>User</div>
    <input name="name" onChange={handerChange} placeholder="Name" type="text" />
    <input name="age" onChange={handerChange} placeholder="age" type="text" />
    <input name="job" onChange={handerChange} placeholder="job" type="text" />
    <button onClick={() => console.log(user)} className="btn btn-secondary">CLICK DATA</button>
   </div>
  </div>
 )
}

export default ReactFormDataItration;
