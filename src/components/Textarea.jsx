import React, { useState } from 'react'

function Textarea() {


  const [vals,setvals]=useState("")

  const sumg=(e)=>{
    e.preventDefault(); 

    setvals("")


  }

  const change=(e)=>{
    e.preventDefault(); 
    setvals(e.target.value)
    console.log(vals)
    
    
  }
  return (
    <div style={{

        position:"absolute",
        width: "80%",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#f5f5f5",
       
        boxSizing: "border-box",
        outline: "none",
        zIndex:"20",
        right:"5%",
        top:"90%"
    
      }}>
        <form action="submit"  onSubmit={sumg}>
             <input  value={vals} onChange={change}
  type="text" style={{width:"90%", fontSize: "16px",outline: 'none', 
  color: "#333", backgroundColor: "#f5f5f5", 
border:"none"}}
  placeholder="Type your message here"
  
  
/>

<button type="submit" style={{ color: "#333", backgroundColor: "#f5f5f5"}}>
    onSubmit
</button>
  </form>
       

</div>
  )
}

export default Textarea