import React from 'react'
import './Leftbar.css'
import Textarea from './Textarea'

function Leftbar() {
  return (
    <div className={`main-box r-style`}>
        
       <div>
     <h1>Chatgtp</h1>
        </div> 
        <div className='content-box'>
            <div className='bc'>
             
                    <button>this is for venktesh</button>
                    <button>this is for venktesh</button>
                    <button>this is for venktesh</button>
        
            </div>
            <div className='bc'>
            <button>ask me questions i am </button>
                    <button>this is for venktesh</button>
            <button> iam a chat application</button>
             <button>lets see where this takes us all</button>

            </div>
            <div className='bc'>
            <button>Im hungry and want to eat </button>
            <button>how can we stop world poverty</button>
             <button>I think it is a har task at hand</button>

            </div>
        </div>
       <Textarea/>
        
        </div>
  )
}

export default Leftbar